import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

// Using YouTube videos that allow embedding + are long ambient tracks
const TRACKS = [
  { id: '1', title: 'Deep Focus Flow',    subtitle: 'Theta waves · 3hr',     videoId: 'WPni755-Krg',  color: '#6b3991', duration: '3:00:00' },
  { id: '2', title: 'Pure Focus',         subtitle: 'Lo-fi beats · 2hr',     videoId: '5qap5aO4i9A',  color: '#43e8d8', duration: '2:00:00' },
  { id: '3', title: 'Study Beats',        subtitle: 'Ambient focus · 1hr',   videoId: 'jfKfPfyJRdk',  color: '#1d6a82', duration: '1:00:00' },
  { id: '4', title: 'Calm Work Session',  subtitle: 'Binaural alpha · 2hr',  videoId: 'lTRiuFIWV54',  color: '#f59e0b', duration: '2:00:00' },
  { id: '5', title: 'Deep Work',          subtitle: 'Concentration · 3hr',   videoId: 'DWcJFNfaw9c',  color: '#6b3991', duration: '3:00:00' },
  { id: '6', title: 'Brain Activation',   subtitle: 'Neural boost · 1hr',    videoId: 'ZToicYcHIOU',  color: '#43e8d8', duration: '1:00:00' },
  { id: '7', title: 'Flow State',         subtitle: 'Productivity mix · 2hr', videoId: 'n61ULEU7CO0', color: '#1d6a82', duration: '2:00:00' },
  { id: '8', title: 'Night Focus',        subtitle: 'Evening session · 1hr', videoId: 'sSgR0IXFZ_8',  color: '#1a1a2e', duration: '1:00:00' },
]

// Animated waveform bars
function Waveform({ playing, color }: { playing: boolean; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 40 }}>
      {Array.from({ length: 28 }, (_, i) => (
        <div key={i} style={{
          width: 3, borderRadius: 3,
          backgroundColor: color,
          opacity: 0.7,
          height: playing ? undefined : 4,
          animation: playing
            ? `wave ${0.6 + (i % 5) * 0.15}s ease-in-out infinite alternate`
            : 'none',
          animationDelay: `${(i % 7) * 0.08}s`,
        }} />
      ))}
      <style>{`
        @keyframes wave {
          from { height: 4px; }
          to   { height: ${8 + Math.random() * 24}px; }
        }
      `}</style>
    </div>
  )
}

// Static waveform with fixed heights for consistent render
function StaticWaveform({ playing, color }: { playing: boolean; color: string }) {
  const heights = [8,14,20,12,28,16,10,24,18,8,22,14,30,10,18,26,12,20,8,16,24,10,28,14,20,8,18,12]
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, height: 40, justifyContent: 'center' }}>
      {heights.map((h, i) => (
        <div key={i} style={{
          width: 3,
          borderRadius: 3,
          backgroundColor: color,
          opacity: playing ? 0.8 : 0.3,
          height: playing ? h : 4,
          transition: `height ${0.3 + (i % 5) * 0.05}s ease`,
          animation: playing ? `waveBar ${0.5 + (i % 4) * 0.2}s ease-in-out infinite alternate` : 'none',
          animationDelay: `${(i % 6) * 0.1}s`,
        }} />
      ))}
      <style>{`
        @keyframes waveBar {
          from { transform: scaleY(0.4); }
          to   { transform: scaleY(1.0); }
        }
      `}</style>
    </div>
  )
}

export default function BrainBeatsPage() {
  const navigate           = useNavigate()
  const { theme, isBold }  = useTheme()

  const [currentTrack, setCurrentTrack] = useState(TRACKS[0])
  const [playing, setPlaying]           = useState(false)
  const [iframeKey, setIframeKey]       = useState(0)

  const embedSrc = `https://www.youtube.com/embed/${currentTrack.videoId}?autoplay=${playing ? 1 : 0}&controls=0&loop=1&playlist=${currentTrack.videoId}&rel=0&modestbranding=1`

  const handlePlay = () => {
    setPlaying(true)
    setIframeKey(k => k + 1)
  }

  const handlePause = () => {
    setPlaying(false)
    setIframeKey(k => k + 1)
  }

  const handleTrackSelect = (track: typeof TRACKS[0]) => {
    setCurrentTrack(track)
    setPlaying(false)
    setIframeKey(k => k + 1)
  }

  const handlePrev = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id)
    handleTrackSelect(TRACKS[(idx - 1 + TRACKS.length) % TRACKS.length])
  }

  const handleNext = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id)
    handleTrackSelect(TRACKS[(idx + 1) % TRACKS.length])
  }

  return (
    <AppShell>
      <div style={{ padding: '24px 20px', backgroundColor: theme.bgPrimary, minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <button onClick={() => navigate('/dashboard')}
            style={{
              width: 36, height: 36, borderRadius: '50%', border: 'none',
              backgroundColor: theme.cardBg, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}>
            <i className="ti ti-arrow-left" style={{ fontSize: 18, color: theme.textPrimary }} aria-hidden="true" />
          </button>
          <h1 style={{
            fontSize: 20, fontWeight: 700, margin: 0,
            color: isBold ? '#FFFFFF' : theme.textPrimary,
            fontFamily: '"DM Serif Display", serif',
          }}>
            Brain Beats
          </h1>
        </div>

        {/* Hidden YouTube iframe — audio source */}
        <div style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
          <iframe
            key={`${currentTrack.videoId}-${iframeKey}`}
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            title="audio-player"
            style={{ width: 1, height: 1, border: 'none' }}
          />
        </div>

        {/* Player card — matches reference design */}
        <div style={{
          backgroundColor: theme.cardBg,
          borderRadius: 20,
          padding: '20px',
          marginBottom: 20,
          boxShadow: '0 4px 24px rgba(107,57,145,0.10)',
        }}>
          {/* Progress ring + track info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            {/* Progress ring */}
            <div style={{
              width: 72, height: 72, borderRadius: '50%', flexShrink: 0, position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="72" height="72" viewBox="0 0 72 72" style={{ position: 'absolute' }}>
                <circle cx="36" cy="36" r="30" fill="none"
                  stroke={isBold ? 'rgba(255,255,255,0.1)' : '#f0eef8'} strokeWidth="5" />
                <circle cx="36" cy="36" r="30" fill="none"
                  stroke={currentTrack.color} strokeWidth="5"
                  strokeLinecap="round" strokeDasharray="188.5"
                  strokeDashoffset={playing ? "47" : "188.5"}
                  transform="rotate(-90 36 36)"
                  style={{ transition: 'stroke-dashoffset 1s ease' }} />
              </svg>
              <span style={{ fontSize: 12, fontWeight: 700, color: currentTrack.color, position: 'relative' }}>
                {playing ? 'Live' : '0%'}
              </span>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, margin: '0 0 3px',
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {currentTrack.title}
              </p>
              <p style={{ fontSize: 12, color: theme.textSecondary, margin: '0 0 3px' }}>
                {currentTrack.subtitle}
              </p>
              <p style={{ fontSize: 11, color: theme.textMuted || theme.textSecondary, margin: 0 }}>
                {playing ? 'Playing now' : `Duration: ${currentTrack.duration}`}
              </p>
            </div>
          </div>

          {/* Waveform */}
          <div style={{ marginBottom: 16 }}>
            <StaticWaveform playing={playing} color={currentTrack.color} />
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 28 }}>
            <button onClick={handlePrev}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, opacity: 0.7 }}>
              <i className="ti ti-player-skip-back-filled" style={{ fontSize: 24, color: theme.textSecondary }} aria-hidden="true" />
            </button>

            <button
              onClick={playing ? handlePause : handlePlay}
              style={{
                width: 60, height: 60, borderRadius: '50%', border: 'none',
                backgroundColor: currentTrack.color, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 6px 20px ${currentTrack.color}60`,
                transition: 'all 0.2s', transform: 'scale(1)',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
              <i
                className={`ti ${playing ? 'ti-player-pause-filled' : 'ti-player-play-filled'}`}
                style={{ fontSize: 24, color: 'white' }}
                aria-hidden="true"
              />
            </button>

            <button onClick={handleNext}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, opacity: 0.7 }}>
              <i className="ti ti-player-skip-forward-filled" style={{ fontSize: 24, color: theme.textSecondary }} aria-hidden="true" />
            </button>
          </div>

          {/* Note */}
          <p style={{
            fontSize: 11, color: theme.textSecondary, textAlign: 'center',
            marginTop: 14, opacity: 0.7,
          }}>
            Make sure your device volume is on
          </p>
        </div>

        {/* Track list */}
        <p style={{
          fontSize: 11, fontWeight: 700, color: theme.textSecondary,
          textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
        }}>
          Select Track
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {TRACKS.map(track => {
            const isActive = currentTrack.id === track.id
            return (
              <button key={track.id} onClick={() => handleTrackSelect(track)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', padding: '14px 16px',
                  borderRadius: 14, border: 'none', cursor: 'pointer',
                  backgroundColor: isActive ? `${track.color}12` : theme.cardBg,
                  outline: isActive ? `2px solid ${track.color}` : `1px solid ${theme.border || 'rgba(107,57,145,0.10)'}`,
                  transition: 'all 0.15s',
                  boxShadow: isActive ? `0 2px 12px ${track.color}20` : 'none',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                    backgroundColor: `${track.color}20`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <i className="ti ti-music" style={{ fontSize: 16, color: track.color }} aria-hidden="true" />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, margin: '0 0 2px' }}>
                      {track.title}
                    </p>
                    <p style={{ fontSize: 11, color: theme.textSecondary, margin: 0 }}>
                      {track.subtitle}
                    </p>
                  </div>
                </div>

                {/* Playing indicator or duration */}
                {isActive && playing ? (
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 20 }}>
                    {[12, 18, 10, 16, 14].map((h, i) => (
                      <div key={i} style={{
                        width: 3, borderRadius: 2, backgroundColor: track.color,
                        animation: `waveBar ${0.5 + i * 0.15}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.1}s`,
                      }} />
                    ))}
                  </div>
                ) : (
                  <span style={{ fontSize: 11, color: theme.textSecondary, fontWeight: 500 }}>
                    {track.duration}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Bottom CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, paddingBottom: 8 }}>
          <button className="btn-primary" onClick={() => navigate('/meditation')}>
            Try Meditation
          </button>
          <button onClick={() => navigate('/crossword')}
            style={{
              width: '100%', padding: '14px', borderRadius: 14, cursor: 'pointer',
              backgroundColor: 'transparent', fontWeight: 700, fontSize: 14,
              border: `2px solid ${currentTrack.color}`, color: currentTrack.color,
              fontFamily: 'inherit', transition: 'all 0.15s',
            }}>
            Play Crossword
          </button>
        </div>
      </div>
    </AppShell>
  )
}