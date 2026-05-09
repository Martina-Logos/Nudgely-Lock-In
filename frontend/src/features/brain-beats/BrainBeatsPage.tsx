import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

interface Track {
  id:       string
  title:    string
  subtitle: string
  duration: number // seconds
  color:    string
}

const TRACKS: Track[] = [
  { id: '1', title: 'Focus Flow',   subtitle: 'Theta waves',  duration: 1800, color: '#23BBB7' },
  { id: '2', title: 'Deep Work',    subtitle: 'Lo-fi beats',  duration: 2700, color: '#744D83' },
  { id: '3', title: 'Quick Boost',  subtitle: 'Binaural',     duration: 900,  color: '#23627C' },
  { id: '4', title: 'Night Focus',  subtitle: 'Delta waves',  duration: 3600, color: '#1B4E63' },
]

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

// ─── Waveform visual ──────────────────────────────────────────────────────────
function Waveform({ playing, color }: { playing: boolean; color: string }) {
  const bars = Array.from({ length: 32 }, (_, i) => ({
    height: Math.sin(i * 0.4) * 12 + Math.random() * 8 + 8,
  }))

  return (
    <div className="flex items-center gap-0.5 h-10">
      {bars.map((bar, i) => (
        <div key={i}
          className="rounded-full transition-all"
          style={{
            width: 3,
            height: playing ? bar.height : 4,
            backgroundColor: color,
            opacity: 0.7,
            transition: playing ? `height ${0.3 + i * 0.02}s ease-in-out` : 'height 0.3s ease',
            animation: playing ? `wave ${0.8 + (i % 5) * 0.15}s ease-in-out infinite alternate` : 'none',
          }}
        />
      ))}
      <style>{`
        @keyframes wave {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  )
}

export default function BrainBeatsPage() {
  const navigate      = useNavigate()
  const { theme, isBold } = useTheme()

  const [currentTrack, setCurrentTrack] = useState(TRACKS[0])
  const [playing, setPlaying]           = useState(false)
  const [elapsed, setElapsed]           = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const progress = Math.round((elapsed / currentTrack.duration) * 100)

  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setElapsed(e => {
          if (e >= currentTrack.duration) { setPlaying(false); return 0 }
          return e + 1
        })
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [playing, currentTrack])

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track); setPlaying(false); setElapsed(0)
  }

  const handlePrev = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id)
    handleTrackSelect(TRACKS[(idx - 1 + TRACKS.length) % TRACKS.length])
  }

  const handleNext = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id)
    handleTrackSelect(TRACKS[(idx + 1) % TRACKS.length])
  }

  const r = 60
  const circ = 2 * Math.PI * r
  const offset = circ - (progress / 100) * circ

  return (
    <AppShell>
      <div className="px-5 pt-6" style={{ backgroundColor: theme.bgPrimary }}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('/dashboard')}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: theme.cardBg, border: 'none', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h1 className="text-xl font-bold" style={{ color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
            Brain Beats
          </h1>
        </div>

        {/* Player card */}
        <div className="rounded-2xl p-6 mb-5"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 4px 20px rgba(116,77,131,0.12)' }}>

          {/* Progress ring + track info */}
          <div className="flex items-center gap-5 mb-5">
            <div className="relative flex-shrink-0" style={{ width: 80, height: 80 }}>
              <svg width="80" height="80" viewBox="0 0 140 140">
                <circle cx="70" cy="70" r={r} fill="none" stroke="#E3DBE6" strokeWidth="8" />
                <circle cx="70" cy="70" r={r} fill="none" stroke={currentTrack.color}
                  strokeWidth="8" strokeLinecap="round"
                  strokeDasharray={circ} strokeDashoffset={offset}
                  transform="rotate(-90 70 70)"
                  style={{ transition: 'stroke-dashoffset 1s linear' }} />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-sm font-bold" style={{ color: currentTrack.color }}>{progress}%</span>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-lg font-bold mb-0.5" style={{ color: theme.textPrimary }}>{currentTrack.title}</h2>
              <p className="text-sm mb-1" style={{ color: theme.textSecondary }}>{currentTrack.subtitle}</p>
              <p className="text-xs" style={{ color: theme.textSecondary }}>
                {formatTime(elapsed)} / {formatTime(currentTrack.duration)}
              </p>
            </div>
          </div>

          {/* Waveform */}
          <div className="mb-5">
            <Waveform playing={playing} color={currentTrack.color} />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-8">
            <button onClick={handlePrev} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 20L9 12L19 4V20ZM5 4H7V20H5V4Z" fill={theme.textSecondary} />
              </svg>
            </button>

            <button
              onClick={() => setPlaying(p => !p)}
              className="w-16 h-16 rounded-full flex items-center justify-center transition-transform active:scale-95"
              style={{ backgroundColor: theme.accent, border: 'none', cursor: 'pointer', boxShadow: `0 4px 16px ${theme.accent}60` }}>
              {playing ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5V19L19 12L8 5Z" fill="white" />
                </svg>
              )}
            </button>

            <button onClick={handleNext} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 4L15 12L5 20V4ZM17 4H19V20H17V4Z" fill={theme.textSecondary} />
              </svg>
            </button>
          </div>
        </div>

        {/* Track list */}
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: theme.textSecondary }}>Select Track</p>
        <div className="flex flex-col gap-2 mb-5">
          {TRACKS.map(track => (
            <button key={track.id}
              onClick={() => handleTrackSelect(track)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all"
              style={{
                backgroundColor: currentTrack.id === track.id ? `${track.color}20` : theme.cardBg,
                border: `1.5px solid ${currentTrack.id === track.id ? track.color : theme.navBorder}`,
                cursor: 'pointer',
              }}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: track.color }} />
                <div className="text-left">
                  <p className="text-sm font-semibold" style={{ color: theme.textPrimary }}>{track.title}</p>
                  <p className="text-xs" style={{ color: theme.textSecondary }}>{track.subtitle}</p>
                </div>
              </div>
              <span className="text-xs font-medium" style={{ color: theme.textSecondary }}>
                {Math.floor(track.duration / 60)} min
              </span>
            </button>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="flex flex-col gap-3 pb-6">
          <button className="btn-primary" onClick={() => navigate('/meditation')}
            style={{ backgroundColor: theme.ctaBg }}>
            Try Meditation
          </button>
          <button onClick={() => navigate('/crossword')}
            className="w-full py-4 rounded-full font-semibold text-base border-2 transition-all"
            style={{ borderColor: theme.accent, color: theme.accent, backgroundColor: 'transparent', cursor: 'pointer' }}>
            Play Crossword
          </button>
        </div>
      </div>
    </AppShell>
  )
}