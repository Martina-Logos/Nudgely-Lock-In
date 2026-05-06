import axios from 'axios'

const BASE_URL = '/api'

export const api = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const original = error.config
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        const { data } = await api.post('/auth/refresh')
        localStorage.setItem('access_token', data.accessToken)
        original.headers.Authorization = `Bearer ${data.accessToken}`
        return api(original)
      } catch {
        localStorage.removeItem('access_token')
        window.location.href = '/signup'
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
  saveProfile:     (data: object) => api.post('/onboarding/profile', data),
  savePreferences: (data: object) => api.post('/onboarding/preferences', data),
  submitTemperament: (answers: number[]) => api.post('/onboarding/temperament', { answers }),
  submitCognitive: (data: object) => api.post('/onboarding/cognitive', data),
}

export const tasksApi = {
  getAll:    ()                        => api.get('/tasks'),
  create:    (input: string)           => api.post('/tasks/ai', { input }),
  update:    (id: string, data: object) => api.patch(`/tasks/${id}`, data),
  delete:    (id: string)              => api.delete(`/tasks/${id}`),
  breakdown: (id: string)              => api.post(`/tasks/${id}/breakdown`),
  complete:  (id: string)              => api.post(`/tasks/${id}/complete`),
}

export const habitsApi = {
  getAll:   ()           => api.get('/habits'),
  create:   (data: object) => api.post('/habits', data),
  complete: (id: string) => api.post(`/habits/${id}/complete`),
  delete:   (id: string) => api.delete(`/habits/${id}`),
}

export const journalApi = {
  getAll:    () => api.get('/journal'),
  getToday:  () => api.get('/journal/today'),
  getPrompt: () => api.get('/journal/prompt'),
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
  getMe:  ()             => api.get('/users/me'),
  update: (data: object) => api.patch('/users/me', data),
  delete: ()             => api.delete('/users/me'),
}