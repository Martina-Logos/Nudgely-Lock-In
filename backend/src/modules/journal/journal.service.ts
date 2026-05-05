import Anthropic from '@anthropic-ai/sdk'
import { prisma } from '../../lib/prisma'
import { AppError } from '../../middleware/errorHandler'
import { env } from '../../config/env'
import { format } from 'date-fns'

const anthropic = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY })

// ─── Get all entries ──────────────────────────────────────────────────────────

export async function getAllEntries(userId: string) {
  return prisma.journalEntry.findMany({
    where:   { userId },
    orderBy: { date: 'desc' },
    take:    30,
  })
}

// ─── Get today's entry ────────────────────────────────────────────────────────

export async function getTodayEntry(userId: string) {
  const today = format(new Date(), 'yyyy-MM-dd')
  return prisma.journalEntry.findUnique({
    where: { userId_date: { userId, date: today } },
  })
}

// ─── Save entry ───────────────────────────────────────────────────────────────

export async function saveEntry(userId: string, data: {
  text?:         string
  tags?:         string[]
  moodScore:     number
  sleepQuality?: number
  useAiPrompt?:  boolean
}) {
  const today = format(new Date(), 'yyyy-MM-dd')

  let aiInsight: string | null = null

  // Generate AI insight if text provided
  if (data.text && data.text.length > 20) {
    try {
      const message = await anthropic.messages.create({
        model:      'claude-sonnet-4-20250514',
        max_tokens: 150,
        messages: [{
          role:    'user',
          content: `You are a supportive AI coach for someone with ADHD. Based on this journal entry, write ONE short insight or observation (max 2 sentences). Be warm, non-judgmental, and specific to what they wrote. Do not use bullet points.

Journal: "${data.text}"`,
        }],
      })
      aiInsight = message.content[0].type === 'text' ? message.content[0].text : null
    } catch {
      // AI insight is optional — continue without it
    }
  }

  // Upsert — one entry per day
  return prisma.journalEntry.upsert({
    where:  { userId_date: { userId, date: today } },
    create: {
      userId,
      date:         today,
      text:         data.text || null,
      tags:         data.tags || [],
      moodScore:    data.moodScore,
      sleepQuality: data.sleepQuality || null,
      aiInsight,
      aiPromptUsed: data.useAiPrompt || false,
    },
    update: {
      text:         data.text || null,
      tags:         data.tags || [],
      moodScore:    data.moodScore,
      sleepQuality: data.sleepQuality || null,
      aiInsight,
      aiPromptUsed: data.useAiPrompt || false,
    },
  })
}

// ─── Get AI journal prompt ────────────────────────────────────────────────────

export async function getAiPrompt(userId: string) {
  // Get recent mood data to personalise the prompt
  const recentEntries = await prisma.journalEntry.findMany({
    where:   { userId },
    orderBy: { date: 'desc' },
    take:    3,
    select:  { moodScore: true, tags: true },
  })

  const avgMood = recentEntries.length
    ? recentEntries.reduce((sum, e) => sum + e.moodScore, 0) / recentEntries.length
    : 3

  try {
    const message = await anthropic.messages.create({
      model:      'claude-sonnet-4-20250514',
      max_tokens: 100,
      messages: [{
        role:    'user',
        content: `Generate ONE short, open-ended journal prompt for someone with ADHD. Their recent average mood is ${avgMood.toFixed(1)}/5. The prompt should be warm, non-judgmental, and take less than 5 minutes to answer. Return only the prompt text, no quotes or extra formatting.`,
      }],
    })

    const prompt = message.content[0].type === 'text' ? message.content[0].text : null
    return { prompt: prompt || 'What\'s one small thing that went well today?' }
  } catch {
    return { prompt: 'What\'s one small thing that went well today?' }
  }
}