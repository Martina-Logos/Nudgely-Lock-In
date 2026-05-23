// src/modules/assistant/assistant.routes.ts

import { Router } from 'express'
import { authenticate }         from '../../middleware/auth'
import { validate }             from '../../middleware/validate'
import {
  handleChat,
  handleGetHistory,
  handleClearHistory,
  handleProactiveNudge,
} from './assistant.controller'

const router = Router()

// All assistant routes require auth
router.use(authenticate)

// POST /api/assistant/chat
router.post(
  '/chat',
  validate({ message: { required: true, type: 'string', minLength: 1 } }),
  handleChat
)

// GET /api/assistant/history
router.get('/history', handleGetHistory)

// DELETE /api/assistant/history
router.delete('/history', handleClearHistory)

// GET /api/assistant/nudge?type=dashboard_morning
router.get('/nudge', handleProactiveNudge)

export default router