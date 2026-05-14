import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

// ─── YouTube video IDs extracted from user's URLs ─────────────────────────────
const TRACKS = [
  { id: '1', title: 'Deep Focus Flow',    subtitle: 'Theta waves',     videoId: 'lyrJThjjF0g', color: '#744D83' },
  { id: '2', title: 'Pure Focus',         subtitle: 'Lo-fi beats',     videoId: 'No-qb_uk-_E', color: '#23BBB7' },
  { id: '3', title: 'Study Beats',        subtitle: 'Ambient focus',   videoId: '-G89S77iJm8', color: '#23627C' },
  { id: '4', title: 'Calm Work Session',  subtitle: 'Binaural alpha',  videoId: '0HDuzhQOhuM', color: '#F59E0B' },
  { id: '5', title: 'Deep Work',          subtitle: 'Concentration',   videoId: 'WPni755-Krg', color: '#744D83' },
  { id: '6', title: 'Brain Activation',   subtitle: 'Neural boost',    videoId: '46p1UIsbDlI', color: '#23BBB7' },
  { id: '7', title: 'Flow State',         subtitle: 'Productivity mix', videoId: 'qQzf-xzZO7M', color: '#23627C' },
  { id: '8', title: 'Night Focus',        subtitle: 'Evening session', videoId: 'lkkGlVWvkLk', color: '#1B4E63' },
]

export default function BrainBeatsPage() {
  const navigate           = useNavigate()
  const { theme, isBold }  = useTheme()
  const [currentTrack, setCurrentTrack] = useState(TRACKS[0])
  const [playing, setPlaying]           = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Send command to YouTube iframe API
  function ytCommand(cmd: string) {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func: cmd, args: [] }),
      '*'
    )
  }

  const handlePlay = () => {
    ytCommand('playVideo')
    setPlaying(true)
  }

  const handlePause = () => {
    ytCommand('pauseVideo')
    setPlaying(false)
  }

  const handleTrackSelect = (track: typeof TRACKS[0]) => {
    setCurrentTrack(track)
    setPlaying(false)
    // Small delay so iframe reloads before we try to play
    setTimeout(() => setPlaying(false), 300)
  }

  const handlePrev = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id)
    handleTrackSelect(TRACKS[(idx - 1 + TRACKS.length) % TRACKS.length])
  }

  const handleNext = () => {
    const idx = TRACKS.findIndex(t => t.id === currentTrack.id)
    handleTrackSelect(TRACKS[(idx + 1) % TRACKS.length])
  }

  const cardStyle = {
    backgroundColor: theme.cardBg,
    border: `1px solid ${theme.navBorder}`,
    borderRadius: 16,
    boxShadow: '0 4px 20px rgba(116,77,131,0.10)',
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
            }}>
            <i className="ti ti-arrow-left" style={{ fontSize: 18, color: theme.textPrimary }} aria-hidden="true" />
          </button>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0,
            color: isBold ? '#FFFFFF' : theme.textPrimary,
            fontFamily: '"DM Serif Display", serif' }}>
            Brain Beats
          </h1>
        </div>

        {/* YouTube embed — hidden visually but provides audio */}
        <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', marginBottom: 20, ...cardStyle }}>
          {/* Visible thumbnail overlay with controls */}
          <div style={{
            position: 'relative', width: '100%', paddingBottom: '56.25%',
            backgroundColor: '#000',
          }}>
            <iframe
              ref={iframeRef}
              key={currentTrack.videoId} // re-mounts on track change
              src={`https://www.youtube.com/embed/${currentTrack.videoId}?enablejsapi=1&autoplay=${playing ? 1 : 0}&controls=0&modestbranding=1&rel=0&iv_load_policy=3`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '100%', border: 'none',
              }}
              title={currentTrack.title}
            />

            {/* Gradient overlay for custom controls */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              height: '40%',
              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Track info + controls bar */}
          <div style={{ padding: '14px 16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, margin: '0 0 2px' }}>
                  {currentTrack.title}
                </p>
                <p style={{ fontSize: 12, color: theme.textSecondary, margin: 0 }}>
                  {currentTrack.subtitle}
                </p>
              </div>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                backgroundColor: playing ? '#22c55e' : theme.navBorder,
                boxShadow: playing ? '0 0 8px #22c55e' : 'none',
                transition: 'all 0.3s',
              }} />
            </div>

            {/* Playback controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
              <button onClick={handlePrev}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
                <i className="ti ti-player-skip-back"
                  style={{ fontSize: 22, color: theme.textSecondary }} aria-hidden="true" />
              </button>

              <button
                onClick={playing ? handlePause : handlePlay}
                style={{
                  width: 56, height: 56, borderRadius: '50%', border: 'none',
                  backgroundColor: theme.accent, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 4px 16px ${theme.accent}50`,
                  transition: 'all 0.2s',
                }}>
                <i
                  className={`ti ${playing ? 'ti-player-pause' : 'ti-player-play'}`}
                  style={{ fontSize: 22, color: 'white' }}
                  aria-hidden="true"
                />
              </button>

              <button onClick={handleNext}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}>
                <i className="ti ti-player-skip-forward"
                  style={{ fontSize: 22, color: theme.textSecondary }} aria-hidden="true" />
              </button>
            </div>

            {/* Notice */}
            <p style={{ fontSize: 11, color: theme.textSecondary, textAlign: 'center', marginTop: 10 }}>
              <i className="ti ti-info-circle" style={{ marginRight: 4, fontSize: 11 }} aria-hidden="true" />
              Audio plays through YouTube. Make sure your volume is on.
            </p>
          </div>
        </div>

        {/* Track list */}
        <p style={{
          fontSize: 11, fontWeight: 700, color: theme.textSecondary,
          textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 10,
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
                  justifyContent: 'space-between', padding: '12px 14px',
                  borderRadius: 12, border: 'none', cursor: 'pointer',
                  backgroundColor: isActive ? `${track.color}18` : theme.cardBg,
                  outline: isActive ? `2px solid ${track.color}` : `1px solid ${theme.navBorder}`,
                  transition: 'all 0.15s',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    backgroundColor: track.color,
                    boxShadow: isActive ? `0 0 8px ${track.color}` : 'none',
                  }} />
                  <div style={{ textAlign: 'left' }}>
                    <p style={{ fontSize: 13, fontWeight: 600, color: theme.textPrimary, margin: '0 0 1px' }}>
                      {track.title}
                    </p>
                    <p style={{ fontSize: 11, color: theme.textSecondary, margin: 0 }}>
                      {track.subtitle}
                    </p>
                  </div>
                </div>
                {isActive && playing && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {[0, 1, 2].map(i => (
                      <div key={i} style={{
                        width: 3, borderRadius: 2,
                        backgroundColor: track.color,
                        animation: `soundbar${i} 0.8s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.15}s`,
                      }} />
                    ))}
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* Bottom CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="btn-primary" onClick={() => navigate('/meditation')}
            style={{ backgroundColor: theme.ctaBg }}>
            Try Meditation
          </button>
          <button onClick={() => navigate('/crossword')}
            style={{
              width: '100%', padding: '13px', borderRadius: 12, cursor: 'pointer',
              backgroundColor: 'transparent', fontWeight: 700, fontSize: 14,
              border: `2px solid ${theme.accent}`, color: theme.accent,
            }}>
            Play Crossword
          </button>
        </div>
      </div>

      <style>{`
        @keyframes soundbar0 { from { height: 6px } to { height: 16px } }
        @keyframes soundbar1 { from { height: 10px } to { height: 20px } }
        @keyframes soundbar2 { from { height: 4px } to { height: 14px } }
      `}</style>
    </AppShell>
  )
}