import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'
import { ThemeProvider } from './lib/theme'

// Auth
import LandingPage       from './features/auth/LandingPage'
import SignUpPage        from './features/auth/SignUpPage'
import LoginPage         from './features/auth/LoginPage'
import VerifyCodePage    from './features/auth/VerifyCodePage'

// Onboarding
import ProfileBasicsPage from './features/onboarding/ProfileBasicsPage'
import ProfileWizard     from './features/onboarding/ProfileWizard'
import TemperamentQuiz   from './features/onboarding/TemperamentQuiz'
import CognitiveQuiz     from './features/onboarding/CognitiveQuiz'

// Phase 2
import Dashboard         from './features/dashboard/Dashboard'
import BrainBeatsPage    from './features/brain-beats/BrainBeatsPage'
import MeditationPage    from './features/meditation/MeditationPage'
import CrosswordPage     from './features/crossword/CrosswordPage'

// Phase 3
import TasksPage         from './features/tasks/TasksPage'
import HabitsPage        from './features/habits/HabitsPage'
import SelfAwarenessPage from './features/self-awareness/SelfAwarenessPage'
import ProfilePage       from './features/profile/ProfilePage'

// ─── Guards ──────────────────────────────────────────────────────────────────
function RequireAuth({ children }: { children: JSX.Element }) {
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

function ComingSoon({ name }: { name: string }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#F0EADF' }}>
      <div className="bg-white rounded-2xl p-8 text-center"
        style={{ boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
        <p className="text-4xl mb-4">🚧</p>
        <h1 className="text-xl font-bold mb-2"
          style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>{name}</h1>
        <p className="text-sm" style={{ color: '#8E7A99' }}>Coming in the next phase</p>
      </div>
    </div>
  )
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

          {/* Onboarding */}
          <Route path="/onboarding/profile"     element={<RequireAuth><ProfileBasicsPage /></RequireAuth>} />
          <Route path="/onboarding/step-1"      element={<RequireAuth><ProfileWizard /></RequireAuth>} />
          <Route path="/onboarding/temperament" element={<RequireAuth><TemperamentQuiz /></RequireAuth>} />
          <Route path="/onboarding/cognitive"   element={<RequireAuth><CognitiveQuiz /></RequireAuth>} />

          {/* Phase 2 */}
          <Route path="/dashboard"   element={<RequireAuth><Dashboard /></RequireAuth>} />
          <Route path="/brain-beats" element={<RequireAuth><BrainBeatsPage /></RequireAuth>} />
          <Route path="/meditation"  element={<RequireAuth><MeditationPage /></RequireAuth>} />
          <Route path="/crossword"   element={<RequireAuth><CrosswordPage /></RequireAuth>} />

          {/* Phase 3 */}
          <Route path="/tasks"          element={<RequireAuth><TasksPage /></RequireAuth>} />
          <Route path="/habits"         element={<RequireAuth><HabitsPage /></RequireAuth>} />
          <Route path="/self-awareness" element={<RequireAuth><SelfAwarenessPage /></RequireAuth>} />
          <Route path="/profile"        element={<RequireAuth><ProfilePage /></RequireAuth>} />

          {/* Phase 4 placeholders */}
          <Route path="/focus"          element={<RequireAuth><ComingSoon name="Focus Mode" /></RequireAuth>} />
          <Route path="/reports/weekly" element={<RequireAuth><ComingSoon name="Weekly Report" /></RequireAuth>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}