import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../types'
import { saveToken, clearToken } from '../lib/api'

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

      setUser: (user) => set({ user, isAuthenticated: true }),

      setToken: (token) => {
        // Write to localStorage immediately — before Zustand state updates
        saveToken(token)
        set({ accessToken: token })
      },

      setOnboarded: (isOnboarded) => set({ isOnboarded }),

      logout: () => {
        clearToken()
        set({
          user:            null,
          accessToken:     null,
          isAuthenticated: false,
          isOnboarded:     false,
        })
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
      // After rehydration, sync token to our dedicated key
      onRehydrateStorage: () => (state) => {
        if (state?.accessToken) {
          saveToken(state.accessToken)
        }
      },
    }
  )
)