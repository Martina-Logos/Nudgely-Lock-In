import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../types'

interface AuthState {
  user:            User | null
  accessToken:     string | null
  isAuthenticated: boolean
  isOnboarded:     boolean
  setUser:         (user: User) => void
  setToken:        (token: string) => void
  setOnboarded:    (v: boolean) => void
  logout:          () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user:            null,
      accessToken:     null,
      isAuthenticated: false,
      isOnboarded:     false,

      setUser:  (user)  => set({ user, isAuthenticated: true }),

      setToken: (accessToken) => {
        localStorage.setItem('access_token', accessToken)
        set({ accessToken })
      },

      setOnboarded: (isOnboarded) => set({ isOnboarded }),

      logout: () => {
        localStorage.removeItem('access_token')
        set({ user: null, accessToken: null, isAuthenticated: false, isOnboarded: false })
      },
    }),
    {
      name: 'nudgely-auth',
      partialize: (s) => ({
        user:            s.user,
        accessToken:     s.accessToken,
        isAuthenticated: s.isAuthenticated,
        isOnboarded:     s.isOnboarded,
      }),
    }
  )
)