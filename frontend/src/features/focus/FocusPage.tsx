import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../../lib/theme'
import { sessionsApi } from '../../lib/api'

type FocusScreen = 'setup' | 'session' | 'complete'

const DURATIONS = [
  { label: '25 min', value: 25, desc: 'Classic Pomodoro' },
  { label: '45 min', value: 45, desc: 'Deep work' },
  { label: '60 min', value: 60, desc: 'Flow state' },
  { label: '90 min', value: 90, desc: 'Ultra focus' },
]

const MOTIVATIONS = [
  "Stay here, you've got this",
  "One task at a time",
  "You're doing great",
  "Deep focus unlocked",
  "This is your moment",
  "Stay with it",
]

// ─── Setup screen ─────────────────────────────────────────────────────────────
function FocusSetup({ onStart, theme }: {
  onStart: (duration: number, taskTitle: string) => void
  theme: any
}) {
  const navigate     = useNavigate()
  const location     = useLocation()
  const [duration, setDuration]     = useState(25)
  const [taskTitle, setTaskTitle]   = useState(
    (location.state as any)?.taskTitle || ''
  )

  return (
    <div className="min-h-screen flex flex-col px-5 pt-6 pb-10"
      style={{ backgroundColor: theme.bgPrimary }}>

      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <button onClick={() => navigate('/dashboard')}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: theme.cardBg, border: 'none', cursor: 'pointer' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h1 className="text-xl font-bold"
          style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
          Focus Mode
        </h1>
      </div>

      {/* Task input */}
      <div className="mb-6">
        <p className="text-sm font-semibold mb-2" style={{ color: theme.textSecondary }}>
          What are you working on?
        </p>
        <input className="input" placeholder="e.g. Design mockups, Write report..."
          value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
      </div>

      {/* Duration picker */}
      <p className="text-sm font-semibold mb-3" style={{ color: theme.textSecondary }}>
        Session duration
      </p>
      <div className="grid grid-cols-2 gap-3 mb-8">
        {DURATIONS.map(d => (
          <button key={d.value} onClick={() => setDuration(d.value)}
            className="py-4 px-4 rounded-2xl flex flex-col items-start transition-all active:scale-98"
            style={{
              backgroundColor: duration === d.value ? `${theme.accent}20` : theme.cardBg,
              border: `2px solid ${duration === d.value ? theme.accent : theme.navBorder}`,
              cursor: 'pointer',
            }}>
            <span className="text-lg font-bold mb-0.5"
              style={{ color: duration === d.value ? theme.accent : theme.textPrimary }}>
              {d.label}
            </span>
            <span className="text-xs" style={{ color: theme.textSecondary }}>{d.desc}</span>
          </button>
        ))}
      </div>

      {/* Brain beats toggle note */}
      <div className="rounded-2xl p-4 mb-8 flex items-center gap-3"
        style={{ backgroundColor: theme.cardBg }}>
        <span className="text-2xl">🎵</span>
        <div>
          <p className="text-sm font-semibold" style={{ color: theme.textPrimary }}>Brain Beats</p>
          <p className="text-xs" style={{ color: theme.textSecondary }}>
            Start Brain Beats before entering focus for ambient audio
          </p>
        </div>
      </div>

      <div className="mt-auto">
        <button className="btn-primary" onClick={() => onStart(duration, taskTitle)}
          style={{ backgroundColor: theme.ctaBg }}>
          Start Focus Session
        </button>
      </div>
    </div>
  )
}

// ─── Active session ───────────────────────────────────────────────────────────
function FocusSession({ duration, taskTitle, onComplete, onExit }: {
  duration: number; taskTitle: string
  onComplete: () => void; onExit: () => void
}) {
  const totalSeconds  = duration * 60
  const [remaining, setRemaining]   = useState(totalSeconds)
  const [paused, setPaused]         = useState(false)
  const [motivation, setMotivation] = useState(MOTIVATIONS[0])
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  const percent = Math.round(((totalSeconds - remaining) / totalSeconds) * 100)

  // Countdown
  useEffect(() => {
    const t = setInterval(() => {
      if (!pausedRef.current) {
        setRemaining(r => {
          if (r <= 1) { clearInterval(t); onComplete(); return 0 }
          return r - 1
        })
      }
    }, 1000)
    return () => clearInterval(t)
  }, [onComplete])

  // Rotate motivation message every 2 minutes
  useEffect(() => {
    const t = setInterval(() => {
      setMotivation(MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)])
    }, 120000)
    return () => clearInterval(t)
  }, [])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60

  // SVG ring
  const size  = 220
  const r     = 95
  const circ  = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-10"
      style={{ backgroundColor: '#744D83' }}>

      {/* Top bar */}
      <div className="flex items-center justify-between w-full">
        <button onClick={onExit}
          className="w-9 h-9 rounded-full flex items-center justify-center"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <span className="text-white text-sm font-semibold opacity-80">
          {taskTitle || 'Focus Session'}
        </span>

        <button
          onClick={() => window.history.pushState({}, '', '/brain-beats')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: 'none', cursor: 'pointer' }}>
          🎵 Beats
        </button>
      </div>

      {/* Timer ring */}
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {/* Track */}
            <circle cx={size/2} cy={size/2} r={r}
              fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />
            {/* Progress */}
            <circle cx={size/2} cy={size/2} r={r}
              fill="none" stroke="#23BBB7" strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circ} strokeDashoffset={offset}
              transform={`rotate(-90 ${size/2} ${size/2})`}
              style={{ transition: 'stroke-dashoffset 1s linear' }} />
          </svg>

          {/* Timer text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-white opacity-60 text-sm font-medium mb-1">{percent}%</span>
            <span className="text-white font-bold tabular-nums"
              style={{ fontSize: 52, fontFamily: '"DM Serif Display", serif', lineHeight: 1 }}>
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
            {taskTitle && (
              <span className="text-white opacity-70 text-sm mt-2 text-center px-4">
                {taskTitle}
              </span>
            )}
          </div>
        </div>

        {/* Drive badge */}
        <div className="mt-4 px-4 py-1.5 rounded-full"
          style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
          <span className="text-white text-xs font-semibold">🔥 On Fire</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="w-full flex flex-col items-center gap-4">
        <p className="text-white opacity-60 text-sm">{motivation}</p>

        <button onClick={() => setPaused(p => !p)}
          className="w-16 h-16 rounded-full flex items-center justify-center transition-all active:scale-95"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer' }}>
          {paused ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5V19L19 12L8 5Z" fill="white" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white" />
            </svg>
          )}
        </button>

        <p className="text-white text-xs opacity-40">Nudgely</p>
      </div>
    </div>
  )
}

// ─── Complete screen ───────────────────────────────────────────────────────────
function FocusComplete({ duration, taskTitle, onAgain, theme }: {
  duration: number; taskTitle: string
  onAgain: () => void; theme: any
}) {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: theme.bgPrimary }}>
      <div className="w-full max-w-sm text-center">
        {/* Celebration */}
        <div className="text-6xl mb-4 animate-bounce-soft">✨</div>
        <h1 className="text-3xl font-bold mb-2"
          style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
          Session Complete!
        </h1>
        <p className="text-base mb-2" style={{ color: theme.textSecondary }}>
          {duration} minutes of deep focus
        </p>
        {taskTitle && (
          <p className="text-sm mb-8 px-4 py-2 rounded-full inline-block"
            style={{ backgroundColor: `${theme.accent}20`, color: theme.accent }}>
            {taskTitle}
          </p>
        )}

        {/* Stats */}
        <div className="rounded-2xl p-5 mb-8 flex justify-around"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 4px 20px rgba(116,77,131,0.10)' }}>
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: theme.textPrimary }}>{duration}</p>
            <p className="text-xs" style={{ color: theme.textSecondary }}>Minutes</p>
          </div>
          <div className="w-px" style={{ backgroundColor: theme.navBorder }} />
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: theme.accent }}>+{duration}</p>
            <p className="text-xs" style={{ color: theme.textSecondary }}>Focus mins</p>
          </div>
          <div className="w-px" style={{ backgroundColor: theme.navBorder }} />
          <div className="text-center">
            <p className="text-2xl font-bold" style={{ color: '#744D83' }}>🔥</p>
            <p className="text-xs" style={{ color: theme.textSecondary }}>Streak</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="btn-primary" onClick={() => navigate('/tasks')}
            style={{ backgroundColor: theme.ctaBg }}>
            Ready to focus?
          </button>
          <button onClick={() => navigate('/dashboard')}
            className="w-full py-4 rounded-full font-semibold border-2 transition-all"
            style={{ borderColor: theme.accent, color: theme.accent, backgroundColor: 'transparent', cursor: 'pointer' }}>
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function FocusPage() {
  const { theme } = useTheme()
  const [screen, setScreen]       = useState<FocusScreen>('setup')
  const [duration, setDuration]   = useState(25)
  const [taskTitle, setTaskTitle] = useState('')
  const startedAt = useRef<Date | null>(null)

  const handleStart = (d: number, title: string) => {
    setDuration(d); setTaskTitle(title)
    startedAt.current = new Date()
    setScreen('session')
  }

  const handleComplete = async () => {
    try {
      await sessionsApi.logFocus({
        durationMinutes: duration,
        completed:       true,
        startedAt:       startedAt.current?.toISOString() || new Date().toISOString(),
      })
    } catch {}
    setScreen('complete')
  }

  if (screen === 'session') {
    return (
      <FocusSession
        duration={duration}
        taskTitle={taskTitle}
        onComplete={handleComplete}
        onExit={() => setScreen('setup')}
      />
    )
  }

  if (screen === 'complete') {
    return (
      <FocusComplete
        duration={duration}
        taskTitle={taskTitle}
        onAgain={() => setScreen('setup')}
        theme={theme}
      />
    )
  }

  return <FocusSetup onStart={handleStart} theme={theme} />
}