import type { JSX, ReactNode } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { ThemeProvider } from './lib/theme'

// Auth
import LandingPage       from './features/auth/LandingPage'
import SignUpPage        from './features/auth/SignUpPage'
import LoginPage         from './features/auth/LoginPage'
import VerifyCodePage    from './features/auth/VerifyCodePage'
import AuthCallbackPage from './features/auth/AuthCallbackPage'

// Onboarding
import ProfileBasicsPage from './features/onboarding/ProfileBasicsPage'
import ProfileWizard     from './features/onboarding/ProfileWizard'
import TemperamentQuiz   from './features/onboarding/TemperamentQuiz'
import CognitiveQuiz     from './features/onboarding/CognitiveQuiz'

// Phase 2
import Dashboard         from './features/dashboard/Dashboard'
import BrainBeatsPage    from './features/brain-beats/BrainBeatsPage'
import MeditationPage    from './features/meditation/MeditationPage'
import ScramblePage     from './features/scramble/ScramblePage'

// Phase 3
import TasksPage         from './features/tasks/TasksPage'
import HabitsPage        from './features/habits/HabitsPage'
import FocusPage         from './features/focus/FocusPage'
import SelfAwarenessPage from './features/self-awareness/SelfAwarenessPage'
import ProfilePage       from './features/profile/ProfilePage'
import AboutPage         from './features/about/AboutPage'
import WeeklyReportPage from './features/reports/WeeklyReportPage'

// ─── Guards ──────────────────────────────────────────────────────────────────
function RequireAuth({ children }: { children: ReactNode }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}

function AlreadyAuthed({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isOnboarded } = useAuthStore()
  if (isAuthenticated && isOnboarded)  return <Navigate to="/dashboard" replace />
  if (isAuthenticated && !isOnboarded) return <Navigate to="/onboarding/profile" replace />
  return children
}


// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Entry */}
          <Route path="/"       element={<AlreadyAuthed><LandingPage /></AlreadyAuthed>} />
          <Route path="/signup" element={<AlreadyAuthed><SignUpPage /></AlreadyAuthed>} />
          <Route path="/login"  element={<AlreadyAuthed><LoginPage /></AlreadyAuthed>} />
          <Route path="/verify" element={<VerifyCodePage />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />

          {/* Onboarding */}
          <Route path="/onboarding/profile"     element={<RequireAuth><ProfileBasicsPage /></RequireAuth>} />
          <Route path="/onboarding/step-1"      element={<RequireAuth><ProfileWizard /></RequireAuth>} />
          <Route path="/onboarding/temperament" element={<RequireAuth><TemperamentQuiz /></RequireAuth>} />
          <Route path="/onboarding/cognitive"   element={<RequireAuth><CognitiveQuiz /></RequireAuth>} />

          {/* Phase 2 */}
          <Route path="/dashboard"   element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/brain-beats" element={<RequireAuth><BrainBeatsPage /></RequireAuth>} />
          <Route path="/meditation"  element={<RequireAuth><MeditationPage /></RequireAuth>} />
          <Route path="/scramble"   element={<RequireAuth><ScramblePage /></RequireAuth>} />

          {/* Phase 3 */}
          <Route path="/about"          element={<RequireAuth><AboutPage /></RequireAuth>} />
          <Route path="/tasks"          element={<RequireAuth><TasksPage /></RequireAuth>} />
          <Route path="/habits"         element={<RequireAuth><HabitsPage /></RequireAuth>} />
          <Route path="/self-awareness" element={<RequireAuth><SelfAwarenessPage /></RequireAuth>} />
          <Route path="/profile"        element={<RequireAuth><ProfilePage /></RequireAuth>} />

          {/* Phase 4 placeholders */}
          <Route path="/focus" element={<RequireAuth><FocusPage /></RequireAuth>} />
          <Route path="/reports/weekly" element={<RequireAuth><WeeklyReportPage /></RequireAuth>} />
          <Route path="/about" element={<RequireAuth><AboutPage /></RequireAuth>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}