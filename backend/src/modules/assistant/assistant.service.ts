// src/modules/assistant/assistant.service.ts
//
// Two systems, one file.
// System A — proactive(): called by dashboard/task/focus/journal routes.
//            Returns a single contextual string. Never saved to DB.
// System B — chat(): the persistent conversation thread.
//            Saves every message. Injects last 10 + context summary.

import OpenAI from 'openai'
import { prisma } from '../../lib/prisma'
import {
  buildUserContext,
  buildLightContext,
} from './context.engine.service'
import { env } from '../../config/env'

const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
})

const MODEL = 'gpt-5-mini'

// ── Voice guidelines shared by both systems ───────────────────────────────────

const VOICE_RULES = `
You are Nudge — the AI companion inside Nudgely Lock-In, a cognitive wellness and
productivity app built for people with ADHD and focus challenges.

Voice rules (never break these):
- Warm, calm, specific. Never generic.
- Always reference the user's actual data — their task names, streak numbers, mood score.
- Never say "great job", "you've got this", or any hollow affirmation.
- Never suggest the user is failing. Avoidance is normal. Reframe it.
- Keep responses short. One idea per message. Two short paragraphs max.
- You are not a chatbot. You are a system that understands how this specific person works.
- Adapt to their personality mode (Soft = gentler, Bold = direct and energising).
- If they have a Melancholic temperament, be precise and structured.
- If Sanguine, be warm and enthusiastic but still brief.
- If Choleric, be direct and results-focused.
- If Phlegmatic, be patient and reassuring.
`.trim()

// ════════════════════════════════════════════════════════════════════════════
// SYSTEM A — Proactive one-way nudges
// ════════════════════════════════════════════════════════════════════════════

export type ProactiveNudgeType =
  | 'dashboard_morning'
  | 'task_stuck'
  | 'focus_start'
  | 'journal_open'

const PROACTIVE_PROMPTS: Record<
  ProactiveNudgeType,
  (ctx: string) => string
> = {
  dashboard_morning: (ctx) => `
${VOICE_RULES}

Context:
${ctx}

Generate a single morning nudge for the dashboard. Max 2 sentences.
Reference something specific from the context.

Do not start with "Good morning".
Do not use bullet points.

Output only the nudge text.
`,

  task_stuck: (ctx) => `
${VOICE_RULES}

Context:
${ctx}

The user is looking at a task marked as stuck.

Generate a single reframe — one or two sentences that:
- acknowledge why it feels stuck
- offer the smallest possible first action

Reference the task name if available.

Do not say "break it down" literally.

Output only the nudge text.
`,

  focus_start: (ctx) => `
${VOICE_RULES}

Context:
${ctx}

The user is about to start a focus session.

One sentence only.
Grounding, specific, forward-moving.
Reference their top task or mood if known.

Not motivational — practical.

Output only the sentence.
`,

  journal_open: (ctx) => `
${VOICE_RULES}

Context:
${ctx}

The user opened their journal.

Generate one reflection question tailored to:
- their mood
- what they are working on
- or a pattern you notice

One question only.

Do not start with "How are you".
Do not use the word "reflect".

Output only the question.
`,
}

export async function getProactiveNudge(
  userId: string,
  type: ProactiveNudgeType
): Promise<string> {
  try {
    const ctx = await buildLightContext(userId)
    const prompt = PROACTIVE_PROMPTS[type](ctx)

    const response = await openai.chat.completions.create({
      model: MODEL,

      max_completion_tokens: 120,

      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const text =
      response.choices[0]?.message?.content?.trim() || ''

    return text || getFallback(type)
  } catch (err) {
    console.error('[Nudge proactive]', err)
    return getFallback(type)
  }
}

function getFallback(type: ProactiveNudgeType): string {
  const fallbacks: Record<ProactiveNudgeType, string> = {
    dashboard_morning:
      "Your day is already in motion. What's the one thing that matters most right now?",

    task_stuck:
      "The stuck feeling is usually about the first step, not the whole task. What's a 5-minute slice of this?",

    focus_start:
      'One thing, one timer. Let everything else wait.',

    journal_open:
      "What's something that happened today that you haven't had time to process yet?",
  }

  return fallbacks[type]
}

// ════════════════════════════════════════════════════════════════════════════
// SYSTEM B — Persistent conversation thread
// ════════════════════════════════════════════════════════════════════════════

// The system prompt injected at the start of every conversation call.
// The full context is rebuilt fresh on every message — this creates
// the feeling of long-term memory without storing huge histories.

function buildSystemPrompt(context: string): string {
  return `${VOICE_RULES}

Current user context (rebuilt fresh for this message):
${context}

You are having an ongoing conversation with this user.

They may ask about:
- tasks
- habits
- mood
- emotional overwhelm
- focus
- or daily life

Rules:
- Reference their real data naturally.
- Never dump context mechanically.
- Ask follow-up questions only if genuinely useful.
- Keep responses conversational and appropriately brief.
- If they ask to break down a task, give concrete steps.
- If they share something emotional, acknowledge it before pivoting to action.
`
}

export async function chat(
  userId: string,
  userMessage: string
): Promise<{ reply: string; messageId: string }> {
  // 1. Save user message immediately

  const savedUserMsg = await prisma.chatMessage.create({
    data: {
      userId,
      role: 'user',
      content: userMessage,
    },
  })

  // 2. Fetch last 10 messages

  const history = await prisma.chatMessage.findMany({
    where: {
      userId,
      id: { not: savedUserMsg.id },
    },

    orderBy: {
      createdAt: 'desc',
    },

    take: 10,
  })

  // oldest → newest
  const historyAsc = history.reverse()

  // 3. Build fresh context

  const context = await buildUserContext(userId)

  // 4. Build OpenAI messages

  const messages: {
    role: 'user' | 'assistant'
    content: string
  }[] = [
    ...historyAsc.map((m) => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    })),

    {
      role: 'user',
      content: userMessage,
    },
  ]

  // 5. Generate reply

  let reply = ''

  try {
    const response = await openai.chat.completions.create({
      model: MODEL,

      max_completion_tokens: 400,

      messages: [
        {
          role: 'system',
          content: buildSystemPrompt(context),
        },

        ...messages.map((m) => ({
          role: m.role,
          content: m.content,
        })),
      ],
    })

    reply =
      response.choices[0]?.message?.content?.trim() ||
      "I'm having a moment — try again in a second. I'm still here."
  } catch (err) {
    console.error('[Nudge chat]', err)

    reply =
      "I'm having a moment — try again in a second. I'm still here."
  }

  // 6. Save assistant reply

  const savedAssistantMsg = await prisma.chatMessage.create({
    data: {
      userId,
      role: 'assistant',
      content: reply,
    },
  })

  return {
    reply,
    messageId: savedAssistantMsg.id,
  }
}

export async function getChatHistory(
  userId: string,
  limit = 30
): Promise<
  {
    id: string
    role: string
    content: string
    createdAt: Date
  }[]
> {
  const messages = await prisma.chatMessage.findMany({
    where: { userId },

    orderBy: {
      createdAt: 'desc',
    },

    take: limit,

    select: {
      id: true,
      role: true,
      content: true,
      createdAt: true,
    },
  })

  return messages.reverse()
}

export async function clearChatHistory(
  userId: string
): Promise<void> {
  await prisma.chatMessage.deleteMany({
    where: { userId },
  })
}