import { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { sessionsApi } from '../../lib/api'

type FocusScreen = 'setup' | 'session' | 'complete'

const DURATIONS = [
  { label: '25 min', value: 25, desc: 'Classic Pomodoro' },
  { label: '45 min', value: 45, desc: 'Deep work'        },
  { label: '60 min', value: 60, desc: 'Flow state'       },
  { label: '90 min', value: 90, desc: 'Ultra focus'      },
]

const MOTIVATIONS = [
  'Stay here. One task at a time.',
  'Deep focus unlocked.',
  "You're making real progress.",
  'This is your moment.',
  'Stay with it.',
  'Momentum is building.',
]

// ── Setup ──────────────────────────────────────────────────────────────────────
function FocusSetup({ onStart, theme, isBold }: {
  onStart: (duration: number, taskTitle: string) => void
  theme: any
  isBold: boolean
}) {
  const navigate   = useNavigate()
  const location   = useLocation()
  const [duration, setDuration]   = useState(25)
  const [taskTitle, setTaskTitle] = useState((location.state as any)?.taskTitle || '')

  const textPrimary = isBold ? '#FFFFFF' : theme.textPrimary
  const textSub     = isBold ? 'rgba(255,255,255,0.55)' : theme.textSecondary
  const cardBg      = isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF'
  const cardBorder  = isBold ? 'rgba(255,255,255,0.10)' : 'rgba(107,57,145,0.10)'

  return (
    <div style={{ backgroundColor: theme.bgPrimary, minHeight: '100%', padding: '28px 24px 48px' }}>
      <div style={{ maxWidth: 560, margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
          <button
            onClick={() => navigate('/dashboard')}
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: cardBg, border: `1px solid ${cardBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0, color: textPrimary, fontFamily: '"DM Serif Display", serif' }}>
            Focus Mode
          </h1>
        </div>

        <div style={{ marginBottom: 24 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: textSub, marginBottom: 10 }}>
            What are you working on?
          </p>
          <input
            className="input"
            placeholder="e.g. Design mockups, Write report..."
            value={taskTitle}
            onChange={e => setTaskTitle(e.target.value)}
          />
        </div>

        <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: textSub, marginBottom: 10 }}>
          Session duration
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24 }}>
          {DURATIONS.map(d => {
            const active = duration === d.value
            return (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                style={{
                  padding: '16px', borderRadius: 14,
                  border: `1.5px solid ${active ? theme.accent : cardBorder}`,
                  background: active ? `${theme.accent}14` : cardBg,
                  cursor: 'pointer', textAlign: 'left',
                  transition: 'all 0.18s ease',
                  display: 'flex', flexDirection: 'column', gap: 4,
                  fontFamily: 'inherit',
                  boxShadow: active ? `0 4px 16px ${theme.accent}22` : 'none',
                }}
              >
                <span style={{ fontSize: 16, fontWeight: 700, color: active ? theme.accent : textPrimary }}>
                  {d.label}
                </span>
                <span style={{ fontSize: 12, color: textSub }}>{d.desc}</span>
              </button>
            )
          })}
        </div>

        <div style={{
          borderRadius: 14, padding: '14px 16px', marginBottom: 28,
          background: cardBg, border: `1px solid ${cardBorder}`,
          display: 'flex', alignItems: 'center', gap: 12,
        }}>
          <span style={{ fontSize: 22, flexShrink: 0 }}>🎵</span>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: textPrimary, margin: 0 }}>Brain Beats</p>
            <p style={{ fontSize: 12, color: textSub, margin: '2px 0 0' }}>
              Start Brain Beats before entering focus for ambient audio
            </p>
          </div>
        </div>

        <button
          onClick={() => onStart(duration, taskTitle)}
          style={{
            width: '100%', padding: '15px 24px', borderRadius: 14, border: 'none',
            background: `linear-gradient(135deg, ${theme.accent}, ${theme.accent}cc)`,
            color: '#0d3d38', fontSize: 15, fontWeight: 700,
            cursor: 'pointer', fontFamily: 'inherit',
            boxShadow: `0 4px 20px ${theme.accent}35`,
            transition: 'all 0.2s ease',
          }}
        >
          Start Focus Session
        </button>
      </div>
    </div>
  )
}

// ── Active session ─────────────────────────────────────────────────────────────
function FocusSession({ duration, taskTitle, onComplete, onExit }: {
  duration: number; taskTitle: string
  onComplete: () => void; onExit: () => void
}) {
  const totalSeconds = duration * 60
  const [remaining, setRemaining]   = useState(totalSeconds)
  const [paused, setPaused]         = useState(false)
  const [motivation, setMotivation] = useState(MOTIVATIONS[0])
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  const percent = Math.round(((totalSeconds - remaining) / totalSeconds) * 100)

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

  useEffect(() => {
    const t = setInterval(() => {
      setMotivation(MOTIVATIONS[Math.floor(Math.random() * MOTIVATIONS.length)])
    }, 120000)
    return () => clearInterval(t)
  }, [])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const size    = 220
  const r       = 95
  const circ    = 2 * Math.PI * r
  const offset  = circ - (percent / 100) * circ

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 999,
      background: 'linear-gradient(160deg, #4a2568 0%, #744D83 50%, #23627C 100%)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '28px 24px 40px', fontFamily: 'inherit',
    }}>
      <div style={{ width: '100%', maxWidth: 480, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={onExit}
          style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'rgba(255,255,255,0.15)', border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 600, maxWidth: 200, textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {taskTitle || 'Focus Session'}
        </span>

        <button
          onClick={() => window.history.pushState({}, '', '/brain-beats')}
          style={{
            display: 'flex', alignItems: 'center', gap: 5,
            padding: '6px 12px', borderRadius: 9999,
            background: 'rgba(255,255,255,0.15)', border: 'none',
            color: 'white', fontSize: 12, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          🎵 Beats
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative', width: size, height: size }}>
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8"/>
            <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#43e8d8" strokeWidth="8"
              strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
              transform={`rotate(-90 ${size/2} ${size/2})`}
              style={{ transition: 'stroke-dashoffset 1s linear', filter: 'drop-shadow(0 0 6px rgba(67,232,216,0.5))' }}
            />
          </svg>
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 4,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, fontWeight: 600 }}>{percent}%</span>
            <span style={{
              color: 'white', fontWeight: 700, fontSize: 50,
              fontFamily: '"DM Serif Display", serif', lineHeight: 1,
              letterSpacing: '-1px',
            }}>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div style={{ padding: '5px 14px', borderRadius: 9999, background: 'rgba(255,255,255,0.12)' }}>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 600 }}>🔥 On Fire</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, margin: 0 }}>{motivation}</p>
        <button
          onClick={() => setPaused(p => !p)}
          style={{
            width: 60, height: 60, borderRadius: '50%',
            background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.2s ease',
          }}
        >
          {paused
            ? <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5V19L19 12L8 5Z"/></svg>
            : <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z"/></svg>
          }
        </button>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em' }}>
          NUDGELY
        </span>
      </div>
    </div>
  )
}

// ── Complete ───────────────────────────────────────────────────────────────────
function FocusComplete({ duration, taskTitle, todayTotal, theme, isBold }: {
  duration: number; taskTitle: string; todayTotal: number; theme: any; isBold: boolean
}) {
  const navigate    = useNavigate()
  const textPrimary = isBold ? '#FFFFFF' : theme.textPrimary
  const textSub     = isBold ? 'rgba(255,255,255,0.55)' : theme.textSecondary
  const cardBg      = isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF'
  const cardBorder  = isBold ? 'rgba(255,255,255,0.10)' : 'rgba(107,57,145,0.10)'

  return (
    <div style={{
      backgroundColor: theme.bgPrimary, minHeight: '100%',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px',
    }}>
      <div style={{ width: '100%', maxWidth: 400, textAlign: 'center' }}>
        <div style={{ fontSize: 44, marginBottom: 16 }}>✨</div>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: textPrimary, fontFamily: '"DM Serif Display", serif', marginBottom: 6 }}>
          Session Complete
        </h1>
        <p style={{ fontSize: 14, color: textSub, marginBottom: taskTitle ? 8 : 28 }}>
          {duration} minutes of deep focus
        </p>
        {taskTitle && (
          <span style={{
            display: 'inline-block', fontSize: 13, fontWeight: 600,
            color: theme.accent, background: `${theme.accent}14`,
            padding: '5px 16px', borderRadius: 9999, marginBottom: 28,
          }}>
            {taskTitle}
          </span>
        )}

        <div style={{
          borderRadius: 16, padding: '20px', marginBottom: 28,
          background: cardBg, border: `1px solid ${cardBorder}`,
          display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        }}>
          {[
            { value: duration,                  label: 'Minutes',       color: textPrimary },
            { value: todayTotal || duration,     label: "Today's total", color: theme.accent },
            { value: '🔥',                       label: 'Streak',        color: '#F59E0B' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', flex: 1 }}>
              <p style={{ fontSize: 24, fontWeight: 800, color: s.color, margin: 0, fontFamily: '"DM Serif Display", serif' }}>
                {s.value}
              </p>
              <p style={{ fontSize: 11, color: textSub, margin: '4px 0 0' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button onClick={() => navigate('/tasks')} className="btn-primary">
            Go to tasks
          </button>
          <button onClick={() => navigate('/dashboard')} className="btn-secondary">
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main export ────────────────────────────────────────────────────────────────
export default function FocusPage() {
  const { theme, isBold } = useTheme()
  const [screen, setScreen]       = useState<FocusScreen>('setup')
  const [duration, setDuration]   = useState(25)
  const [taskTitle, setTaskTitle] = useState('')
  const [todayTotal, setTodayTotal] = useState(0)
  const startedAt   = useRef<Date | null>(null)
  const hasSavedRef = useRef(false) // guards against double-fire (React StrictMode / double effect invocation)

  const handleStart = (d: number, title: string) => {
    setDuration(d); setTaskTitle(title)
    startedAt.current = new Date()
    hasSavedRef.current = false
    setScreen('session')
  }

  const handleComplete = async () => {
    // Prevent the session from being logged twice if onComplete fires more than once
    // (e.g. the timer hitting 0 and a near-simultaneous unmount/effect re-run)
    if (hasSavedRef.current) {
      setScreen('complete')
      return
    }
    hasSavedRef.current = true

    const payload = {
      durationMinutes: duration,
      completed:       true,
      startedAt:       (startedAt.current || new Date()).toISOString(),
    }

    try {
      await sessionsApi.logFocus(payload)

      // Pull the real cumulative total for today so "Today's total" on the
      // complete screen reflects the backend, not just this session's duration
      const { data } = await sessionsApi.getTodayFocus()
      const total = typeof data === 'number'
        ? data
        : data?.minutes ?? data?.totalMinutes ?? data?.total ?? duration
      setTodayTotal(total)
    } catch (err: any) {
      console.error('[Focus] Failed to save session:', err.response?.data || err.message)
      // Fall back to just showing this session's duration if the total fetch fails
      setTodayTotal(duration)
    }

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

  return (
    <AppShell>
      {screen === 'complete'
        ? <FocusComplete duration={duration} taskTitle={taskTitle} todayTotal={todayTotal} theme={theme} isBold={isBold} />
        : <FocusSetup onStart={handleStart} theme={theme} isBold={isBold} />
      }
    </AppShell>
  )
}