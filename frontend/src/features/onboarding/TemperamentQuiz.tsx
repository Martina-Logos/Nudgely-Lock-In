import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { onboardingApi } from '../../lib/api'
import type { Temperament } from '../../types'

const QUESTIONS = [
  { question: 'In social situations, you typically:', options: ['Energize the room and make everyone laugh', 'Take charge and direct the conversation', 'Listen carefully and observe others', 'Go with the flow and keep the peace'] },
  { question: 'When facing a problem, you usually:', options: ['Jump in and try multiple solutions quickly', 'Create a strategic plan and execute it', 'Analyze deeply before taking action', 'Ask others for input and collaborate'] },
  { question: 'Your work style is best described as:', options: ['Spontaneous and adaptable', 'Decisive and goal-oriented', 'Detailed and quality-focused', 'Steady and reliable'] },
  { question: 'Under stress, you tend to:', options: ['Seek distraction and social support', 'Work harder and push through', 'Withdraw and reflect', 'Become passive or avoidant'] },
]

const TEMPERAMENT_MAP: Temperament[] = ['Sanguine', 'Choleric', 'Melancholic', 'Phlegmatic']

function getTemperament(answers: (number | null)[]): Temperament {
  const counts = [0, 0, 0, 0]
  answers.forEach(a => { if (a !== null) counts[a]++ })
  return TEMPERAMENT_MAP[counts.indexOf(Math.max(...counts))]
}

const TEMPERAMENT_DATA: Record<Temperament, { initial: string; tagline: string; strengths: string; challenge: string }> = {
  Sanguine:    { initial: 'S', tagline: 'The Optimist - energetic, spontaneous, and people-focused', strengths: 'Enthusiastic, adaptable, great communicator', challenge: 'Can scatter focus, difficulty with details' },
  Choleric:    { initial: 'C', tagline: 'The Driver - bold, decisive, and goal-oriented',            strengths: 'Natural leader, determined, strategic',           challenge: 'Can be impatient, struggles to slow down' },
  Melancholic: { initial: 'M', tagline: 'The Analyst - thoughtful, precise, and deep',               strengths: 'Detail-oriented, creative, high standards',        challenge: 'Prone to overthinking, self-critical' },
  Phlegmatic:  { initial: 'P', tagline: 'The Peacemaker - calm, dependable, and steady',             strengths: 'Patient, diplomatic, consistent',                  challenge: 'Can avoid conflict, slow to start tasks' },
}

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

function TemperamentResult({ temperament, onContinue }: { temperament: Temperament; onContinue: () => void }) {
  const data = TEMPERAMENT_DATA[temperament]
  return (
    <div className="temperament-result animate-fade-in">
      <div className="temperament-result-mark animate-bounce-soft">{data.initial}</div>
      <h1 className="auth-title" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>{temperament}</h1>
      <p className="auth-subtitle temperament-result-tagline">{data.tagline}</p>

      <div className="temperament-result-panel">
        <div className="temperament-result-row">
          <p>Your Strengths</p>
          <span>{data.strengths}</span>
        </div>
        <div className="temperament-result-row">
          <p>Your Challenge</p>
          <span>{data.challenge}</span>
        </div>
      </div>

      <p className="temperament-result-helper">
        Your temperament type guides how we suggest tasks, timing, and support strategies.
      </p>
      <button className="btn-primary auth-primary-button" onClick={onContinue}>Continue to Cognitive Tests</button>
    </div>
  )
}

export default function TemperamentQuiz() {
  const navigate             = useNavigate()
  const setTemperamentAnswer = useOnboardingStore((s) => s.setTemperamentAnswer)
  const setTemperament       = useOnboardingStore((s) => s.setTemperament)
  const answers              = useOnboardingStore((s) => s.temperamentAnswers)

  const [currentQ, setCurrentQ]     = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [result, setResult]         = useState<Temperament | null>(null)
  const [selected, setSelected]     = useState<number | null>(null)

  const handleSelect = async (optionIndex: number) => {
    setSelected(optionIndex)
    setTemperamentAnswer(currentQ, optionIndex)

    setTimeout(async () => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(q => q + 1); setSelected(null)
      } else {
        const allAnswers = [...answers]; allAnswers[currentQ] = optionIndex
        const temperament = getTemperament(allAnswers)
        try { await onboardingApi.submitTemperament(allAnswers.filter(a => a !== null) as number[]) } catch {}
        setTemperament(temperament); setResult(temperament); setShowResult(true)
      }
    }, 350)
  }

  if (showResult && result) {
    return (
      <div className="page-auth auth-page">
        <div className="auth-card temperament-card">
          <TemperamentResult temperament={result} onContinue={() => navigate('/onboarding/cognitive')} />
        </div>
      </div>
    )
  }

  const question = QUESTIONS[currentQ]

  return (
    <div className="page-auth auth-page">
      <div className="auth-card temperament-card">
        <ProgressBar step={currentQ + 1} total={QUESTIONS.length} />
        <div className="temperament-question animate-fade-in" key={currentQ}>
          <div className="auth-copy temperament-copy">
            <h1 className="auth-title" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>Temperament Quiz</h1>
            <p className="auth-subtitle">Let's discover your natural thinking style</p>
          </div>

          <p className="temperament-kicker">Question {currentQ + 1} of {QUESTIONS.length}</p>
          <p className="temperament-question-text">{question.question}</p>

          <div className="temperament-options">
            {question.options.map((option, i) => (
              <button key={i} className={`select-card temperament-option ${selected === i ? 'selected' : ''}`}
                onClick={() => handleSelect(i)} disabled={selected !== null}>
                <span>{option}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
