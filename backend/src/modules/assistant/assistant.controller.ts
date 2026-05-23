// src/modules/assistant/assistant.controller.ts

import { Request, Response, NextFunction } from 'express'
import {
  chat,
  getChatHistory,
  clearChatHistory,
  getProactiveNudge,
  type ProactiveNudgeType,
} from './assistant.service'

// POST /api/assistant/chat
// Body: { message: string }
export async function handleChat(req: Request, res: Response, next: NextFunction) {
  try {
    const userId  = req.user!.userId
    const message = (req.body.message || '').trim()
    if (!message) return res.status(400).json({ message: 'Message is required' })

    const { reply, messageId } = await chat(userId, message)
    res.json({ reply, messageId })
  } catch (err) {
    next(err)
  }
}

// GET /api/assistant/history?limit=30
export async function handleGetHistory(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user!.userId
    const limit  = Math.min(parseInt(req.query.limit as string) || 30, 100)
    const history = await getChatHistory(userId, limit)
    res.json(history)
  } catch (err) {
    next(err)
  }
}

// DELETE /api/assistant/history
export async function handleClearHistory(req: Request, res: Response, next: NextFunction) {
  try {
    await clearChatHistory(req.user!.userId)
    res.json({ message: 'Conversation cleared.' })
  } catch (err) {
    next(err)
  }
}

// GET /api/assistant/nudge?type=dashboard_morning
export async function handleProactiveNudge(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.user!.userId
    const type   = req.query.type as ProactiveNudgeType

    const validTypes: ProactiveNudgeType[] = [
      'dashboard_morning', 'task_stuck', 'focus_start', 'journal_open',
    ]
    if (!validTypes.includes(type)) {
      return res.status(400).json({ message: 'Invalid nudge type' })
    }

    const nudge = await getProactiveNudge(userId, type)
    res.json({ nudge })
  } catch (err) {
    next(err)
  }
}