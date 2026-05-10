import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { journalApi } from '../../lib/api'

const MOODS = [
  { score: 1, emoji: '😞', label: 'Rough' },
  { score: 2, emoji: '😕', label: 'Low' },
  { score: 3, emoji: '😐', label: 'Okay' },
  { score: 4, emoji: '🙂', label: 'Good' },
  { score: 5, emoji: '😄', label: 'Great' },
]

const TAGS = ['#gratitude', '#wins', '#challenges', '#Distracted', '#Stressed', '#Motivated', '#Proud', '#Anxious']

export default function SelfAwarenessPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [mood, setMood]           = useState<number | null>(null)
  const [text, setText]           = useState('')
  const [tags, setTags]           = useState<string[]>([])
  const [sleep, setSleep]         = useState(7)
  const [aiInsight, setAiInsight] = useState<string | null>(null)
  const [aiPrompt, setAiPrompt]   = useState<string | null>(null)
  const [saving, setSaving]       = useState(false)
  const [saved, setSaved]         = useState(false)
  const [loadingPrompt, setLoadingPrompt] = useState(false)

  // Load today's entry if exists
  useEffect(() => {
    async function loadToday() {
      try {
        const { data } = await journalApi.getToday()
        if (data) {
          setMood(data.moodScore)
          setText(data.text || '')
          setTags(data.tags || [])
          setSleep(data.sleepQuality || 7)
          setAiInsight(data.aiInsight || null)
        }
      } catch {}
    }
    loadToday()
  }, [])

  const toggleTag = (tag: string) =>
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])

  const handleGetPrompt = async () => {
    setLoadingPrompt(true)
    try {
      const { data } = await journalApi.getPrompt()
      setAiPrompt(data.prompt)
      if (!text) setText(data.prompt + '\n\n')
    } catch {}
    finally { setLoadingPrompt(false) }
  }

  const handleSave = async () => {
    if (!mood) return
    setSaving(true)
    try {
      const { data } = await journalApi.save({
        text: text || undefined,
        tags,
        moodScore: mood,
        sleepQuality: sleep,
      })
      setAiInsight(data.aiInsight || null)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {}
    finally { setSaving(false) }
  }

  return (
    <AppShell>
      <div className="px-5 pt-6" style={{ backgroundColor: theme.bgPrimary }}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <button onClick={() => navigate('/dashboard')}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: theme.cardBg, border: 'none', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h1 className="text-xl font-bold"
            style={{ color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
            Self-Awareness
          </h1>
        </div>

        {/* Mood */}
        <div className="rounded-2xl p-4 mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <p className="text-sm font-semibold mb-4" style={{ color: theme.textPrimary }}>
            How are you feeling?
          </p>
          <div className="flex justify-between items-center px-2">
            {MOODS.map(m => (
              <button key={m.score} onClick={() => setMood(m.score)}
                className="flex flex-col items-center gap-1 transition-all active:scale-110"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <span className="text-3xl transition-all"
                  style={{
                    opacity: mood === null || mood === m.score ? 1 : 0.35,
                    transform: mood === m.score ? 'scale(1.3)' : 'scale(1)',
                    filter: mood === m.score ? 'drop-shadow(0 2px 8px rgba(35,187,183,0.5))' : 'none',
                  }}>
                  {m.emoji}
                </span>
                <span className="text-[10px] font-medium"
                  style={{ color: mood === m.score ? theme.accent : theme.textSecondary }}>
                  {m.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Journal */}
        <div className="rounded-2xl p-4 mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold" style={{ color: theme.textPrimary }}>Journal Entry</p>
            <button onClick={handleGetPrompt} disabled={loadingPrompt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={{ backgroundColor: `${theme.accent}20`, color: theme.accent, border: 'none', cursor: 'pointer' }}>
              {loadingPrompt ? '...' : '✦ AI Prompt'}
            </button>
          </div>

          {aiPrompt && (
            <div className="rounded-xl p-3 mb-3"
              style={{ backgroundColor: `${theme.accent}10`, border: `1px solid ${theme.accent}30` }}>
              <p className="text-xs italic" style={{ color: theme.accent }}>{aiPrompt}</p>
            </div>
          )}

          <textarea
            className="w-full text-sm outline-none resize-none"
            style={{
              backgroundColor: 'transparent',
              color: theme.textPrimary,
              border: 'none',
              fontFamily: 'inherit',
              minHeight: 100,
            }}
            placeholder="One quick reflection: what went well today?"
            value={text}
            onChange={e => setText(e.target.value)}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t" style={{ borderColor: theme.navBorder }}>
            {TAGS.map(tag => (
              <button key={tag} onClick={() => toggleTag(tag)}
                className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                style={{
                  backgroundColor: tags.includes(tag) ? `${theme.accent}20` : theme.bgSecondary || '#E3DBE6',
                  color: tags.includes(tag) ? theme.accent : theme.textSecondary,
                  border: `1px solid ${tags.includes(tag) ? theme.accent : 'transparent'}`,
                  cursor: 'pointer',
                }}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Sleep quality */}
        <div className="rounded-2xl p-4 mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold" style={{ color: theme.textPrimary }}>
              🌙 Sleep Quality
            </p>
            <span className="text-lg font-bold" style={{ color: theme.accent }}>{sleep}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: theme.textSecondary }}>Poor</span>
            <input type="range" min={1} max={10} value={sleep}
              onChange={e => setSleep(Number(e.target.value))}
              className="flex-1 accent-[#23BBB7]"
              style={{ accentColor: theme.accent }} />
            <span className="text-xs" style={{ color: theme.textSecondary }}>Excellent</span>
          </div>
        </div>

        {/* AI Insight */}
        {aiInsight && (
          <div className="rounded-2xl p-4 mb-4 flex items-start gap-3"
            style={{ backgroundColor: isBold ? theme.cardAlt : '#EDE8F5' }}>
            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: theme.accent }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="white" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold mb-1" style={{ color: theme.accent }}>AI Insights</p>
              <p className="text-sm leading-relaxed" style={{ color: theme.textPrimary }}>{aiInsight}</p>
              <button onClick={() => navigate('/reports/weekly')}
                className="text-xs font-semibold mt-2"
                style={{ color: theme.accent, background: 'none', border: 'none', cursor: 'pointer' }}>
                See your patterns →
              </button>
            </div>
          </div>
        )}

        {/* Save */}
        {saved && (
          <div className="rounded-xl p-3 mb-3 text-center"
            style={{ backgroundColor: `${theme.accent}20`, border: `1px solid ${theme.accent}` }}>
            <p className="text-sm font-semibold" style={{ color: theme.accent }}>✓ Entry saved</p>
          </div>
        )}

        <button className="btn-primary mb-6" onClick={handleSave}
          disabled={!mood || saving}
          style={{ backgroundColor: theme.ctaBg, opacity: !mood ? 0.5 : 1 }}>
          {saving ? 'Saving...' : 'Save Entry'}
        </button>
      </div>
    </AppShell>
  )
}