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

const TEMPERAMENT_DATA: Record<Temperament, { emoji: string; tagline: string; strengths: string; challenge: string }> = {
  Sanguine:    { emoji: '☀️', tagline: 'The Optimist - Energetic, spontaneous, and people-focused', strengths: 'Enthusiastic, adaptable, great communicator', challenge: 'Can scatter focus, difficulty with details' },
  Choleric:    { emoji: '🔥', tagline: 'The Driver - Bold, decisive, and goal-oriented',            strengths: 'Natural leader, determined, strategic',           challenge: 'Can be impatient, struggles to slow down' },
  Melancholic: { emoji: '🌊', tagline: 'The Analyst - Thoughtful, precise, and deep',               strengths: 'Detail-oriented, creative, high standards',        challenge: 'Prone to overthinking, self-critical' },
  Phlegmatic:  { emoji: '🌿', tagline: 'The Peacemaker - Calm, dependable, and steady',             strengths: 'Patient, diplomatic, consistent',                  challenge: 'Can avoid conflict, slow to start tasks' },
}

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

function TemperamentResult({ temperament, onContinue }: { temperament: Temperament; onContinue: () => void }) {
  const data = TEMPERAMENT_DATA[temperament]
  return (
    <div className="flex flex-col items-center justify-center flex-1 px-2 animate-fade-in">
      <div className="text-6xl mb-4 animate-bounce-soft">{data.emoji}</div>
      <h1 className="text-3xl font-bold mb-3" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>{temperament}</h1>
      <p className="text-[#6B5878] text-sm text-center mb-8 leading-relaxed max-w-xs">{data.tagline}</p>
      <div className="w-full bg-white rounded-2xl shadow-[0_2px_12px_rgba(116,77,131,0.08)] p-5 mb-8">
        <div className="mb-4 pb-4 border-b border-[#E3DBE6]">
          <p className="text-xs font-semibold text-[#9B8EA5] uppercase tracking-wider mb-1">Your Strengths</p>
          <p className="text-sm font-semibold text-[#2D1F35]">{data.strengths}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-[#9B8EA5] uppercase tracking-wider mb-1">Your Challenge</p>
          <p className="text-sm font-semibold text-[#2D1F35]">{data.challenge}</p>
        </div>
      </div>
      <p className="text-xs text-[#9B8EA5] text-center mb-8 leading-relaxed max-w-xs">
        Your temperament type guides how we suggest tasks, timing, and support strategies.
      </p>
      <button className="btn-primary" onClick={onContinue}>Continue to Cognitive Tests</button>
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
      <div className="page-auth">
        <TemperamentResult temperament={result} onContinue={() => navigate('/onboarding/cognitive')} />
      </div>
    )
  }

  const question = QUESTIONS[currentQ]

  return (
    <div className="page-auth">
      <ProgressBar step={currentQ + 1} total={QUESTIONS.length} />
      <div className="mt-6 animate-fade-in" key={currentQ}>
        <h1 className="text-2xl font-bold mb-1" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>Temperament Quiz</h1>
        <p className="text-[#9B8EA5] text-sm mb-6">Let's discover your natural thinking style</p>
        <p className="text-sm font-semibold text-[#6B5878] mb-1">Question {currentQ + 1} of {QUESTIONS.length}</p>
        <p className="text-base font-medium text-[#2D1F35] mb-5">{question.question}</p>
        <div className="flex flex-col gap-3">
          {question.options.map((option, i) => (
            <button key={i} className={`select-card ${selected === i ? 'selected' : ''}`}
              onClick={() => handleSelect(i)} disabled={selected !== null}>
              <p className="text-sm text-[#2D1F35]">{option}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}