import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { env } from './config/env'
import { errorHandler } from './middleware/errorHandler'

// ─── Route imports (uncomment as each module is built) ────────────────────────
import authRoutes        from './modules/auth/auth.routes'
import onboardingRoutes  from './modules/onboarding/onboarding.routes'
import usersRoutes       from './modules/users/users.routes'
import tasksRoutes       from './modules/tasks/tasks.routes'
import habitsRoutes      from './modules/habits/habits.routes'
import journalRoutes     from './modules/journal/journal.routes'
import sessionsRoutes    from './modules/sessions/sessions.routes'
import reportsRoutes     from './modules/reports/reports.routes'

const app = express()

// ─── Security ─────────────────────────────────────────────────────────────────
app.use(helmet())

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(cors({
  origin:      env.CLIENT_URL,
  credentials: true,             // allows cookies to be sent
  methods:     ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// ─── Body parsing ─────────────────────────────────────────────────────────────
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', env: env.NODE_ENV, timestamp: new Date().toISOString() })
})

// ─── API Routes ───────────────────────────────────────────────────────────────
const API = '/api'

app.use(`${API}/auth`,        authRoutes)
app.use(`${API}/onboarding`,  onboardingRoutes)
app.use(`${API}/users`,       usersRoutes)
app.use(`${API}/tasks`,       tasksRoutes)
app.use(`${API}/habits`,      habitsRoutes)
app.use(`${API}/journal`,     journalRoutes)
app.use(`${API}/sessions`,    sessionsRoutes)
app.use(`${API}/reports`,     reportsRoutes)

// ─── 404 ──────────────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ message: 'Route not found' })
})

// ─── Global error handler (must be last) ──────────────────────────────────────
app.use(errorHandler)

export default app