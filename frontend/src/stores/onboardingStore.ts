import { create } from 'zustand'
import type { UserRole, FocusTime, EmotionalState, Distraction, MainGoal, PersonalityVibe, Temperament } from '../types'

interface OnboardingStore {
  name: string; username: string; email: string; avatarUrl: string | null
  displayName: string; timezone: string; role: UserRole | null
  focusTime: FocusTime | null; emotionalState: EmotionalState | null; distractions: Distraction[]
  mainGoal: MainGoal | null; weeklyGoal: string; personalityVibe: PersonalityVibe | null
  temperamentAnswers: (number | null)[]; temperament: Temperament | null
  iqAnswers: (number | null)[]; eqAnswers: (number | null)[]; sqAnswers: (number | null)[]

  setProfileBasics:     (d: { name: string; username: string; email: string; avatarUrl?: string }) => void
  setStep1:             (d: { displayName: string; timezone: string; role: UserRole }) => void
  setStep2:             (d: { focusTime: FocusTime; emotionalState: EmotionalState; distractions: Distraction[] }) => void
  setStep3:             (d: { mainGoal: MainGoal; weeklyGoal: string; personalityVibe: PersonalityVibe }) => void
  setTemperamentAnswer: (qi: number, ai: number) => void
  setTemperament:       (t: Temperament) => void
  setCognitiveAnswer:   (s: 'iq' | 'eq' | 'sq', qi: number, ai: number) => void
  reset:                () => void
}

const init = {
  name: '', username: '', email: '', avatarUrl: null,
  displayName: '', timezone: '', role: null,
  focusTime: null, emotionalState: null, distractions: [],
  mainGoal: null, weeklyGoal: '', personalityVibe: null,
  temperamentAnswers: [null, null, null, null], temperament: null,
  iqAnswers: [null, null, null], eqAnswers: [null, null, null], sqAnswers: [null, null, null],
}

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  ...init,
  setProfileBasics: (d) => set({ name: d.name, username: d.username, email: d.email, avatarUrl: d.avatarUrl ?? null }),
  setStep1: (d) => set({ displayName: d.displayName, timezone: d.timezone, role: d.role }),
  setStep2: (d) => set({ focusTime: d.focusTime, emotionalState: d.emotionalState, distractions: d.distractions }),
  setStep3: (d) => set({ mainGoal: d.mainGoal, weeklyGoal: d.weeklyGoal, personalityVibe: d.personalityVibe }),
  setTemperamentAnswer: (qi, ai) => set((s) => { const a = [...s.temperamentAnswers]; a[qi] = ai; return { temperamentAnswers: a } }),
  setTemperament: (temperament) => set({ temperament }),
  setCognitiveAnswer: (section, qi, ai) => set((s) => {
    const key = `${section}Answers` as 'iqAnswers' | 'eqAnswers' | 'sqAnswers'
    const a = [...s[key]]; a[qi] = ai; return { [key]: a }
  }),
  reset: () => set(init),
}))