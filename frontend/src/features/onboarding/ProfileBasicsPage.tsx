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
    <div className="page-auth">
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 bg-white rounded-xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] flex items-center justify-center">
          <span className="text-sm font-bold" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>N</span>
        </div>
        <StepDots active={2} />
      </div>

      <div className="mb-6 animate-slide-up">
        <h1 className="text-2xl font-bold mb-1" style={{ color: '#2D1F35', fontFamily: '"DM Serif Display", serif' }}>
          Let's get to know you
        </h1>
        <p className="text-[#6B5878] text-sm">This helps us personalize your experience</p>
      </div>

      {/* Avatar */}
      <div className="flex justify-center mb-8 animate-slide-up" style={{ animationDelay: '0.05s' }}>
        <button className="relative w-24 h-24 rounded-full overflow-hidden bg-[#E3DBE6] flex items-center justify-center hover:opacity-90 transition-opacity"
          onClick={() => fileInputRef.current?.click()}>
          {avatarUrl ? (
            <img src={avatarUrl} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                fill="#744D83" opacity="0.5" />
            </svg>
          )}
          <span className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#23BBB7' }}>
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
      <div className="flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] p-4">
          <label className="block text-sm font-semibold text-[#6B5878] mb-1">
            Your Name <span className="text-red-400">*</span>
          </label>
          <input className="w-full bg-transparent text-base text-[#2D1F35] placeholder:text-[#9B8EA5] focus:outline-none"
            placeholder="What should we call you?" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] p-4">
          <label className="block text-sm font-semibold text-[#6B5878] mb-1">
            Username <span className="text-[#9B8EA5] font-normal text-xs">(optional)</span>
          </label>
          <input className="w-full bg-transparent text-base text-[#2D1F35] placeholder:text-[#9B8EA5] focus:outline-none"
            placeholder="@username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] p-4">
          <label className="block text-sm font-semibold text-[#6B5878] mb-1">Email</label>
          <input className="w-full bg-transparent text-base text-[#2D1F35] placeholder:text-[#9B8EA5] focus:outline-none"
            placeholder="user@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </div>

      <div className="mt-auto pt-8 flex flex-col gap-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <button className="btn-primary" onClick={handleContinue} disabled={!canContinue}>Continue</button>
        {!canContinue && <p className="text-center text-xs text-[#9B8EA5]">Please enter your name to continue</p>}
      </div>
    </div>
  )
}