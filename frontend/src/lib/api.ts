import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'

export const api = axios.create({
  baseURL:         BASE_URL,
  headers:         { 'Content-Type': 'application/json' },
  withCredentials: true,
})

// ─── Token helpers ────────────────────────────────────────────────────────────
const TOKEN_KEY = 'nudgely_access_token'

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token)
  try {
    const raw = localStorage.getItem('nudgely-auth')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed?.state) {
        parsed.state.accessToken = token
        localStorage.setItem('nudgely-auth', JSON.stringify(parsed))
      }
    }
  } catch { /* ignore */ }
}

export function getStoredToken(): string | null {
  const direct = localStorage.getItem(TOKEN_KEY)
  if (direct) return direct
  try {
    const raw = localStorage.getItem('nudgely-auth')
    if (raw) {
      const parsed = JSON.parse(raw)
      return parsed?.state?.accessToken || null
    }
  } catch { /* ignore */ }
  return localStorage.getItem('access_token')
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem('access_token')
  try {
    const raw = localStorage.getItem('nudgely-auth')
    if (raw) {
      const parsed = JSON.parse(raw)
      if (parsed?.state) {
        parsed.state.accessToken = null
        parsed.state.isAuthenticated = false
        localStorage.setItem('nudgely-auth', JSON.stringify(parsed))
      }
    }
  } catch { /* ignore */ }
}

// ─── Request interceptor — reads token directly from localStorage ─────────────
api.interceptors.request.use(
  (config) => {
    const token = getStoredToken()
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// ─── Response interceptor — refresh on 401 ────────────────────────────────────
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const { data } = await api.post('/auth/refresh')
        saveToken(data.accessToken)
        original.headers['Authorization'] = `Bearer ${data.accessToken}`
        return api(original)
      } catch {
        clearToken()
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export const authApi = {
  register:  (email: string, password: string) => api.post('/auth/register', { email, password }),
  verifyOtp: (email: string, otp: string)      => api.post('/auth/verify-otp', { email, otp }),
  resendOtp: (email: string)                   => api.post('/auth/resend-otp', { email }),
  login:     (email: string, password: string) => api.post('/auth/login', { email, password }),
  logout:    ()                                => api.post('/auth/logout'),
  refresh:   ()                                => api.post('/auth/refresh'),
}

export const onboardingApi = {
  saveProfile:       (data: object)      => api.post('/onboarding/profile', data),
  savePreferences:   (data: object)      => api.post('/onboarding/preferences', data),
  submitTemperament: (answers: number[]) => api.post('/onboarding/temperament', { answers }),
  submitCognitive:   (data: object)      => api.post('/onboarding/cognitive', data),
}

export const tasksApi = {
  getAll:          ()                         => api.get('/tasks'),
  create:          (input: string)            => api.post('/tasks/ai', { input }),
  update:          (id: string, data: object) => api.patch(`/tasks/${id}`, data),
  delete:          (id: string)               => api.delete(`/tasks/${id}`),
  breakdown:       (id: string)               => api.post(`/tasks/${id}/breakdown`),
  complete:        (id: string)               => api.post(`/tasks/${id}/complete`),
  completeSubtask: (subtaskId: string)        => api.post(`/tasks/subtasks/${subtaskId}/complete`),
}

export const habitsApi = {
  getAll:   ()             => api.get('/habits'),
  create:   (data: object) => api.post('/habits', data),
  complete: (id: string)   => api.post(`/habits/${id}/complete`),
  delete:   (id: string)   => api.delete(`/habits/${id}`),
}

export const journalApi = {
  getAll:    ()             => api.get('/journal'),
  getToday:  ()             => api.get('/journal/today'),
  getPrompt: ()             => api.get('/journal/prompt'),
  save:      (data: object) => api.post('/journal', data),
}

export const sessionsApi = {
  logFocus:      (data: object) => api.post('/sessions/focus', data),
  logMeditation: (data: object) => api.post('/sessions/meditation', data),
  getTodayFocus: ()             => api.get('/sessions/focus/today'),
}

export const reportsApi = {
  getWeekly: (weekStart?: string) => api.get('/reports/weekly', { params: { weekStart } }),
}

export const userApi = {
  getMe:   ()             => api.get('/users/me'),
  update:  (data: object) => api.patch('/users/me', data),
  delete:  ()             => api.delete('/users/me'),
}

// ─────────────────────────────────────────────────────────────────────────────
// ADD THESE TO your existing src/lib/api.ts
// Paste the assistantApi object alongside your other API groups
// ─────────────────────────────────────────────────────────────────────────────

export const assistantApi = {
  // Send a message and get a reply
  chat: async (message: string) => {
    const response = await api.post<{
      reply: string
      messageId: string
    }>('/assistant/chat', { message })

    return response.data
  },

  // Load conversation history
  getHistory: async (limit = 30) => {
    const response = await api.get<
      { id: string; role: string; content: string; createdAt: string }[]
    >(`/assistant/history?limit=${limit}`)

    return response.data
  },

  // Clear the full conversation
  clearHistory: async () => {
    const response = await api.delete('/assistant/history')
    return response.data
  },

  // Get a proactive contextual nudge
  getNudge: async (
    type: 'dashboard_morning' | 'task_stuck' | 'focus_start' | 'journal_open'
  ) => {
    const response = await api.get<{ nudge: string }>(
      `/assistant/nudge?type=${type}`
    )

    return response.data
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// ALSO ADD to app.ts (backend) — register the new route:
//
//   import assistantRoutes from './modules/assistant/assistant.routes'
//   app.use(`${API}/assistant`, assistantRoutes)
//
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO USE useNudge on each screen:
//
// Dashboard.tsx:
//   import { useNudge } from '../../hooks/useNudge'
//   const { nudge, loading } = useNudge('dashboard_morning')
//   // Replace the hardcoded aiNudge string with: nudge || aiNudge
//
// TasksPage.tsx (on the stuck task card):
//   const { nudge } = useNudge('task_stuck', hasSomeStuckTask)
//   // Show below the stuck task as a soft prompt line
//
// FocusPage.tsx (on the setup screen):
//   const { nudge } = useNudge('focus_start')
//   // Show as a single line above the Start button
//
// SelfAwarenessPage.tsx (journal):
//   const { nudge } = useNudge('journal_open')
//   // Use as the placeholder or prompt above the textarea
// ─────────────────────────────────────────────────────────────────────────────