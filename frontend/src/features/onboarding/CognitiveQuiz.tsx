import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { useAuthStore } from '../../stores/authStore'
import { onboardingApi } from '../../lib/api'

const SECTIONS = [
  {
    key: 'iq' as const,
    title: 'Intelligence Quotient',
    subtitle: 'Logical reasoning & problem solving',
    questions: [
      { question: 'If 2 + 2 = 4, then 4 + 4 = ?',       options: ['6', '8', '10', '12'] },
      { question: 'Complete the sequence: 2, 4, 8, 16, ?', options: ['24', '32', '40', '48'] },
      { question: 'What comes next? A, C, E, G, ?',        options: ['H', 'I', 'J', 'K'] },
    ],
  },
  {
    key: 'eq' as const,
    title: 'Emotional Intelligence',
    subtitle: 'Understanding and managing emotions',
    questions: [
      { question: 'When a friend cancels plans, you:',  options: ['Feel hurt immediately', 'Assume the worst', 'Ask if everything is okay', "Don't really care"] },
      { question: 'How do you handle criticism at work?', options: ['Get defensive', 'Listen and reflect', 'Ignore it', 'Blame others'] },
      { question: 'In stressful situations, you:',       options: ['Lash out', 'Withdraw completely', 'Take a breath and respond thoughtfully', 'Freeze'] },
    ],
  },
  {
    key: 'sq' as const,
    title: 'Spiritual Intelligence',
    subtitle: 'Purpose, meaning & values alignment',
    questions: [
      { question: 'What drives you most?',                            options: ['Money and status', 'Helping others and impact', 'Pleasure and comfort', 'Knowledge and learning'] },
      { question: 'How aligned are your daily actions with your values?', options: ['Not at all', 'Sometimes', 'Mostly', 'Always'] },
      { question: 'Do you have a sense of purpose?',                  options: ["No, I'm lost", 'Still figuring it out', "Yes, and I'm pursuing it", 'Yes, and it guides everything'] },
    ],
  },
]

function getProgress(sectionIdx: number, qIdx: number) {
  return Math.round(((sectionIdx * 3 + qIdx + 1) / 9) * 100)
}

// ─── Loading screen ───────────────────────────────────────────────────────────
const LOADING_STEPS = [
  { label: 'Attention span check', delay: 600 },
  { label: 'Memory patterns',      delay: 1400 },
  { label: 'Processing style...',  delay: 2200 },
]

function CognitiveLoading({ onDone }: { onDone: () => void }) {
  const [progress, setProgress]       = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => { if (p >= 30) { clearInterval(timer); return 30 } return p + 1 })
    }, 40)
    LOADING_STEPS.forEach(({ delay }, i) => setTimeout(() => setCurrentStep(i + 1), delay))
    const done = setTimeout(onDone, 3200)
    return () => { clearInterval(timer); clearTimeout(done) }
  }, [onDone])

  const radius = 50
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="min-h-screen bg-[#F0EADF] flex flex-col items-center justify-center px-6">
      <div className="bg-white rounded-2xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] p-8 w-full max-w-sm animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#E3DBE6" strokeWidth="8" />
              <circle cx="60" cy="60" r={radius} fill="none" stroke="#23BBB7" strokeWidth="8"
                strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
                style={{ transition: 'stroke-dashoffset 0.1s ease' }} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>{progress}%</span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-center mb-2" style={{ color: '#2D1F35', fontFamily: '"DM Serif Display", serif' }}>Quick Assessment</h2>
        <p className="text-[#9B8EA5] text-sm text-center mb-6">Understanding your cognitive patterns...</p>
        <div className="flex flex-col gap-2">
          {LOADING_STEPS.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              {i < currentStep ? <span className="text-[#23BBB7] text-sm">✓</span>
                : i === currentStep ? <span className="text-[#23BBB7] text-sm">→</span>
                : <span className="w-4" />}
              <span className="text-sm transition-colors duration-300"
                style={{ color: i < currentStep ? '#23BBB7' : i === currentStep ? '#23627C' : '#9B8EA5', fontWeight: i === currentStep ? 500 : 400 }}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-[#9B8EA5] mt-6">This helps us personalize your experience</p>
    </div>
  )
}

// ─── Main quiz ────────────────────────────────────────────────────────────────
export default function CognitiveQuiz() {
  const navigate           = useNavigate()
  const setCognitiveAnswer = useOnboardingStore((s) => s.setCognitiveAnswer)
  const setOnboarded       = useAuthStore((s) => s.setOnboarded)
  const setUser            = useAuthStore((s) => s.setUser)

  const [showLoading, setShowLoading] = useState(true)
  const [sectionIdx, setSectionIdx]   = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [selected, setSelected]       = useState<number | null>(null)
  const [submitting, setSubmitting]   = useState(false)

  const section  = SECTIONS[sectionIdx]
  const question = section.questions[questionIdx]
  const progress = getProgress(sectionIdx, questionIdx)

  const handleSelect = async (optionIdx: number) => {
    if (selected !== null || submitting) return
    setSelected(optionIdx)
    setCognitiveAnswer(section.key, questionIdx, optionIdx)

    setTimeout(async () => {
      const isLastQuestion = questionIdx === section.questions.length - 1
      const isLastSection  = sectionIdx === SECTIONS.length - 1

      if (!isLastQuestion) {
        setQuestionIdx(q => q + 1); setSelected(null)
      } else if (!isLastSection) {
        setSectionIdx(s => s + 1); setQuestionIdx(0); setSelected(null)
      } else {
        setSubmitting(true)
        const store = useOnboardingStore.getState()
        try {
          const { data } = await onboardingApi.submitCognitive({
            iqAnswers: store.iqAnswers.filter(a => a !== null) as number[],
            eqAnswers: store.eqAnswers.filter(a => a !== null) as number[],
            sqAnswers: store.sqAnswers.filter(a => a !== null) as number[],
          })
          if (data.user) setUser(data.user)
        } catch {}
        setOnboarded(true)
        navigate('/dashboard')
      }
    }, 350)
  }

  if (showLoading) return <CognitiveLoading onDone={() => setShowLoading(false)} />

  return (
    <div className="page-auth">
      <div className="mb-6">
        <div className="progress-bar mb-2">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="text-xs text-center text-[#9B8EA5]">{progress}% complete</p>
      </div>

      <div className="animate-fade-in" key={`${sectionIdx}-${questionIdx}`}>
        <h1 className="text-2xl font-bold mb-1" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>{section.title}</h1>
        <p className="text-[#9B8EA5] text-sm mb-6">{section.subtitle}</p>
        <p className="text-sm font-semibold text-[#6B5878] mb-1">Question {questionIdx + 1} of {section.questions.length}</p>
        <p className="text-base font-medium text-[#2D1F35] mb-5">{question.question}</p>
        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <button key={i} className={`select-card ${selected === i ? 'selected' : ''}`}
              onClick={() => handleSelect(i)} disabled={selected !== null || submitting}>
              <p className="text-sm text-[#2D1F35]">{option}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}