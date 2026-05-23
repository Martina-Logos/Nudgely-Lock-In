import OpenAI from 'openai'
import { prisma } from '../../lib/prisma'
import { AppError } from '../../middleware/errorHandler'
import { env } from '../../config/env'

const openai = new OpenAI({ apiKey: env.OPENAI_API_KEY, })
// ─── Get all tasks ────────────────────────────────────────────────────────────

export async function getAllTasks(userId: string) {
  const tasks = await prisma.task.findMany({
    where:   { userId },
    include: { subtasks: { orderBy: { order: 'asc' } } },
    orderBy: { createdAt: 'desc' },
  })
  return tasks
}

// ─── Create task from natural language ───────────────────────────────────────

export async function createTaskFromAI(userId: string, input: string) {
  let parsed: { title: string; drive: string; estimatedMinutes: number; subtasks: string[] }

  try {
    const response = await openai.chat.completions.create({
  model: 'gpt-5-mini',
  max_completion_tokens: 500,

  response_format: {
    type: 'json_object',
  },

  messages: [
    {
      role: 'system',
      content: 'You extract structured task data and return valid JSON only.',
    },

    {
      role: 'user',
      content: `Parse this task request:

"${input}"

Return JSON in this exact format:
{
  "title": "clear task title",
  "drive": "OnFire|DueSoon|LowLift|OpenSpace",
  "estimatedMinutes": number,
  "subtasks": ["step 1", "step 2", "step 3"]
}

Drive rules:
- OnFire: urgent, due today, critical
- DueSoon: has a deadline soon
- LowLift: admin, routine, low energy
- OpenSpace: creative, exploratory, no deadline`,
    },
  ],
})

const text = response.choices[0]?.message?.content || '{}'
parsed = JSON.parse(text)
  } catch {
    // Fallback if AI fails
    parsed = {
      title:            input,
      drive:            'OnFire',
      estimatedMinutes: 30,
      subtasks:         [],
    }
  }

  const task = await prisma.task.create({
    data: {
      userId,
      title:            parsed.title,
      naturalInput:     input,
      drive:            parsed.drive as any,
      estimatedMinutes: parsed.estimatedMinutes,
      aiSuggested:      true,
      subtasks: {
        create: parsed.subtasks.map((title: string, i: number) => ({
          title,
          order: i,
        })),
      },
    },
    include: { subtasks: { orderBy: { order: 'asc' } } },
  })

  return task
}

// ─── Update task ──────────────────────────────────────────────────────────────

export async function updateTask(userId: string, taskId: string, data: object) {
  const task = await prisma.task.findFirst({ where: { id: taskId, userId } })
  if (!task) throw new AppError(404, 'Task not found.', 'TASK_NOT_FOUND')

  return prisma.task.update({
    where:   { id: taskId },
    data:    data as any,
    include: { subtasks: true },
  })
}

// ─── Complete task ────────────────────────────────────────────────────────────

export async function completeTask(userId: string, taskId: string) {
  const task = await prisma.task.findFirst({ where: { id: taskId, userId } })
  if (!task) throw new AppError(404, 'Task not found.', 'TASK_NOT_FOUND')

  return prisma.task.update({
    where: { id: taskId },
    data:  { status: 'Done', completedAt: new Date() },
  })
}

// ─── Break down task with AI ──────────────────────────────────────────────────

export async function breakdownTask(userId: string, taskId: string) {
  const task = await prisma.task.findFirst({
    where:   { id: taskId, userId },
    include: { subtasks: true },
  })
  if (!task) throw new AppError(404, 'Task not found.', 'TASK_NOT_FOUND')

  let subtaskTitles: string[] = []

  try {
    const response = await openai.chat.completions.create({
  model: 'gpt-5-mini',
  max_completion_tokens: 400,

  response_format: {
    type: 'json_object',
  },

  messages: [
    {
      role: 'system',
      content: 'You break tasks into concrete actionable subtasks and return valid JSON only.',
    },

    {
      role: 'user',
      content: `Break this task into 3-5 small, concrete steps.

Task:
"${task.title}"

Return JSON in this exact format:
{
  "subtasks": ["step 1", "step 2", "step 3"]
}`,
    },
  ],
})

const text = response.choices[0]?.message?.content || '{}'

const parsed = JSON.parse(text)

subtaskTitles = parsed.subtasks || []
  } catch {
    subtaskTitles = [
      `Start working on: ${task.title}`,
      `Make progress on: ${task.title}`,
      `Complete: ${task.title}`,
    ]
  }

  // Delete existing subtasks and recreate
  await prisma.subtask.deleteMany({ where: { taskId } })

  const updated = await prisma.task.update({
    where: { id: taskId },
    data:  {
      subtasks: {
        create: subtaskTitles.map((title: string, i: number) => ({ title, order: i })),
      },
    },
    include: { subtasks: { orderBy: { order: 'asc' } } },
  })

  return updated
}

// ─── Complete subtask ─────────────────────────────────────────────────────────

export async function completeSubtask(userId: string, subtaskId: string) {
  const subtask = await prisma.subtask.findFirst({
    where: { id: subtaskId, task: { userId } },
  })
  if (!subtask) throw new AppError(404, 'Subtask not found.', 'SUBTASK_NOT_FOUND')

  return prisma.subtask.update({
    where: { id: subtaskId },
    data:  { completed: true, completedAt: new Date() },
  })
}

// ─── Delete task ──────────────────────────────────────────────────────────────

export async function deleteTask(userId: string, taskId: string) {
  const task = await prisma.task.findFirst({ where: { id: taskId, userId } })
  if (!task) throw new AppError(404, 'Task not found.', 'TASK_NOT_FOUND')

  await prisma.task.delete({ where: { id: taskId } })
  return { message: 'Task deleted.' }
}