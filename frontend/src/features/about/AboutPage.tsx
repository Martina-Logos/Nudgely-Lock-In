import { useNavigate } from 'react-router-dom'
import Aurora from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

// ── Feature data ──────────────────────────────────────────────────────────────
const PRODUCTIVITY_FEATURES = [
  {
    emoji: '✦',
    title: 'AI Task Agent',
    desc: 'Type naturally — the AI creates your task, breaks it into steps, assigns priority, and sets a reminder. No forms, no friction.',
    tags: ['AI-powered', 'Natural language'],
    zone: 'turquoise',
  },
  {
    emoji: '◎',
    title: 'Habits & Routines',
    desc: 'Track what you\'re building and what you\'re quitting. Weekly dot grid, strength ratings, and AI insights on what actually works for you.',
    tags: ['Streak tracking', 'AI insights'],
    zone: 'turquoise',
  },
  {
    emoji: '❋',
    title: 'Self-Awareness Journal',
    desc: 'A private space to log mood, write freely, and tag what you\'re feeling. Over time, Nudgely finds the patterns you\'d never notice yourself.',
    tags: ['Mood tracking', 'Private'],
    zone: 'lilac',
  },
]

const FOCUS_FEATURES = [
  {
    emoji: '♫',
    title: 'Brain Beats',
    desc: 'Steady ambient audio — theta waves, lo-fi, white noise — that helps your mind settle and stay.',
    tags: ['Ambient audio'],
    zone: 'turquoise',
  },
  {
    emoji: '◈',
    title: 'Focus Mode',
    desc: 'One task. One timer. Everything else hidden. Pure, undivided deep work.',
    tags: ['Pomodoro', 'Fullscreen'],
    zone: 'turquoise',
  },
  {
    emoji: '◉',
    title: 'Meditation',
    desc: 'Four session types — Focus, Calm, Sleep, Energy — with guided breathing and a configurable timer.',
    tags: ['4 modes', 'Breathing guide'],
    zone: 'lilac',
  },
  {
    emoji: '⬡',
    title: 'Word Scramble',
    desc: 'A daily word puzzle to warm up your brain before focused work. Cognitive activation, not distraction.',
    tags: ['Daily puzzle'],
    zone: 'turquoise',
  },
]

const INSIGHT_FEATURES = [
  {
    emoji: '◐',
    title: 'Weekly Brain Report',
    desc: 'Every week your AI coach surfaces what actually happened — which habits moved the needle, when your mood dipped, how many focus minutes you logged, and what patterns are emerging.',
    tags: ['AI-generated', 'Behaviour patterns'],
    zone: 'blue',
  },
]

// Zone → visual tokens
const ZONE_STYLES = {
  turquoise: {
    bg:     '#eefdfb',
    border: 'rgba(67,232,216,0.20)',
    tag:    { bg: 'rgba(67,232,216,0.14)', color: '#1d6a82', border: 'rgba(67,232,216,0.22)' },
    icon:   '#43e8d8',
  },
  lilac: {
    bg:     '#f7f1ff',
    border: 'rgba(107,57,145,0.10)',
    tag:    { bg: 'rgba(107,57,145,0.08)', color: '#6b3991', border: 'rgba(107,57,145,0.14)' },
    icon:   '#6b3991',
  },
  blue: {
    bg:     '#eef7fa',
    border: 'rgba(29,106,130,0.12)',
    tag:    { bg: 'rgba(29,106,130,0.08)', color: '#1d6a82', border: 'rgba(29,106,130,0.15)' },
    icon:   '#1d6a82',
  },
}

// ── Sub-components ────────────────────────────────────────────────────────────
function SectionHeading({ label, accent }: { label: string; accent: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
      <div style={{ width: 3, height: 18, borderRadius: 2, background: accent, flexShrink: 0 }} />
      <p style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.10em',
        textTransform: 'uppercase', color: accent, margin: 0,
      }}>
        {label}
      </p>
    </div>
  )
}

function FeatureCard({ feature, wide = false }: { feature: typeof PRODUCTIVITY_FEATURES[0]; wide?: boolean }) {
  const z = ZONE_STYLES[feature.zone as keyof typeof ZONE_STYLES]
  return (
    <div style={{
      background: z.bg,
      border: `1px solid ${z.border}`,
      borderRadius: 16,
      padding: '20px 20px 18px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      transition: 'box-shadow 0.18s ease, transform 0.18s ease',
    }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = `0 4px 20px ${z.border}`
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = 'none'
        el.style.transform = 'translateY(0)'
      }}
    >
      {/* Icon mark */}
      <div style={{
        width: 40, height: 40, borderRadius: 12,
        background: '#ffffff',
        border: `1px solid ${z.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, color: z.icon,
        flexShrink: 0,
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
      }}>
        {feature.emoji}
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        <p style={{
          fontSize: 14, fontWeight: 700, color: '#2f2940',
          margin: '0 0 5px',
          fontFamily: '"DM Serif Display", serif',
        }}>
          {feature.title}
        </p>
        <p style={{
          fontSize: 12.5, color: '#6d6577', lineHeight: 1.6,
          margin: '0 0 10px',
        }}>
          {feature.desc}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {feature.tags.map(tag => (
            <span key={tag} style={{
              fontSize: 10.5, fontWeight: 600,
              color: z.tag.color,
              background: z.tag.bg,
              border: `1px solid ${z.tag.border}`,
              padding: '3px 9px', borderRadius: 9999,
              letterSpacing: '0.01em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function AboutPage() {
  const navigate     = useNavigate()
  const { theme, isBold } = useTheme()

  const pageBg    = '#f9f9f7'
  const headingColor = '#2f2940'
  const subColor     = '#6d6577'

  return (
    <Aurora>
      <div style={{
        backgroundColor: pageBg,
        minHeight: '100vh',
        padding: '32px 24px 80px',
      }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>

          {/* ── Hero card ── */}
          <div style={{
            background: '#ffffff',
            border: '1px solid rgba(107,57,145,0.08)',
            borderRadius: 22,
            padding: '36px 28px 32px',
            textAlign: 'center',
            marginBottom: 28,
            boxShadow: '0 2px 20px rgba(107,57,145,0.07)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Subtle top gradient */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 80,
              background: 'radial-gradient(ellipse at 50% 0%, rgba(107,57,145,0.06) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />


            {/* Wordmark */}
            <div style={{ marginBottom: 8, position: 'relative', zIndex: 1 }}>
              <span style={{
                fontSize: 28, fontWeight: 400,
                fontFamily: '"DM Serif Display", serif',
                fontStyle: 'italic',
                color: '#6b3991',
                letterSpacing: '-0.3px',
              }}>
                Nudgely
              </span>
              {' '}
              <span style={{
                fontSize: 28, fontWeight: 700,
                fontFamily: '"DM Serif Display", serif',
                color: '#43e8d8',
                letterSpacing: '-0.3px',
              }}>
                Lock-In
              </span>
            </div>

            <p style={{
              fontSize: 13.5, fontWeight: 600, color: '#43e8d8',
              letterSpacing: '0.04em', marginBottom: 16,
              fontStyle: 'italic',
            }}>
              Your focus, aligned.
            </p>

            <p style={{
              fontSize: 14, color: subColor, lineHeight: 1.75,
              maxWidth: 480, margin: '0 auto 22px',
            }}>
              An AI-powered productivity assistant built for people who struggle to start,
              focus, and follow through. We understand how your brain works — then guide
              you from overwhelm into action, one nudge at a time.
            </p>

            {/* Pill tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 7 }}>
              {[
                { label: 'ADHD-friendly', zone: 'lilac' },
                { label: 'AI-powered',    zone: 'blue'  },
                { label: 'Emotion-aware', zone: 'lilac' },
                { label: 'Habit-building', zone: 'turquoise' },
              ].map(({ label, zone }) => {
                const z = ZONE_STYLES[zone as keyof typeof ZONE_STYLES]
                return (
                  <span key={label} style={{
                    fontSize: 11.5, fontWeight: 600,
                    color: z.tag.color,
                    background: z.tag.bg,
                    border: `1px solid ${z.tag.border}`,
                    padding: '5px 13px', borderRadius: 9999,
                  }}>
                    {label}
                  </span>
                )
              })}
            </div>
          </div>

          {/* ── Productivity section ── */}
          <div style={{ marginBottom: 28 }}>
            <SectionHeading label="Productivity" accent="#43e8d8" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {PRODUCTIVITY_FEATURES.map(f => (
                <FeatureCard key={f.title} feature={f} wide />
              ))}
            </div>
          </div>

          {/* ── Focus section ── */}
          <div style={{ marginBottom: 28 }}>
            <SectionHeading label="Focus" accent="#1d6a82" />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: 10,
            }}>
              {FOCUS_FEATURES.map(f => (
                <FeatureCard key={f.title} feature={f} />
              ))}
            </div>
          </div>

          {/* ── Insights section ── */}
          <div style={{ marginBottom: 28 }}>
            <SectionHeading label="Insights" accent="#1d6a82" />
            {INSIGHT_FEATURES.map(f => (
              <FeatureCard key={f.title} feature={f} wide />
            ))}
          </div>

          {/* ── Philosophy footer card ── */}
          <div style={{
            background: 'linear-gradient(135deg, #6b3991 0%, #4a2568 100%)',
            borderRadius: 18,
            padding: '24px 26px',
            color: '#ffffff',
            boxShadow: '0 6px 28px rgba(107,57,145,0.25)',
          }}>
            <p style={{ fontSize: 14, lineHeight: 1.75, margin: 0 }}>
              <strong style={{ fontWeight: 700 }}>Built for real human behaviour.</strong>
              {' '}Nudgely doesn't ask you to be more disciplined. It meets you where you are
              and gives you the smallest possible next step — because the hardest part is
              never the task. It's starting.
            </p>
          </div>

          {/* Version */}
          <p style={{
            textAlign: 'center', fontSize: 11.5,
            color: '#948aa1', marginTop: 28,
          }}>
            Nudgely Lock-In · Thoughtfully Built for Your Focus Journey
          </p>
        </div>
      </div>
    </Aurora>
  )
}