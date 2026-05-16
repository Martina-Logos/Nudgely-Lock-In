import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../../stores/onboardingStore'

function StepDots({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
          style={{ backgroundColor: i <= active ? '#23BBB7' : '#C4B8CC', opacity: i > active ? 0.4 : 1 }} />
      ))}
    </div>
  )
}

export default function ProfileBasicsPage() {
  const navigate         = useNavigate()
  const store            = useOnboardingStore()
  const setProfileBasics = useOnboardingStore((s) => s.setProfileBasics)

  const [name, setName]         = useState(store.name)
  const [username, setUsername] = useState(store.username)
  const [email, setEmail]       = useState(store.email)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(store.avatarUrl)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setAvatarUrl(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  const canContinue = name.trim().length > 0

  const handleContinue = () => {
    if (!canContinue) return
    setProfileBasics({ name, username, email, avatarUrl: avatarUrl ?? undefined })
    navigate('/onboarding/step-1')
  }

  return (
    <div className="page-auth auth-page">
      <div className="auth-card profile-basics-card">
        <div className="auth-card-header">
          <div className="profile-basics-mark">
            <span className="text-sm font-bold" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>N</span>
          </div>
          <StepDots active={2} />
        </div>

        <div className="auth-copy animate-slide-up">
          <h1 className="auth-title" style={{ color: '#2D1F35', fontFamily: '"DM Serif Display", serif' }}>
            Let's get to know you
          </h1>
          <p className="auth-subtitle">This helps us personalize your experience</p>
        </div>

        {/* Avatar */}
        <div className="profile-avatar-wrap animate-slide-up" style={{ animationDelay: '0.05s' }}>
          <button className="profile-avatar-button"
            onClick={() => fileInputRef.current?.click()}>
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
            ) : (
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                  fill="#744D83" opacity="0.5" />
              </svg>
            )}
            <span className="profile-avatar-badge">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
          </button>
          <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
        </div>

        {/* Fields */}
        <div className="profile-basics-form animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="profile-field">
            <label className="auth-label">
              Your Name <span className="text-red-400">*</span>
            </label>
            <input className="profile-input"
              placeholder="What should we call you?" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="profile-field">
            <label className="auth-label">
              Username <span className="text-[#9B8EA5] font-normal text-xs">(optional)</span>
            </label>
            <input className="profile-input"
              placeholder="@username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="profile-field">
            <label className="auth-label">Email</label>
            <input className="profile-input"
              placeholder="user@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="auth-actions profile-basics-actions animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary auth-primary-button" onClick={handleContinue} disabled={!canContinue}>Continue</button>
          {!canContinue && <p className="profile-basics-hint">Please enter your name to continue</p>}
        </div>
      </div>
    </div>
  )
}
