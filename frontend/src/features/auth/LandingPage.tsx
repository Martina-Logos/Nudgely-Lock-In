import { useNavigate } from 'react-router-dom'

const PILLARS = [
  { icon: 'ti-brain',    title: 'Know Yourself',    desc: 'Understand your temperament and cognitive patterns' },
  { icon: 'ti-spa',      title: 'Train Your Brain', desc: 'Ambient audio, meditation, and focus exercises' },
  { icon: 'ti-target',   title: 'Do the Work',      desc: 'AI-powered task management and adaptive focus' },
]

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f9f9f7',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Hero section */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 28px 32px',
        textAlign: 'center',
      }}>

        {/* Logo mark */}
        <div className="animate-fade-in" style={{
          width: 72, height: 72, borderRadius: 22,
          background: 'linear-gradient(135deg, #6b3991, #43e8d8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 24,
          boxShadow: '0 8px 32px rgba(107,57,145,0.25)',
        }}>
          <i className="ti ti-brain" style={{ fontSize: 36, color: 'white' }} aria-hidden="true" />
        </div>

        {/* Brand name */}
        <div className="animate-slide-up" style={{ marginBottom: 8 }}>
          <h1 style={{
            fontSize: 32, fontWeight: 800, letterSpacing: '-0.5px',
            fontFamily: '"DM Serif Display", serif',
            color: '#1a1a2e', margin: 0,
          }}>
            Nudgely
          </h1>
          <p style={{ fontSize: 13, fontWeight: 600, color: '#43e8d8', margin: '2px 0 0', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Lock-In
          </p>
        </div>

        {/* Tagline */}
        <p className="animate-slide-up delay-1" style={{
          fontSize: 15, color: '#5a5a7a', marginBottom: 48,
          lineHeight: 1.6, maxWidth: 280,
        }}>
          Your AI-powered focus companion for a calmer, more productive mind
        </p>

        {/* Pillars */}
        <div className="animate-slide-up delay-2" style={{
          width: '100%', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 48,
        }}>
          {PILLARS.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              padding: '16px 20px', borderRadius: 16,
              backgroundColor: '#ffffff',
              boxShadow: '0 2px 12px rgba(107,57,145,0.07)',
              textAlign: 'left',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                background: 'linear-gradient(135deg, #f4eeff, #e7d1ff)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <i className={`ti ${p.icon}`} style={{ fontSize: 22, color: '#6b3991' }} aria-hidden="true" />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 700, color: '#1a1a2e', margin: '0 0 2px' }}>{p.title}</p>
                <p style={{ fontSize: 12, color: '#5a5a7a', margin: 0, lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA footer */}
      <div className="animate-slide-up delay-3" style={{ padding: '0 28px 48px' }}>
        <button className="btn-cta" onClick={() => navigate('/signup')}
          style={{ marginBottom: 12 }}>
          Get Started — it's free
        </button>
        <button className="btn-ghost" onClick={() => navigate('/login')}
          style={{ width: '100%', textAlign: 'center', padding: '10px' }}>
          Already have an account? <span style={{ color: '#6b3991', fontWeight: 600 }}>Sign in</span>
        </button>
        <p style={{ fontSize: 11, color: '#9999b8', textAlign: 'center', marginTop: 16 }}>
          Takes less than 2 minutes to set up
        </p>
      </div>
    </div>
  )
}