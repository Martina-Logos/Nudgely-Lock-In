import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { onboardingApi } from '../../lib/api'
import type { UserRole, FocusTime, EmotionalState, Distraction, MainGoal, PersonalityVibe } from '../../types'

function ProgressBar({ step, total }: { step: number; total: number }) {
  return (
    <div className="wizard-progress">
      <div className="progress-bar mb-2">
        <div className="progress-bar-fill" style={{ width: `${(step / total) * 100}%` }} />
      </div>
      <p>Step {step} of {total}</p>
    </div>
  )
}

function OptionCard({ title, subtitle, selected, onClick }: {
  title: string; subtitle?: string; selected: boolean; onClick: () => void
}) {
  return (
    <button className={`select-card ${selected ? 'selected' : ''}`} onClick={onClick}>
      <div className="wizard-option-content">
        <div>
          <p className={`wizard-option-title ${selected ? 'selected' : ''}`}>{title}</p>
          {subtitle && <p className="wizard-option-subtitle">{subtitle}</p>}
        </div>
        {selected && (
          <span className="wizard-option-check">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
        )}
      </div>
    </button>
  )
}

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
    <div className="wizard-step">
      <div className="auth-copy wizard-copy">
        <h1 className="auth-title" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>Let's get to know you</h1>
        <p className="auth-subtitle">This helps us personalize your experience</p>
      </div>

      <div className="wizard-form">
        <div>
          <label className="auth-label">Display Name</label>
          <input className="input" placeholder="Kingsley" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </div>
        <div>
          <label className="auth-label">Timezone</label>
          <input className="input" placeholder="e.g., America/New_York" value={timezone} onChange={(e) => setTimezone(e.target.value)} />
        </div>
        <div>
          <label className="auth-label">What describes you best?</label>
          <div className="wizard-options">
            {ROLES.map((r) => (
              <OptionCard key={r.value} title={r.label} subtitle={r.desc} selected={role === r.value} onClick={() => setRole(r.value)} />
            ))}
          </div>
        </div>
      </div>

      <div className="auth-actions wizard-actions">
        <button className="btn-primary auth-primary-button" disabled={!canContinue} onClick={() => onNext({ displayName, timezone, role: role! })}>Continue</button>
      </div>
    </div>
  )
}

const FOCUS_TIMES: { value: FocusTime; label: string; range: string }[] = [
  { value: 'Morning', label: 'Morning', range: '5am - 12pm' },
  { value: 'Afternoon', label: 'Afternoon', range: '12pm - 5pm' },
  { value: 'Evening', label: 'Evening', range: '5pm - 11pm' },
  { value: 'Night', label: 'Night', range: '11pm - 5am' },
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
    <div className="wizard-step">
      <div className="auth-copy wizard-copy">
        <h1 className="auth-title" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>How do you think?</h1>
        <p className="auth-subtitle">Understanding your patterns helps us guide you better</p>
      </div>

      <div className="wizard-scroll">
        <section className="wizard-section">
          <p className="wizard-section-title">When do you focus best?</p>
          <div className="wizard-options">
            {FOCUS_TIMES.map(ft => (
              <OptionCard key={ft.value} title={ft.label} subtitle={ft.range}
                selected={focusTime === ft.value} onClick={() => setFocusTime(ft.value)} />
            ))}
          </div>
        </section>

        <section className="wizard-section">
          <p className="wizard-section-title">Your emotional starting point?</p>
          <div className="wizard-options">
            {EMOTIONAL_STATES.map(es => (
              <OptionCard key={es.value} title={es.label} subtitle={es.desc}
                selected={emotionalState === es.value} onClick={() => setEmotional(es.value)} />
            ))}
          </div>
        </section>

        <section className="wizard-section">
          <p className="wizard-section-title">What distracts you most?</p>
          <div className="wizard-options">
            {DISTRACTIONS_LIST.map(d => (
              <OptionCard key={d.value} title={d.label} subtitle={d.desc}
                selected={distractions.includes(d.value)} onClick={() => toggle(d.value)} />
            ))}
          </div>
        </section>
      </div>

      <div className="wizard-actions wizard-actions-row">
        <button className="btn-secondary" onClick={onBack}>Back</button>
        <button className="btn-primary auth-primary-button" disabled={!canContinue}
          onClick={() => onNext({ focusTime: focusTime!, emotionalState: emotionalState!, distractions })}>
          Continue
        </button>
      </div>
    </div>
  )
}

const GOALS: { value: MainGoal; label: string; desc: string }[] = [
  { value: 'StayingFocused',         label: 'Staying Focused',         desc: 'Build deep work habits' },
  { value: 'BeatingProcrastination', label: 'Beating Procrastination', desc: 'Start, and finish, on time' },
  { value: 'BuildingHabits',         label: 'Building Habits',         desc: 'Create lasting routines' },
  { value: 'ManagingADHD',           label: 'Managing ADHD',           desc: 'Work with my brain, not against it' },
]
const VIBES: { value: PersonalityVibe; label: string; desc: string }[] = [
  { value: 'Soft', label: 'Soft', desc: 'Calm, nurturing feel' },
  { value: 'Bold', label: 'Bold', desc: 'Energetic, powerful vibe' },
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
    <div className="wizard-step">
      <div className="auth-copy wizard-copy">
        <h1 className="auth-title" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>What do you need help with?</h1>
        <p className="auth-subtitle">This guides how we support you</p>
      </div>

      <div className="wizard-scroll">
        <section className="wizard-section">
          <p className="wizard-section-title">Your main goal</p>
          <div className="wizard-options">
            {GOALS.map(g => (
              <OptionCard key={g.value} title={g.label} subtitle={g.desc}
                selected={mainGoal === g.value} onClick={() => setMainGoal(g.value)} />
            ))}
          </div>
        </section>

        <section className="wizard-section">
          <p className="wizard-section-title">Your goal this week</p>
          <input className="input" placeholder="What's one thing you want to achieve?"
            value={weeklyGoal} onChange={(e) => setWeekly(e.target.value)} />
          <p className="wizard-helper">Be specific, even if it's small.</p>
        </section>

        <section className="wizard-section">
          <p className="wizard-section-title">How should Nudgely feel?</p>
          <div className="wizard-options">
            {VIBES.map(v => (
              <OptionCard key={v.value} title={v.label} subtitle={v.desc}
                selected={vibe === v.value} onClick={() => setVibe(v.value)} />
            ))}
          </div>
        </section>

        <div className="wizard-ai-note">
          <span>AI</span>
          <p>AI Personalization: I'll use this to guide and support you better throughout your day.</p>
        </div>
      </div>

      <div className="wizard-actions wizard-actions-row">
        <button className="btn-secondary" onClick={onBack}>Back</button>
        <button className="btn-primary auth-primary-button" disabled={!canContinue}
          onClick={() => onNext({ mainGoal: mainGoal!, weeklyGoal, personalityVibe: vibe! })}>
          Continue
        </button>
      </div>
    </div>
  )
}

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
    <div className="page-auth auth-page">
      <div className="auth-card wizard-card">
        <ProgressBar step={step} total={3} />
        {step === 1 && <Step1 onNext={handleStep1} />}
        {step === 2 && <Step2 onNext={handleStep2} onBack={() => setStep(1)} />}
        {step === 3 && <Step3 onNext={handleStep3} onBack={() => setStep(2)} />}
        {saving && (
          <div className="wizard-saving-overlay">
            <div className="wizard-saving-card">
              <p>Saving your profile...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
