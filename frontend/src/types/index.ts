export type UserRole = 'Student' | 'Professional' | 'Creator' | 'Entrepreneur'
export type Temperament = 'Sanguine' | 'Choleric' | 'Melancholic' | 'Phlegmatic'
export type PersonalityVibe = 'Soft' | 'Bold'
export type FocusTime = 'Morning' | 'Afternoon' | 'Evening' | 'Night'
export type EmotionalState = 'Anxious' | 'Energetic' | 'Calm' | 'Overwhelmed'
export type Distraction = 'SocialMedia' | 'RacingThoughts' | 'OtherPeople' | 'Perfectionism'
export type MainGoal = 'StayingFocused' | 'BeatingProcrastination' | 'BuildingHabits' | 'ManagingADHD'
export type Drive = 'OnFire' | 'DueSoon' | 'LowLift' | 'OpenSpace'
export type TaskStatus = 'Todo' | 'WorkingOnIt' | 'PushedBack' | 'StuckOnThis' | 'Done'
export type MeditationMode = 'Focus' | 'Calm' | 'Sleep' | 'Energy'
export type MoodScore = 1 | 2 | 3 | 4 | 5

export interface User {
  id:               string
  email:            string
  displayName:      string
  username?:        string
  avatarUrl?:       string
  timezone:         string
  role?:            UserRole
  temperament?:     Temperament
  iqScore?:         number
  eqScore?:         number
  sqScore?:         number
  personalityVibe?: PersonalityVibe
  focusTime?:       FocusTime
  emotionalState?:  EmotionalState
  distractions?:    Distraction[]
  mainGoal?:        MainGoal
  weeklyGoal?:      string
  isEmailVerified:  boolean
  isOnboarded:      boolean
  createdAt:        string
}

export interface Subtask {
  id:               string
  title:            string
  estimatedMinutes?: number
  completed:        boolean
  completedAt?:     string
  order:            number
  taskId:           string
}

export interface Task {
  id:               string
  title:            string
  naturalInput?:    string
  drive:            Drive
  status:           TaskStatus
  estimatedMinutes?: number
  dueDate?:         string
  completedAt?:     string
  aiSuggested:      boolean
  aiNudge?:         string
  userId:           string
  subtasks:         Subtask[]
  createdAt:        string
  updatedAt:        string
}

export interface Habit {
  id:         string
  name:       string
  emoji:      string
  type:       'Build' | 'Quit'
  frequency:  'Daily' | 'Weekdays' | 'Custom'
  strength:   'Weak' | 'Moderate' | 'High'
  streak:     number
  bestStreak: number
  completions: { id: string; date: string; completedAt: string }[]
}

export interface JournalEntry {
  id:           string
  text?:        string
  tags:         string[]
  moodScore:    number
  sleepQuality?: number
  date:         string
  aiInsight?:   string
}

export interface WeeklyReport {
  weekStart:      string
  weekEnd:        string
  totalFocusMin:  number
  tasksDone:      number
  avgMood:        number
  dailyFocusData: { day: string; minutes: number }[]
  moodTrendData:  { day: string; score: number }[]
  wins:           string[]
  tips:           string[]
  aiSummary?:     string
}