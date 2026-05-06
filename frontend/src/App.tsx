import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './stores/authStore'

import LandingPage       from './features/auth/LandingPage'
import SignUpPage        from './features/auth/SignUpPage'
import VerifyCodePage    from './features/auth/VerifyCodePage'
import ProfileBasicsPage from './features/onboarding/ProfileBasicsPage'
import ProfileWizard     from './features/onboarding/ProfileWizard'
import TemperamentQuiz   from './features/onboarding/TemperamentQuiz'
import CognitiveQuiz     from './features/onboarding/CognitiveQuiz'

// ─── Guards ──────────────────────────────────────────────────────────────────
function RequireAuth({ children }: { children: JSX.Element }) {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
  if (!isAuthenticated) return <Navigate to="/signup" replace />
  return children
}

function AlreadyAuthed({ children }: { children: JSX.Element }) {
  const { isAuthenticated, isOnboarded } = useAuthStore()
  if (isAuthenticated && isOnboarded)  return <Navigate to="/dashboard" replace />
  if (isAuthenticated && !isOnboarded) return <Navigate to="/onboarding/profile" replace />
  return children
}

// ─── Placeholder for screens not yet built ───────────────────────────────────
function ComingSoon({ name }: { name: string }) {
  return (
    <div className="min-h-screen bg-[#F0EADF] flex flex-col items-center justify-center px-6">
      <div className="bg-white rounded-2xl p-8 text-center shadow-[0_2px_12px_rgba(116,77,131,0.08)]">
        <p className="text-4xl mb-4">🚧</p>
        <h1 className="text-xl font-bold mb-2" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>{name}</h1>
        <p className="text-[#9B8EA5] text-sm">Coming in the next phase</p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Entry */}
        <Route path="/" element={<AlreadyAuthed><LandingPage /></AlreadyAuthed>} />
        <Route path="/signup" element={<AlreadyAuthed><SignUpPage /></AlreadyAuthed>} />
        <Route path="/verify" element={<VerifyCodePage />} />

        {/* Onboarding */}
        <Route path="/onboarding/profile"    element={<RequireAuth><ProfileBasicsPage /></RequireAuth>} />
        <Route path="/onboarding/step-1"     element={<RequireAuth><ProfileWizard /></RequireAuth>} />
        <Route path="/onboarding/temperament" element={<RequireAuth><TemperamentQuiz /></RequireAuth>} />
        <Route path="/onboarding/cognitive"  element={<RequireAuth><CognitiveQuiz /></RequireAuth>} />

        {/* Main app — placeholders until Phase 2+ */}
        <Route path="/dashboard"      element={<RequireAuth><ComingSoon name="Dashboard" /></RequireAuth>} />
        <Route path="/tasks"          element={<RequireAuth><ComingSoon name="Tasks" /></RequireAuth>} />
        <Route path="/habits"         element={<RequireAuth><ComingSoon name="Habits" /></RequireAuth>} />
        <Route path="/self-awareness" element={<RequireAuth><ComingSoon name="Self Awareness" /></RequireAuth>} />
        <Route path="/brain-beats"    element={<RequireAuth><ComingSoon name="Brain Beats" /></RequireAuth>} />
        <Route path="/meditation"     element={<RequireAuth><ComingSoon name="Meditation" /></RequireAuth>} />
        <Route path="/focus"          element={<RequireAuth><ComingSoon name="Focus Mode" /></RequireAuth>} />
        <Route path="/reports/weekly" element={<RequireAuth><ComingSoon name="Weekly Report" /></RequireAuth>} />
        <Route path="/profile"        element={<RequireAuth><ComingSoon name="Profile" /></RequireAuth>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}