import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

// ─── Track definitions ────────────────────────────────────────────────────────
// carrierFreq: base tone both ears hear
// beatFreq: difference between ears — the brain perceives this as a pulse
// noiseType: ambient background mixed with the tones
type NoiseType = 'brown' | 'pink' | 'white'

interface Track {
  id: string; title: string; subtitle: string; detail: string
  beatFreq: number; carrierFreq: number
  noiseType: NoiseType; noiseVol: number; toneVol: number
  duration: number; color: string
}

const TRACKS: Track[] = [
  { id:'1', title:'Focus Flow',       subtitle:'Theta · 6 Hz',  detail:'Creative focus & light meditation', beatFreq:6,  carrierFreq:200, noiseType:'brown', noiseVol:0.25, toneVol:0.12, duration:30, color:'#744D83' },
  { id:'2', title:'Deep Work',        subtitle:'Beta · 18 Hz',  detail:'Sustained focus & active thinking',  beatFreq:18, carrierFreq:220, noiseType:'brown', noiseVol:0.20, toneVol:0.10, duration:45, color:'#23BBB7' },
  { id:'3', title:'Quick Boost',      subtitle:'Gamma · 40 Hz', detail:'Peak performance & high cognition',  beatFreq:40, carrierFreq:180, noiseType:'pink',  noiseVol:0.20, toneVol:0.08, duration:15, color:'#23627C' },
  { id:'4', title:'Calm Session',     subtitle:'Alpha · 10 Hz', detail:'Relaxed alertness & calm clarity',   beatFreq:10, carrierFreq:210, noiseType:'brown', noiseVol:0.30, toneVol:0.10, duration:60, color:'#F59E0B' },
  { id:'5', title:'Study Mode',       subtitle:'Beta · 14 Hz',  detail:'Focused learning & retention',       beatFreq:14, carrierFreq:196, noiseType:'pink',  noiseVol:0.22, toneVol:0.11, duration:40, color:'#744D83' },
  { id:'6', title:'Brain Activation', subtitle:'Gamma · 36 Hz', detail:'Cognitive enhancement & clarity',    beatFreq:36, carrierFreq:185, noiseType:'white', noiseVol:0.15, toneVol:0.09, duration:25, color:'#23BBB7' },
  { id:'7', title:'Flow State',       subtitle:'Theta · 7 Hz',  detail:'Deep creative flow',                 beatFreq:7,  carrierFreq:205, noiseType:'brown', noiseVol:0.28, toneVol:0.12, duration:50, color:'#23627C' },
  { id:'8', title:'Night Focus',      subtitle:'Delta · 3 Hz',  detail:'Deep relaxation & wind-down',        beatFreq:3,  carrierFreq:190, noiseType:'brown', noiseVol:0.35, toneVol:0.08, duration:35, color:'#1B4E63' },
]

// ─── Audio generators ─────────────────────────────────────────────────────────
function makeBrownNoise(ctx: AudioContext, vol: number) {
  const size   = 2 * ctx.sampleRate
  const buffer = ctx.createBuffer(2, size, ctx.sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const d = buffer.getChannelData(ch)
    let last = 0
    for (let i = 0; i < size; i++) {
      const w = Math.random() * 2 - 1
      d[i] = (last + 0.02 * w) / 1.02
      last  = d[i]
      d[i] *= 3.5
    }
  }
  const src  = ctx.createBufferSource(); src.buffer = buffer; src.loop = true
  const gain = ctx.createGain();         gain.gain.value = vol
  src.connect(gain)
  return { src, gain }
}

function makePinkNoise(ctx: AudioContext, vol: number) {
  const size   = 2 * ctx.sampleRate
  const buffer = ctx.createBuffer(2, size, ctx.sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const d = buffer.getChannelData(ch)
    let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0
    for (let i = 0; i < size; i++) {
      const w = Math.random() * 2 - 1
      b0 = 0.99886*b0 + w*0.0555179; b1 = 0.99332*b1 + w*0.0750759
      b2 = 0.96900*b2 + w*0.1538520; b3 = 0.86650*b3 + w*0.3104856
      b4 = 0.55000*b4 + w*0.5329522; b5 = -0.7616*b5 - w*0.0168980
      d[i] = (b0+b1+b2+b3+b4+b5+b6 + w*0.5362) * 0.11
      b6   = w * 0.115926
    }
  }
  const src  = ctx.createBufferSource(); src.buffer = buffer; src.loop = true
  const gain = ctx.createGain();         gain.gain.value = vol
  src.connect(gain)
  return { src, gain }
}

function makeWhiteNoise(ctx: AudioContext, vol: number) {
  const size   = 2 * ctx.sampleRate
  const buffer = ctx.createBuffer(2, size, ctx.sampleRate)
  for (let ch = 0; ch < 2; ch++) {
    const d = buffer.getChannelData(ch)
    for (let i = 0; i < size; i++) d[i] = Math.random() * 2 - 1
  }
  const src  = ctx.createBufferSource(); src.buffer = buffer; src.loop = true
  const gain = ctx.createGain();         gain.gain.value = vol
  src.connect(gain)
  return { src, gain }
}

function makeBinauralBeat(ctx: AudioContext, carrier: number, beat: number, vol: number) {
  const L    = ctx.createOscillator(); const R = ctx.createOscillator()
  const Lpan = ctx.createStereoPanner(); const Rpan = ctx.createStereoPanner()
  const gain = ctx.createGain()

  L.type = R.type = 'sine'
  L.frequency.value = carrier;        R.frequency.value = carrier + beat
  Lpan.pan.value    = -1;             Rpan.pan.value    = 1
  gain.gain.value   = vol

  L.connect(Lpan); Lpan.connect(gain)
  R.connect(Rpan); Rpan.connect(gain)
  return { L, R, gain }
}

// ─── UI helpers ───────────────────────────────────────────────────────────────
function fmt(s: number) {
  return `${Math.floor(s/60).toString().padStart(2,'0')}:${(s%60).toString().padStart(2,'0')}`
}

function ProgressRing({ pct, color }: { pct: number; color: string }) {
  const r = 28; const circ = 2 * Math.PI * r
  return (
    <svg width="70" height="70" viewBox="0 0 70 70">
      <circle cx="35" cy="35" r={r} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="5" />
      <circle cx="35" cy="35" r={r} fill="none" stroke={color} strokeWidth="5"
        strokeLinecap="round" strokeDasharray={circ}
        strokeDashoffset={circ - (pct/100)*circ}
        style={{ transform:'rotate(-90deg)', transformOrigin:'50% 50%', transition:'stroke-dashoffset 1s linear' }} />
      <text x="35" y="40" textAnchor="middle" fontSize="12" fontWeight="800" fill={color}>
        {Math.round(pct)}%
      </text>
    </svg>
  )
}

function Waveform({ playing, color }: { playing: boolean; color: string }) {
  const heights = [8,14,10,18,12,20,9,16,11,19,13,8,17,12,20,10,15,9,18,13,11,16,8,14]
  return (
    <div style={{ display:'flex', alignItems:'center', gap:2.5, height:28 }}>
      {heights.map((h,i) => (
        <div key={i} style={{
          width:3, height:h, borderRadius:2, backgroundColor:color,
          opacity: playing ? 1 : 0.25,
          animation: playing ? `wv${i%4} ${0.5+(i%4)*0.15}s ease-in-out infinite alternate` : 'none',
          animationDelay:`${(i%6)*0.08}s`,
          transition:'opacity 0.3s',
        }} />
      ))}
      <style>{`
        @keyframes wv0{from{transform:scaleY(.5)}to{transform:scaleY(1.3)}}
        @keyframes wv1{from{transform:scaleY(.9)}to{transform:scaleY(.4)}}
        @keyframes wv2{from{transform:scaleY(1.1)}to{transform:scaleY(.6)}}
        @keyframes wv3{from{transform:scaleY(.6)}to{transform:scaleY(1.2)}}
      `}</style>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function BrainBeatsPage() {
  const navigate          = useNavigate()
  const { theme, isBold } = useTheme()

  const [track, setTrack]     = useState<Track>(TRACKS[0])
  const [playing, setPlaying] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [volume, setVolume]   = useState(0.8)

  // Audio refs — never trigger re-renders
  const ctxRef        = useRef<AudioContext | null>(null)
  const masterRef     = useRef<GainNode | null>(null)
  const stopablesRef  = useRef<(AudioBufferSourceNode | OscillatorNode)[]>([])

  const durationSecs = track.duration * 60
  const progress     = Math.min((elapsed / durationSecs) * 100, 100)

  // Elapsed timer
  useEffect(() => {
    if (!playing) return
    const t = setInterval(() => setElapsed(e => {
      if (e >= durationSecs) { stopAll(); setPlaying(false); return 0 }
      return e + 1
    }), 1000)
    return () => clearInterval(t)
  }, [playing, durationSecs])

  // Sync master volume knob → gain node
  useEffect(() => {
    if (masterRef.current) masterRef.current.gain.value = volume
  }, [volume])

  // Cleanup on unmount
  useEffect(() => () => stopAll(), [])

  function stopAll(fadeMs = 300) {
    const ctx    = ctxRef.current
    const master = masterRef.current
    if (!ctx || !master) return

    // Fade out before stopping to avoid clicks
    master.gain.setTargetAtTime(0, ctx.currentTime, fadeMs / 3000)
    const nodes = stopablesRef.current
    setTimeout(() => nodes.forEach(n => { try { n.stop() } catch {} }), fadeMs)
    stopablesRef.current = []
    masterRef.current    = null
  }

  function startAudio(t: Track) {
    // Create (or reuse) AudioContext — MUST happen inside a user-gesture handler
    if (!ctxRef.current || ctxRef.current.state === 'closed') {
      ctxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
    const ctx = ctxRef.current
    if (ctx.state === 'suspended') ctx.resume()

    // Master gain with fade-in
    const master = ctx.createGain()
    master.gain.setValueAtTime(0, ctx.currentTime)
    master.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.4)
    master.connect(ctx.destination)
    masterRef.current = master

    // Ambient noise
    const noise = t.noiseType === 'brown' ? makeBrownNoise(ctx, t.noiseVol)
                : t.noiseType === 'pink'  ? makePinkNoise(ctx, t.noiseVol)
                :                           makeWhiteNoise(ctx, t.noiseVol)
    noise.gain.connect(master)
    noise.src.start()

    // Binaural beat
    const beat = makeBinauralBeat(ctx, t.carrierFreq, t.beatFreq, t.toneVol)
    beat.gain.connect(master)
    beat.L.start(); beat.R.start()

    stopablesRef.current = [noise.src, beat.L, beat.R]
  }

  const handlePlay = () => {
    stopAll(0)
    startAudio(track)
    setPlaying(true)
  }

  const handlePause = () => {
    stopAll()
    setPlaying(false)
  }

  const selectTrack = (t: Track) => {
    stopAll(0)
    setTrack(t)
    setElapsed(0)
    setPlaying(false)
  }

  const prev = () => {
    const i = TRACKS.findIndex(t => t.id === track.id)
    selectTrack(TRACKS[(i - 1 + TRACKS.length) % TRACKS.length])
  }

  const next = () => {
    const i = TRACKS.findIndex(t => t.id === track.id)
    selectTrack(TRACKS[(i + 1) % TRACKS.length])
  }

  // ── Theme tokens
  const textPrimary = isBold ? '#FFFFFF'                : theme.textPrimary
  const textSub     = isBold ? 'rgba(255,255,255,0.50)' : theme.textSecondary
  const cardBg      = isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF'
  const cardBorder  = isBold ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'
  const rowDivider  = isBold ? 'rgba(255,255,255,0.06)' : '#F3EEF8'
  const hoverBg     = isBold ? 'rgba(255,255,255,0.05)' : '#F8F4FF'

  return (
    <AppShell>
      <div style={{ padding:'28px 20px 80px', backgroundColor:theme.bgPrimary, minHeight:'100vh' }}>
        <div style={{ maxWidth:600, margin:'0 auto' }}>

          {/* Header */}
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:24 }}>
            <button onClick={() => navigate('/dashboard')} style={{
              width:38, height:38, borderRadius:'50%', border:`1px solid ${cardBorder}`,
              backgroundColor:cardBg, cursor:'pointer',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <i className="ti ti-arrow-left" style={{ fontSize:17, color:textPrimary }} />
            </button>
            <div>
              <h1 style={{ fontSize:22, fontWeight:700, margin:0, color:textPrimary, fontFamily:'"DM Serif Display", serif' }}>
                Brain Beats
              </h1>
              <p style={{ fontSize:11, color:textSub, margin:0 }}>
                Binaural beats · Best with headphones
              </p>
            </div>
          </div>

          {/* Player card */}
          <div style={{
            backgroundColor:cardBg, border:`1px solid ${cardBorder}`,
            borderRadius:20, padding:'20px 18px', marginBottom:20,
            boxShadow: isBold ? '0 8px 32px rgba(0,0,0,0.35)' : '0 4px 24px rgba(116,77,131,0.10)',
          }}>
            {/* Ring + info */}
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:16 }}>
              <ProgressRing pct={progress} color={track.color} />
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ fontSize:17, fontWeight:700, color:textPrimary, margin:'0 0 3px', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis' }}>
                  {track.title}
                </p>
                <p style={{ fontSize:13, color:track.color, margin:'0 0 4px', fontWeight:600 }}>
                  {track.subtitle}
                </p>
                <p style={{ fontSize:11, color:textSub, margin:'0 0 6px' }}>
                  {track.detail}
                </p>
                <p style={{ fontSize:11, color:textSub, margin:0, fontVariantNumeric:'tabular-nums' }}>
                  {fmt(elapsed)} / {track.duration} min
                </p>
              </div>
            </div>

            {/* Waveform */}
            <div style={{ marginBottom:18 }}>
              <Waveform playing={playing} color={track.color} />
            </div>

            {/* Controls */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:28, marginBottom:16 }}>
              <button onClick={prev} style={{ background:'none', border:'none', cursor:'pointer', padding:8 }}>
                <i className="ti ti-player-skip-back" style={{ fontSize:22, color:textSub }} />
              </button>

              <button onClick={playing ? handlePause : handlePlay} style={{
                width:56, height:56, borderRadius:'50%', border:'none',
                backgroundColor:track.color, cursor:'pointer',
                display:'flex', alignItems:'center', justifyContent:'center',
                boxShadow:`0 4px 20px ${track.color}55`, transition:'transform 0.15s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform='scale(1.07)' }}
                onMouseLeave={e => { e.currentTarget.style.transform='scale(1)' }}
              >
                <i className={`ti ${playing ? 'ti-player-pause' : 'ti-player-play'}`}
                  style={{ fontSize:24, color:'#fff' }} />
              </button>

              <button onClick={next} style={{ background:'none', border:'none', cursor:'pointer', padding:8 }}>
                <i className="ti ti-player-skip-forward" style={{ fontSize:22, color:textSub }} />
              </button>
            </div>

            {/* Volume slider */}
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <i className="ti ti-volume" style={{ fontSize:16, color:textSub, flexShrink:0 }} />
              <input
                type="range" min={0} max={1} step={0.01}
                value={volume}
                onChange={e => setVolume(parseFloat(e.target.value))}
                style={{ flex:1, accentColor:track.color, cursor:'pointer' }}
              />
              <i className="ti ti-volume-2" style={{ fontSize:16, color:textSub, flexShrink:0 }} />
            </div>
          </div>

          {/* Headphones notice */}
          <div style={{
            display:'flex', alignItems:'center', gap:10,
            padding:'12px 16px', borderRadius:12, marginBottom:20,
            backgroundColor: isBold ? 'rgba(255,255,255,0.05)' : `${track.color}0D`,
            border:`1px solid ${track.color}25`,
          }}>
            <i className="ti ti-headphones" style={{ fontSize:18, color:track.color, flexShrink:0 }} />
            <p style={{ fontSize:12, color:textSub, margin:0, lineHeight:1.5 }}>
              <strong style={{ color:textPrimary }}>Headphones recommended.</strong>{' '}
              Binaural beats work by playing slightly different frequencies in each ear — stereo separation is what creates the effect.
            </p>
          </div>

          {/* Track list */}
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:'0.09em', textTransform:'uppercase', color:textSub, margin:'0 0 10px' }}>
            Select Track
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:24 }}>
            {TRACKS.map(t => {
              const isActive = track.id === t.id
              return (
                <button key={t.id} onClick={() => selectTrack(t)} style={{
                  width:'100%', display:'flex', alignItems:'center',
                  justifyContent:'space-between', padding:'13px 16px',
                  borderRadius:14, border:'none', cursor:'pointer',
                  backgroundColor: isActive ? `${t.color}14` : cardBg,
                  outline: isActive ? `2px solid ${t.color}` : `1px solid ${cardBorder}`,
                  transition:'all 0.15s',
                }}
                  onMouseEnter={e => !isActive && (e.currentTarget.style.backgroundColor = hoverBg)}
                  onMouseLeave={e => !isActive && (e.currentTarget.style.backgroundColor = cardBg)}
                >
                  <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                    <div style={{
                      width:9, height:9, borderRadius:'50%', flexShrink:0,
                      backgroundColor:t.color,
                      boxShadow: isActive && playing ? `0 0 10px ${t.color}` : 'none',
                      transition:'box-shadow 0.3s',
                    }} />
                    <div style={{ textAlign:'left' }}>
                      <p style={{ fontSize:13, fontWeight:600, color:textPrimary, margin:'0 0 1px' }}>{t.title}</p>
                      <p style={{ fontSize:11, color:t.color, margin:0, fontWeight:500 }}>{t.subtitle}</p>
                    </div>
                  </div>
                  <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
                    {isActive && playing && (
                      <div style={{ display:'flex', alignItems:'center', gap:2 }}>
                        {[6,10,7].map((h,j) => (
                          <div key={j} style={{
                            width:3, height:h, borderRadius:2, backgroundColor:t.color,
                            animation:`sb${j} 0.7s ease-in-out infinite alternate`,
                            animationDelay:`${j*0.15}s`,
                          }} />
                        ))}
                      </div>
                    )}
                    <span style={{ fontSize:11, color:textSub }}>{t.duration} min</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* CTAs */}
          <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
            <button onClick={() => navigate('/meditation')} style={{
              width:'100%', padding:'15px', borderRadius:12, border:'none',
              backgroundColor:theme.accent, color:'#fff', fontWeight:700, fontSize:15,
              cursor:'pointer', fontFamily:'inherit',
              boxShadow:`0 4px 16px ${theme.accent}40`,
            }}>
              Try Meditation
            </button>
            <button onClick={() => navigate('/scramble')} style={{
              width:'100%', padding:'14px', borderRadius:12, cursor:'pointer',
              backgroundColor:'transparent', fontWeight:700, fontSize:14,
              border:`2px solid ${theme.accent}`, color:theme.accent, fontFamily:'inherit',
            }}>
              Play scramble
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sb0{from{height:5px}to{height:14px}}
        @keyframes sb1{from{height:9px}to{height:18px}}
        @keyframes sb2{from{height:6px}to{height:12px}}
      `}</style>
    </AppShell>
  )
}