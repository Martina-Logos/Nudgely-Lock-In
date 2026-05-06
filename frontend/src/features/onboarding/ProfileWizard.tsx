import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { onboardingApi } from '../../lib/api'
import type { UserRole, FocusTime, EmotionalState, Distraction, MainGoal, PersonalityVibe } from '../../types'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-1">
      <div className="progress-bar mb-2">
        <div className="progress-bar-fill" style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <p className="text-xs text-center text-[#9B8EA5]">Step {step} of {total}</p>
    </div>
  )
}

function OptionCard({ title, subtitle, selected, onClick }: {
  title: string; subtitle?: string; selected: boolean; onClick: () => void
}) {
  return (
    <button className={`select-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-semibold ${selected ? 'text-[#23627C]' : 'text-[#2D1F35]'}`}>{title}</p>
          {subtitle && <p className="text-xs text-[#9B8EA5] mt-0.5">{subtitle}</p>}
        </div>
        {selected && (
          <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ml-2" style={{ backgroundColor: '#23BBB7' }}>
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </div>
    </button>
  )
}

// ─── Step 1 ───────────────────────────────────────────────────────────────────
const ROLES: { value: UserRole; label: string; desc: string }[] = [
  { value: 'Student',      label: 'Student',      desc: 'Balancing work and study' },
  { value: 'Professional', label: 'Professional', desc: 'Career focused' },
  { value: 'Creator',      label: 'Creator',      desc: 'Building something original' },
  { value: 'Entrepreneur', label: 'Entrepreneur', desc: 'Running a business' },
]

function Step1({ onNext }: { onNext: (d: { displayName: string; timezone: string; role: UserRole }) => void }) {
  const store = useOnboardingStore()
  const [displayName, setDisplayName] = useState(store.displayName || store.name)
  const [timezone, setTimezone]       = useState(store.timezone)
  const [role, setRole]               = useState<UserRole | null>(store.role)
  const canContinue = displayName.trim() && role

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-1" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>Let's get to know you</h1>
      <p className="text-[#6B5878] text-sm mb-6">This helps us personalize your experience</p>
      <div className="flex flex-col gap-4 flex-1">
        <div>
          <label className="block text-sm font-medium text-[#6B5878] mb-1.5">Display Name</label>
          <input className="input" placeholder="Kingsley" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#6B5878] mb-1.5">Timezone</label>
          <input className="input" placeholder="e.g., America/New_York" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#6B5878] mb-2">What describes you best?</label>
          <div className="flex flex-col gap-2">
            {ROLES.map((r) => (
              <OptionCard key={r.value} title={r.label} subtitle={r.desc} selected={role === r.value} onClick={() => setRole(r.value)} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button className="btn-primary" disabled={!canContinue} onClick={() => onNext({ displayName, timezone, role: role! })}>Continue</button>
      </div>
    </div>
  )
}

// ─── Step 2 ───────────────────────────────────────────────────────────────────
const FOCUS_TIMES: { value: FocusTime; label: string; range: string; emoji: string }[] = [
  { value: 'Morning', label: 'Morning', range: '5am - 12pm', emoji: '🌅' },
  { value: 'Afternoon', label: 'Afternoon', range: '12pm - 5pm', emoji: '🌞' },
  { value: 'Evening', label: 'Evening', range: '5pm - 11pm', emoji: '🌙' },
  { value: 'Night', label: 'Night', range: '11pm - 5am', emoji: '🌃' },
]
const EMOTIONAL_STATES: { value: EmotionalState; label: string; desc: string }[] = [
  { value: 'Anxious', label: 'Anxious', desc: 'Worried and overthinking' },
  { value: 'Energetic', label: 'Energetic', desc: 'Pumped and motivated' },
  { value: 'Calm', label: 'Calm', desc: 'Peaceful and focused' },
  { value: 'Overwhelmed', label: 'Overwhelmed', desc: 'Too much on my plate' },
]
const DISTRACTIONS_LIST: { value: Distraction; label: string; desc: string }[] = [
  { value: 'SocialMedia', label: 'Social Media', desc: 'Phone notifications and apps' },
  { value: 'RacingThoughts', label: 'Racing Thoughts', desc: "Mind won't settle" },
  { value: 'OtherPeople', label: 'Other People', desc: 'Interruptions and noise' },
  { value: 'Perfectionism', label: 'Perfectionism', desc: 'Stuck on details' },
]

function Step2({ onNext, onBack }: {
  onNext: (d: { focusTime: FocusTime; emotionalState: EmotionalState; distractions: Distraction[] }) => void
  onBack: () => void
}) {
  const store = useOnboardingStore()
  const [focusTime, setFocusTime]       = useState<FocusTime | null>(store.focusTime)
  const [emotionalState, setEmotional]  = useState<EmotionalState | null>(store.emotionalState)
  const [distractions, setDistractions] = useState<Distraction[]>(store.distractions)

  const toggle = (d: Distraction) =>
    setDistractions(prev => prev.includes(d) ? prev.filter(x => x !== d) : [...prev, d])

  const canContinue = focusTime && emotionalState && distractions.length > 0

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-1" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>How do you think?</h1>
      <p className="text-[#6B5878] text-sm mb-6">Understanding your patterns helps us guide you better</p>
      <div className="flex flex-col gap-5 flex-1 overflow-y-auto no-scrollbar pb-2">
        <div>
          <p className="text-sm font-semibold text-[#2D1F35] mb-2">When do you focus best?</p>
          <div className="flex flex-col gap-2">
            {FOCUS_TIMES.map(ft => (
              <OptionCard key={ft.value} title={`${ft.emoji} ${ft.label}`} subtitle={ft.range}
                selected={focusTime === ft.value} onClick={() => setFocusTime(ft.value)} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#2D1F35] mb-2">Your emotional starting point?</p>
          <div className="flex flex-col gap-2">
            {EMOTIONAL_STATES.map(es => (
              <OptionCard key={es.value} title={es.label} subtitle={es.desc}
                selected={emotionalState === es.value} onClick={() => setEmotional(es.value)} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#2D1F35] mb-2">What distracts you most?</p>
          <div className="flex flex-col gap-2">
            {DISTRACTIONS_LIST.map(d => (
              <OptionCard key={d.value} title={d.label} subtitle={d.desc}
                selected={distractions.includes(d.value)} onClick={() => toggle(d.value)} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button className="btn-secondary flex-1" onClick={onBack}>Back</button>
        <button className="btn-primary flex-1" disabled={!canContinue}
          onClick={() => onNext({ focusTime: focusTime!, emotionalState: emotionalState!, distractions })}>
          Continue
        </button>
      </div>
    </div>
  )
}

// ─── Step 3 ───────────────────────────────────────────────────────────────────
const GOALS: { value: MainGoal; label: string; desc: string; emoji: string }[] = [
  { value: 'StayingFocused',         label: 'Staying Focused',         desc: 'Build deep work habits',            emoji: '🎯' },
  { value: 'BeatingProcrastination', label: 'Beating Procrastination', desc: 'Start, and finish, on time',        emoji: '⏱️' },
  { value: 'BuildingHabits',         label: 'Building Habits',         desc: 'Create lasting routines',           emoji: '📋' },
  { value: 'ManagingADHD',           label: 'Managing ADHD',           desc: 'Work with my brain, not against it', emoji: '🧠' },
]
const VIBES: { value: PersonalityVibe; label: string; desc: string; emoji: string }[] = [
  { value: 'Soft', label: 'Soft', desc: 'Calm, nurturing feel',     emoji: '🌸' },
  { value: 'Bold', label: 'Bold', desc: 'Energetic, powerful vibe', emoji: '⚡' },
]

function Step3({ onNext, onBack }: {
  onNext: (d: { mainGoal: MainGoal; weeklyGoal: string; personalityVibe: PersonalityVibe }) => void
  onBack: () => void
}) {
  const store = useOnboardingStore()
  const [mainGoal, setMainGoal]   = useState<MainGoal | null>(store.mainGoal)
  const [weeklyGoal, setWeekly]   = useState(store.weeklyGoal)
  const [vibe, setVibe]           = useState<PersonalityVibe | null>(store.personalityVibe)
  const canContinue = mainGoal && vibe

  return (
    <div className="flex flex-col flex-1">
      <h1 className="text-2xl font-bold mb-1" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>What do you need help with?</h1>
      <p className="text-[#6B5878] text-sm mb-6">This guides how we support you</p>
      <div className="flex flex-col gap-5 flex-1 overflow-y-auto no-scrollbar pb-2">
        <div>
          <p className="text-sm font-semibold text-[#2D1F35] mb-2">Your main goal</p>
          <div className="flex flex-col gap-2">
            {GOALS.map(g => (
              <OptionCard key={g.value} title={`${g.emoji} ${g.label}`} subtitle={g.desc}
                selected={mainGoal === g.value} onClick={() => setMainGoal(g.value)} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#2D1F35] mb-2">Your goal this week</p>
          <input className="input" placeholder="What's one thing you want to achieve?"
            value={weeklyGoal} onChange={(e) => setWeekly(e.target.value)} />
          <p className="text-xs text-[#9B8EA5] mt-1">Be specific, even if it's small.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#2D1F35] mb-2">How should Nudgely feel?</p>
          <div className="flex flex-col gap-2">
            {VIBES.map(v => (
              <OptionCard key={v.value} title={`${v.emoji} ${v.label}`} subtitle={v.desc}
                selected={vibe === v.value} onClick={() => setVibe(v.value)} />
            ))}
          </div>
        </div>
        <div className="flex items-start gap-2 p-3 rounded-xl" style={{ backgroundColor: '#E3DBE6' }}>
          <span>🤖</span>
          <p className="text-xs text-[#6B5878] leading-relaxed">
            AI Personalization: I'll use this to guide and support you better throughout your day.
          </p>
        </div>
      </div>
      <div className="mt-6 flex gap-3">
        <button className="btn-secondary flex-1" onClick={onBack}>Back</button>
        <button className="btn-primary flex-1" disabled={!canContinue}
          onClick={() => onNext({ mainGoal: mainGoal!, weeklyGoal, personalityVibe: vibe! })}>
          Continue
        </button>
      </div>
    </div>
  )
}

// ─── Main wizard ──────────────────────────────────────────────────────────────
export default function ProfileWizard() {
  const navigate   = useNavigate()
  const [step, setStep]       = useState(1)
  const [saving, setSaving]   = useState(false)
  const setStep1 = useOnboardingStore((s) => s.setStep1)
  const setStep2 = useOnboardingStore((s) => s.setStep2)
  const setStep3 = useOnboardingStore((s) => s.setStep3)

  const handleStep1 = (data: Parameters<typeof setStep1>[0]) => { setStep1(data); setStep(2) }
  const handleStep2 = (data: Parameters<typeof setStep2>[0]) => { setStep2(data); setStep(3) }

  const handleStep3 = async (data: Parameters<typeof setStep3>[0]) => {
    setStep3(data)
    setSaving(true)
    const store = useOnboardingStore.getState()
    try {
      await onboardingApi.saveProfile({
        displayName: store.displayName,
        username:    store.username || undefined,
        timezone:    store.timezone,
        role:        store.role,
      })
      await onboardingApi.savePreferences({
        focusTime:       store.focusTime,
        emotionalState:  store.emotionalState,
        distractions:    store.distractions,
        mainGoal:        data.mainGoal,
        weeklyGoal:      data.weeklyGoal,
        personalityVibe: data.personalityVibe,
      })
      navigate('/onboarding/temperament')
    } catch (err) {
      console.error(err)
      navigate('/onboarding/temperament')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="page-auth">
      <ProgressBar step={step} total={3} />
      <div className="flex flex-col flex-1 mt-6">
        {step === 1 && <Step1 onNext={handleStep1} />}
        {step === 2 && <Step2 onNext={handleStep2} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 onNext={handleStep3} onBack={() => setStep(2)} />}
        {saving && (
          <div className="fixed inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-[#744D83] font-semibold">Saving your profile...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}