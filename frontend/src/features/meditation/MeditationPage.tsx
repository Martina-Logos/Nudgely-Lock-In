import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { sessionsApi } from '../../lib/api'

type MeditationMode = 'Focus' | 'Calm' | 'Sleep' | 'Energy'
type Screen = 'setup' | 'session' | 'complete'

const MODES: {
  value: MeditationMode
  emoji: string
  desc: string
  accent: string
  iconBg: string
  glow: string
}[] = [
  { value: 'Focus',  emoji: '🎯', desc: 'Deep concentration', accent: '#6b3991', iconBg: 'rgba(107,57,145,0.10)', glow: 'rgba(107,57,145,0.07)' },
  { value: 'Calm',   emoji: '🌊', desc: 'Stress relief',       accent: '#43e8d8', iconBg: 'rgba(67,232,216,0.10)',  glow: 'rgba(67,232,216,0.05)'  },
  { value: 'Sleep',  emoji: '🌙', desc: 'Wind down',           accent: '#1d6a82', iconBg: 'rgba(29,106,130,0.10)', glow: 'rgba(29,106,130,0.05)'  },
  { value: 'Energy', emoji: '⚡', desc: 'Morning boost',       accent: '#d97706', iconBg: 'rgba(217,119,6,0.10)',  glow: 'rgba(217,119,6,0.05)'   },
]

const DURATIONS = [5, 10, 20]

const BREATHING_CONFIGS: Record<MeditationMode, { phases: { label: string; duration: number }[] }> = {
  Focus: {
    phases: [
      { label: 'Breathe in...',  duration: 4000 },
      { label: 'Hold...',        duration: 4000 },
      { label: 'Breathe out...', duration: 4000 },
      { label: 'Hold...',        duration: 4000 },
    ],
  },
  Calm: {
    phases: [
      { label: 'Breathe in...',  duration: 4000 },
      { label: 'Hold...',        duration: 7000 },
      { label: 'Breathe out...', duration: 8000 },
    ],
  },
  Sleep: {
    phases: [
      { label: 'Breathe in...',  duration: 4000 },
      { label: 'Breathe out...', duration: 8000 },
    ],
  },
  Energy: {
    phases: [
      { label: 'Breathe in...',  duration: 1500 },
      { label: 'Breathe out...', duration: 1500 },
    ],
  },
}

const AFFIRMATIONS = [
  'You are exactly where you need to be.',
  'Each breath brings clarity.',
  'Your mind is settling beautifully.',
  'Peace is already within you.',
  'You are doing wonderfully.',
]

// ─── Setup ─────────────────────────────────────────────────────────────────────
function MeditationSetup({
  onStart,
  theme,
}: {
  onStart: (mode: MeditationMode, duration: number) => void
  theme: any
}) {
  const navigate                = useNavigate()
  const [mode, setMode]         = useState<MeditationMode>('Focus')
  const [duration, setDuration] = useState(5)
  const selected                = MODES.find(m => m.value === mode)!

  return (
    <AppShell>
      <div style={{ backgroundColor: theme.bgPrimary, minHeight: '100%', paddingBottom: 32 }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '24px 20px 22px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              width: 36, height: 36, borderRadius: 10, flexShrink: 0,
              background: 'rgba(107,57,145,0.06)',
              border: '1px solid rgba(107,57,145,0.10)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'all 0.18s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <h1 style={{
            fontSize: 20, fontWeight: 700, letterSpacing: '-0.2px',
            color: theme.textPrimary, fontFamily: '"DM Serif Display", serif',
          }}>
            Meditation
          </h1>
        </div>

        <div style={{ padding: '0 20px' }}>

          {/* Section label */}
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.09em',
            textTransform: 'uppercase', color: '#9b8ea5', marginBottom: 10,
          }}>
            Select mode
          </p>

          {/* Mode grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
            {MODES.map(m => {
              const isSelected = mode === m.value
              return (
                <button
                  key={m.value}
                  onClick={() => setMode(m.value)}
                  style={{
                    background: isSelected ? `${m.accent}10` : (theme.cardBg || '#ffffff'),
                    border: `1.5px solid ${isSelected ? m.accent : 'rgba(107,57,145,0.09)'}`,
                    borderRadius: 18,
                    padding: '18px 14px 16px',
                    cursor: 'pointer',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 8,
                    textAlign: 'center',
                    position: 'relative', overflow: 'hidden',
                    fontFamily: 'inherit',
                    transition: 'all 0.22s cubic-bezier(0.4,0,0.2,1)',
                    boxShadow: isSelected
                      ? `0 4px 18px ${m.accent}1a`
                      : '0 1px 3px rgba(107,57,145,0.05)',
                  }}
                >
                  {/* Selected dot */}
                  {isSelected && (
                    <span style={{
                      position: 'absolute', top: 9, right: 9,
                      width: 6, height: 6, borderRadius: '50%',
                      background: m.accent,
                    }} />
                  )}

                  {/* Top glow */}
                  <span style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: 56,
                    background: `radial-gradient(ellipse at 50% 0%, ${m.glow} 0%, transparent 70%)`,
                    opacity: isSelected ? 1 : 0,
                    transition: 'opacity 0.22s ease',
                    pointerEvents: 'none',
                    borderRadius: 'inherit',
                  }} />

                  {/* Icon */}
                  <span style={{
                    width: 44, height: 44, borderRadius: 13,
                    background: m.iconBg,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, position: 'relative', zIndex: 1,
                    transform: isSelected ? 'scale(1.06)' : 'scale(1)',
                    transition: 'transform 0.22s ease',
                  }}>
                    {m.emoji}
                  </span>

                  <span style={{
                    fontSize: 13.5, fontWeight: 700,
                    color: isSelected ? m.accent : theme.textPrimary,
                    position: 'relative', zIndex: 1,
                    transition: 'color 0.18s ease',
                  }}>
                    {m.value}
                  </span>

                  <span style={{
                    fontSize: 11.5, color: '#867391',
                    position: 'relative', zIndex: 1, lineHeight: 1.35,
                  }}>
                    {m.desc}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Duration label */}
          <p style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.09em',
            textTransform: 'uppercase', color: '#9b8ea5', marginBottom: 10,
          }}>
            Duration
          </p>

          {/* Segmented control */}
          <div style={{
            display: 'flex',
            background: 'rgba(107,57,145,0.045)',
            border: '1px solid rgba(107,57,145,0.09)',
            borderRadius: 14, padding: 4, gap: 3,
            marginBottom: 28,
          }}>
            {DURATIONS.map(d => {
              const isActive = duration === d
              return (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  style={{
                    flex: 1, padding: '10px 8px',
                    borderRadius: 11, border: 'none',
                    fontFamily: 'inherit', fontSize: 13.5,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? selected.accent : '#867391',
                    background: isActive ? (theme.cardBg || '#ffffff') : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s cubic-bezier(0.4,0,0.2,1)',
                    boxShadow: isActive ? '0 1px 5px rgba(107,57,145,0.09)' : 'none',
                  }}
                >
                  {d} min
                </button>
              )
            })}
          </div>

          {/* CTA */}
          <button
            onClick={() => onStart(mode, duration)}
            style={{
              width: '100%', padding: '15px 24px',
              borderRadius: 14, border: 'none',
              fontFamily: 'inherit', fontSize: 15, fontWeight: 700,
              cursor: 'pointer',
              background: selected.accent,
              color: mode === 'Energy' ? '#1a0f00' : '#ffffff',
              letterSpacing: '0.01em',
              transition: 'all 0.22s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow: `0 4px 18px ${selected.accent}38`,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}
          >
            <span style={{ fontSize: 14 }}>▶</span>
            Start {mode.toLowerCase()} session
          </button>
        </div>
      </div>
    </AppShell>
  )
}

// ─── Session ───────────────────────────────────────────────────────────────────
function MeditationSession({
  mode,
  duration,
  onComplete,
  onEnd,
  theme,
  isBold,
}: {
  mode: MeditationMode
  duration: number
  onComplete: () => void
  onEnd: () => void        // user manually ends — goes back to setup, no logging
  theme: any
  isBold: boolean
}) {
  const modeData     = MODES.find(m => m.value === mode)!
  const config       = BREATHING_CONFIGS[mode]
  const totalSeconds = duration * 60

  const [remaining, setRemaining]     = useState(totalSeconds)
  const [phaseIdx, setPhaseIdx]       = useState(0)
  const [paused, setPaused]           = useState(false)
  const [orbScale, setOrbScale]       = useState(1)
  const [affirmation, setAffirmation] = useState(AFFIRMATIONS[0])

  const pausedRef = useRef(paused)
  pausedRef.current = paused

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

  // Breathing cycle
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let current = 0

    function runPhase(idx: number) {
      const phase = config.phases[idx]
      setPhaseIdx(idx)
      const isInhale = phase.label.includes('in')
      const isHold   = phase.label.includes('Hold')
      setOrbScale(isInhale ? 1.18 : isHold ? 1.18 : 0.86)
      if (!isInhale && !isHold) {
        setAffirmation(AFFIRMATIONS[Math.floor(Math.random() * AFFIRMATIONS.length)])
      }
      timeout = setTimeout(() => {
        current = (current + 1) % config.phases.length
        runPhase(current)
      }, phase.duration)
    }

    runPhase(0)
    return () => clearTimeout(timeout)
  }, [mode])

  const progress     = ((totalSeconds - remaining) / totalSeconds) * 100
  const phase        = config.phases[phaseIdx]
  const mins         = String(Math.floor(remaining / 60)).padStart(2, '0')
  const secs         = String(remaining % 60).padStart(2, '0')
  const circumference = 2 * Math.PI * 80

  const sessionBg =
    mode === 'Sleep'  ? '#091622' :
    mode === 'Focus'  ? '#130923' :
    mode === 'Calm'   ? '#07202c' :
                        '#1a0e00'

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: sessionBg,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'space-between',
      padding: '28px 24px 40px',
      fontFamily: 'inherit', zIndex: 999,
      color: '#f9f9f7',
    }}>

      {/* Top bar */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontSize: 11.5, fontWeight: 700, letterSpacing: '0.09em',
          textTransform: 'uppercase',
          color: modeData.accent,
          background: `${modeData.accent}18`,
          padding: '5px 12px', borderRadius: 9999,
          border: `1px solid ${modeData.accent}30`,
        }}>
          {modeData.emoji} {mode}
        </span>
        <button
          onClick={onEnd}
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: 8, color: 'rgba(255,255,255,0.55)',
            padding: '6px 14px', fontSize: 12, fontWeight: 600,
            cursor: 'pointer', fontFamily: 'inherit',
          }}
        >
          End
        </button>
      </div>

      {/* Orb */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 28 }}>
        <div style={{ position: 'relative', width: 200, height: 200 }}>
          <svg width="200" height="200" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
            <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2" />
            <circle
              cx="100" cy="100" r="80" fill="none"
              stroke={modeData.accent} strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference * (1 - progress / 100)}
              style={{ transition: 'stroke-dashoffset 1s linear', opacity: 0.65 }}
            />
          </svg>

          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: `translate(-50%, -50%) scale(${orbScale})`,
            width: 120, height: 120, borderRadius: '50%',
            background: `radial-gradient(circle at 38% 38%, ${modeData.accent}65 0%, ${modeData.accent}25 55%, transparent 80%)`,
            border: `1.5px solid ${modeData.accent}35`,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            transition: `transform ${phase.duration * 0.9}ms ease-in-out`,
          }}>
            <span style={{
              fontSize: 26, fontWeight: 300, letterSpacing: '-1px',
              color: '#f9f9f7', fontFamily: '"DM Serif Display", serif',
            }}>
              {mins}:{secs}
            </span>
          </div>
        </div>

        {/* Phase label */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 18, fontWeight: 600, color: '#f9f9f7', marginBottom: 6, letterSpacing: '-0.2px' }}>
            {phase.label}
          </p>
          <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)', lineHeight: 1.5, maxWidth: 220 }}>
            {affirmation}
          </p>
        </div>
      </div>

      {/* Pause */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <button
          onClick={() => setPaused(p => !p)}
          style={{
            width: 56, height: 56, borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
            border: `1.5px solid ${modeData.accent}45`,
            fontSize: 18, color: '#f9f9f7',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease', fontFamily: 'inherit',
          }}
        >
          {paused ? '▶' : '⏸'}
        </button>
        <span style={{ fontSize: 11.5, color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>
          {paused ? 'Tap to resume' : 'Tap to pause'}
        </span>
      </div>
    </div>
  )
}

// ─── Complete ──────────────────────────────────────────────────────────────────
function MeditationComplete({ onRedo, theme }: { onRedo: () => void; theme: any }) {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh', background: theme.bgPrimary,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '40px 24px', fontFamily: 'inherit',
    }}>
      <div style={{ width: '100%', maxWidth: 360, textAlign: 'center' }}>
        <div style={{
          width: 84, height: 84, borderRadius: '50%',
          background: 'rgba(107,57,145,0.07)',
          border: '1px solid rgba(107,57,145,0.10)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 38, margin: '0 auto 22px',
        }}>
          ✨
        </div>
        <h2 style={{
          fontSize: 26, fontWeight: 700, color: theme.textPrimary,
          fontFamily: '"DM Serif Display", serif',
          letterSpacing: '-0.3px', marginBottom: 8,
        }}>
          Session complete
        </h2>
        <p style={{
          fontSize: 14.5, color: '#867391',
          marginBottom: 36, lineHeight: 1.6,
        }}>
          You just gave your mind some real space to breathe.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="btn-primary" onClick={() => navigate('/dashboard')}>
            Ready to focus
          </button>
          <button className="btn-secondary" onClick={onRedo}>
            Meditate again
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────
export default function MeditationPage() {
  const { theme, isBold } = useTheme()
  const [screen, setScreen]       = useState<Screen>('setup')
  const [mode, setMode]           = useState<MeditationMode>('Focus')
  const [duration, setDuration]   = useState(5)
  const startedAt = useRef<Date | null>(null)

  const handleStart = (m: MeditationMode, d: number) => {
    setMode(m); setDuration(d)
    startedAt.current = new Date()
    setScreen('session')
  }

  const handleComplete = async () => {
    try {
      await sessionsApi.logMeditation({
        mode, durationMinutes: duration, completed: true,
        startedAt: startedAt.current?.toISOString() || new Date().toISOString(),
      })
    } catch { /* silent */ }
    setScreen('complete')
  }

  if (screen === 'session') {
    return <MeditationSession mode={mode} duration={duration} onComplete={handleComplete} onEnd={() => setScreen('setup')} theme={theme} isBold={isBold} />
  }
  if (screen === 'complete') {
    return <MeditationComplete onRedo={() => setScreen('setup')} theme={theme} />
  }
  return <MeditationSetup onStart={handleStart} theme={theme} />
}