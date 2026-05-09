import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { sessionsApi } from '../../lib/api'

type MeditationMode = 'Focus' | 'Calm' | 'Sleep' | 'Energy'
type Screen = 'setup' | 'session' | 'complete'

const MODES: { value: MeditationMode; emoji: string; desc: string; color: string }[] = [
  { value: 'Focus',  emoji: '🎯', desc: 'Deep concentration', color: '#744D83' },
  { value: 'Calm',   emoji: '🌊', desc: 'Stress relief',       color: '#23BBB7' },
  { value: 'Sleep',  emoji: '🌙', desc: 'Wind down',           color: '#1B4E63' },
  { value: 'Energy', emoji: '⚡', desc: 'Morning boost',       color: '#F59E0B' },
]

const DURATIONS = [5, 10, 20]

const BREATHING_PHASES = [
  { label: 'Breathe in...',  duration: 4000 },
  { label: 'Hold...',        duration: 2000 },
  { label: 'Breathe out...', duration: 6000 },
  { label: 'Hold...',        duration: 2000 },
]

// ─── Setup ────────────────────────────────────────────────────────────────────
function MeditationSetup({ onStart, theme }: {
  onStart: (mode: MeditationMode, duration: number) => void
  theme: any
}) {
  const navigate    = useNavigate()
  const [mode, setMode]         = useState<MeditationMode>('Focus')
  const [duration, setDuration] = useState(5)

  return (
    <AppShell>
      <div className="px-5 pt-6" style={{ backgroundColor: theme.bgPrimary }}>
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('/brain-beats')}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: theme.cardBg, border: 'none', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h1 className="text-xl font-bold" style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>Meditation</h1>
        </div>

        {/* Mode grid */}
        <p className="text-sm font-semibold mb-3" style={{ color: theme.textSecondary }}>Select Mode</p>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {MODES.map(m => (
            <button key={m.value}
              onClick={() => setMode(m.value)}
              className="py-4 px-3 rounded-xl flex flex-col items-center gap-1.5 transition-all active:scale-98"
              style={{
                backgroundColor: mode === m.value ? `${m.color}20` : theme.cardBg,
                border: `2px solid ${mode === m.value ? m.color : theme.navBorder}`,
                cursor: 'pointer',
              }}>
              <span className="text-2xl">{m.emoji}</span>
              <span className="text-sm font-bold" style={{ color: mode === m.value ? m.color : theme.textPrimary }}>
                {m.value}
              </span>
              <span className="text-xs" style={{ color: theme.textSecondary }}>{m.desc}</span>
            </button>
          ))}
        </div>

        {/* Duration */}
        <p className="text-sm font-semibold mb-3" style={{ color: theme.textSecondary }}>Duration</p>
        <div className="flex gap-3 mb-8">
          {DURATIONS.map(d => (
            <button key={d}
              onClick={() => setDuration(d)}
              className="flex-1 py-3 rounded-xl font-bold text-sm transition-all"
              style={{
                backgroundColor: duration === d ? theme.accent : theme.cardBg,
                color: duration === d ? '#FFFFFF' : theme.textPrimary,
                border: `2px solid ${duration === d ? theme.accent : theme.navBorder}`,
                cursor: 'pointer',
              }}>
              {d} min
            </button>
          ))}
        </div>

        <button className="btn-primary" onClick={() => onStart(mode, duration)}
          style={{ backgroundColor: theme.ctaBg }}>
          Start {mode} Session
        </button>
      </div>
    </AppShell>
  )
}

// ─── Active Session ───────────────────────────────────────────────────────────
function MeditationSession({ mode, duration, onComplete, theme, isBold }: {
  mode: MeditationMode; duration: number
  onComplete: () => void; theme: any; isBold: boolean
}) {
  const modeData      = MODES.find(m => m.value === mode)!
  const totalSeconds  = duration * 60
  const [remaining, setRemaining]     = useState(totalSeconds)
  const [phaseIdx, setPhaseIdx]       = useState(0)
  const [phaseProgress, setPhaseProgress] = useState(0)
  const [paused, setPaused]           = useState(false)
  const [circleScale, setCircleScale] = useState(1)
  const pausedRef = useRef(paused)
  pausedRef.current = paused

  // Countdown timer
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

  // Breathing animation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    function runPhase(idx: number) {
      const phase = BREATHING_PHASES[idx]
      setPhaseIdx(idx)
      setCircleScale(idx === 0 ? 1.2 : idx === 2 ? 0.85 : 1)
      timeout = setTimeout(() => runPhase((idx + 1) % BREATHING_PHASES.length), phase.duration)
    }
    runPhase(0)
    return () => clearTimeout(timeout)
  }, [])

  const progress = ((totalSeconds - remaining) / totalSeconds) * 100
  const phase = BREATHING_PHASES[phaseIdx]

  // Background color based on mode
  const bgColor = isBold ? theme.bgPrimary :
    mode === 'Focus' ? '#EDE8F5' :
    mode === 'Calm'  ? '#E8F7F6' :
    mode === 'Sleep' ? '#1B2A35' : '#FEF3C7'

  const textColor = mode === 'Sleep' ? '#FFFFFF' : theme.textPrimary

  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-6 py-12"
      style={{ backgroundColor: bgColor }}>

      {/* Top */}
      <div className="flex items-center justify-between w-full">
        <button onClick={() => setPaused(p => !p)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColor, fontSize: 24 }}>
          ✕
        </button>
        <span className="text-sm font-semibold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: `${modeData.color}30`, color: modeData.color }}>
          {mode}
        </span>
      </div>

      {/* Breathing circle */}
      <div className="flex flex-col items-center gap-8">
        <div className="relative flex items-center justify-center"
          style={{ width: 200, height: 200 }}>
          {/* Outer glow ring */}
          <div className="absolute rounded-full"
            style={{
              width: 200, height: 200,
              backgroundColor: `${modeData.color}15`,
              transform: `scale(${circleScale * 1.1})`,
              transition: `transform ${phase.duration}ms ease-in-out`,
            }} />
          {/* Main circle */}
          <div className="absolute rounded-full"
            style={{
              width: 160, height: 160,
              background: `radial-gradient(circle, ${modeData.color}60, ${modeData.color}30)`,
              transform: `scale(${circleScale})`,
              transition: `transform ${phase.duration}ms ease-in-out`,
              boxShadow: `0 0 40px ${modeData.color}40`,
            }} />
          {/* Timer */}
          <div className="relative text-center">
            <p className="text-4xl font-bold tabular-nums"
              style={{ color: textColor, fontFamily: '"DM Serif Display", serif' }}>
              {Math.floor(remaining / 60)}:{(remaining % 60).toString().padStart(2, '0')}
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-semibold mb-2" style={{ color: textColor }}>{phase.label}</p>
          <p className="text-sm" style={{ color: `${textColor}80` }}>Follow the circle</p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1.5 rounded-full" style={{ backgroundColor: `${modeData.color}30` }}>
          <div className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, backgroundColor: modeData.color }} />
        </div>
      </div>

      {/* Bottom */}
      <button
        onClick={() => setPaused(p => !p)}
        className="w-full py-4 rounded-full font-semibold text-base border-2 transition-all"
        style={{
          borderColor: mode === 'Sleep' ? 'rgba(255,255,255,0.3)' : modeData.color,
          color: textColor,
          backgroundColor: 'transparent',
          cursor: 'pointer',
        }}>
        {paused ? 'Resume' : 'Pause'}
      </button>
    </div>
  )
}

// ─── Complete ─────────────────────────────────────────────────────────────────
function MeditationComplete({ onRedo, theme }: { onRedo: () => void; theme: any }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: theme.bgPrimary }}>
      <div className="w-full max-w-sm text-center">
        <div className="text-6xl mb-6 animate-bounce-soft">✨</div>
        <h1 className="text-3xl font-bold mb-3" style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
          Session Complete
        </h1>
        <p className="text-base mb-10" style={{ color: theme.textSecondary }}>
          Nice work — that focus was powerful.
        </p>
        <div className="flex flex-col gap-3">
          <button className="btn-primary" onClick={() => navigate('/dashboard')}
            style={{ backgroundColor: theme.ctaBg }}>
            Ready to focus?
          </button>
          <button onClick={onRedo}
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
export default function MeditationPage() {
  const { theme, isBold } = useTheme()
  const [screen, setScreen]   = useState<Screen>('setup')
  const [mode, setMode]       = useState<MeditationMode>('Focus')
  const [duration, setDuration] = useState(5)
  const startedAt = useRef<Date | null>(null)

  const handleStart = (m: MeditationMode, d: number) => {
    setMode(m); setDuration(d)
    startedAt.current = new Date()
    setScreen('session')
  }

  const handleComplete = async () => {
    try {
      await sessionsApi.logMeditation({
        mode,
        durationMinutes: duration,
        completed:       true,
        startedAt:       startedAt.current?.toISOString() || new Date().toISOString(),
      })
    } catch {}
    setScreen('complete')
  }

  if (screen === 'session') {
    return <MeditationSession mode={mode} duration={duration}
      onComplete={handleComplete} theme={theme} isBold={isBold} />
  }

  if (screen === 'complete') {
    return <MeditationComplete onRedo={() => setScreen('setup')} theme={theme} />
  }

  return <MeditationSetup onStart={handleStart} theme={theme} />
}