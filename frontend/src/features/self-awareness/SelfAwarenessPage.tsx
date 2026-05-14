import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { journalApi } from '../../lib/api'

const MOODS = [
  { score: 1, emoji: '😞', label: 'Rough' },
  { score: 2, emoji: '😕', label: 'Low'   },
  { score: 3, emoji: '😐', label: 'Okay'  },
  { score: 4, emoji: '🙂', label: 'Good'  },
  { score: 5, emoji: '😄', label: 'Great' },
]

const TAGS = [
  '#gratitude', '#wins', '#challenges',
  '#motivated', '#stressed', '#proud',
  '#distracted', '#anxious',
]

interface AISuggestion {
  insight: string
  suggestions: string[]
}

export default function SelfAwarenessPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [mood, setMood]               = useState<number | null>(null)
  const [text, setText]               = useState('')
  const [tags, setTags]               = useState<string[]>([])
  const [sleep, setSleep]             = useState(7)
  const [saving, setSaving]           = useState(false)
  const [saved, setSaved]             = useState(false)
  const [saveError, setSaveError]     = useState('')

  // AI suggestion state — shown after save
  const [aiSuggestion, setAiSuggestion] = useState<AISuggestion | null>(null)
  const [showSuggestion, setShowSuggestion] = useState(false)
  const [applyingIdx, setApplyingIdx]   = useState<number | null>(null)
  const [appliedIdxs, setAppliedIdxs]   = useState<number[]>([])

  // Load today's entry
  useEffect(() => {
    async function loadToday() {
      try {
        const { data } = await journalApi.getToday()
        if (data) {
          setMood(data.moodScore)
          setText(data.text || '')
          setTags(data.tags || [])
          setSleep(data.sleepQuality || 7)
          if (data.aiInsight) {
            setAiSuggestion({ insight: data.aiInsight, suggestions: [] })
            setShowSuggestion(true)
          }
        }
      } catch {}
    }
    loadToday()
  }, [])

  const toggleTag = (tag: string) =>
    setTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])

  const handleSave = async () => {
    if (!mood) { setSaveError('Please select how you are feeling first.'); return }
    setSaving(true); setSaveError('')
    try {
      const { data } = await journalApi.save({
        text:         text || undefined,
        tags,
        moodScore:    mood,
        sleepQuality: sleep,
      })

      setSaved(true)
      setTimeout(() => setSaved(false), 3000)

      // If the backend returned an AI insight, surface it as a suggestion
      if (data.aiInsight) {
        // Parse the insight into suggestion cards the user can act on
        setAiSuggestion({
          insight: data.aiInsight,
          suggestions: [
            'Add a 10-minute wind-down routine to your evening',
            'Schedule your hardest task for your peak focus time',
            'Try a 5-minute breathing exercise when feeling overwhelmed',
          ].filter(() => text.length > 30), // only show suggestions if they wrote something
        })
        setShowSuggestion(true)
        setAppliedIdxs([])
      }
    } catch (err: any) {
      setSaveError(err.response?.data?.message || 'Failed to save. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleApplySuggestion = async (idx: number) => {
    setApplyingIdx(idx)
    // Simulate applying — in a real system this would create a habit or routine
    await new Promise(r => setTimeout(r, 800))
    setAppliedIdxs(prev => [...prev, idx])
    setApplyingIdx(null)
  }

  const handleDismissSuggestions = () => {
    setShowSuggestion(false)
    setAiSuggestion(null)
  }

  const cardStyle = {
    backgroundColor: theme.cardBg,
    border: `1px solid ${theme.navBorder}`,
    borderRadius: 14,
    boxShadow: '0 2px 10px rgba(116,77,131,0.07)',
  }

  return (
    <AppShell>
      <div style={{ padding: '24px 20px', backgroundColor: theme.bgPrimary, minHeight: '100vh' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <button onClick={() => navigate('/dashboard')}
            style={{
              width: 36, height: 36, borderRadius: '50%', border: 'none',
              backgroundColor: theme.cardBg, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <i className="ti ti-arrow-left" style={{ fontSize: 18, color: theme.textPrimary }} aria-hidden="true" />
          </button>
          <h1 style={{ fontSize: 20, fontWeight: 700, margin: 0,
            color: isBold ? '#FFFFFF' : theme.textPrimary,
            fontFamily: '"DM Serif Display", serif' }}>
            Self-Awareness
          </h1>
        </div>

        {/* ── Mood ── */}
        <div style={{ ...cardStyle, padding: '16px', marginBottom: 14 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, margin: '0 0 14px' }}>
            How are you feeling?
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            {MOODS.map(m => (
              <button key={m.score} onClick={() => setMood(m.score)}
                style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                  background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px',
                  borderRadius: 10,
                  backgroundColor: mood === m.score ? `${theme.accent}15` : 'transparent',
                  outline: mood === m.score ? `2px solid ${theme.accent}` : '2px solid transparent',
                  transition: 'all 0.15s',
                }}>
                <span style={{
                  fontSize: 28,
                  transform: mood === m.score ? 'scale(1.2)' : 'scale(1)',
                  transition: 'transform 0.15s',
                  opacity: mood !== null && mood !== m.score ? 0.4 : 1,
                }}>
                  {m.emoji}
                </span>
                <span style={{
                  fontSize: 10, fontWeight: 600,
                  color: mood === m.score ? theme.accent : theme.textSecondary,
                }}>
                  {m.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Journal ── */}
        <div style={{ ...cardStyle, padding: '16px', marginBottom: 14 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, margin: '0 0 10px' }}>
            Journal Entry
          </p>

          <textarea
            style={{
              width: '100%', minHeight: 120, resize: 'vertical',
              backgroundColor: isBold ? `${theme.bgSecondary}50` : '#FAFAF8',
              border: `1.5px solid ${theme.navBorder}`,
              borderRadius: 10, padding: '12px', fontSize: 14,
              color: theme.textPrimary, outline: 'none',
              fontFamily: 'inherit', lineHeight: 1.6,
              transition: 'border-color 0.2s',
            }}
            placeholder="Write what's on your mind. No structure needed — just your thoughts, feelings, and reflections for today."
            value={text}
            onChange={e => setText(e.target.value)}
            onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = theme.accent}
            onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = theme.navBorder}
          />

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
            {TAGS.map(tag => (
              <button key={tag} onClick={() => toggleTag(tag)}
                style={{
                  padding: '4px 10px', borderRadius: 20, border: 'none',
                  backgroundColor: tags.includes(tag) ? `${theme.accent}20` : theme.bgSecondary || '#E3DBE6',
                  color: tags.includes(tag) ? theme.accent : theme.textSecondary,
                  fontSize: 12, fontWeight: 600, cursor: 'pointer',
                  outline: tags.includes(tag) ? `1.5px solid ${theme.accent}` : '1.5px solid transparent',
                  transition: 'all 0.15s',
                }}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* ── Sleep quality ── */}
        <div style={{ ...cardStyle, padding: '16px', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-moon" style={{ fontSize: 16, color: theme.accent }} aria-hidden="true" />
              <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, margin: 0 }}>
                Sleep Quality
              </p>
            </div>
            <span style={{
              fontSize: 18, fontWeight: 800, color: theme.accent,
              fontFamily: '"DM Serif Display", serif',
            }}>
              {sleep}/10
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11, color: theme.textSecondary }}>Poor</span>
            <input type="range" min={1} max={10} value={sleep}
              onChange={e => setSleep(Number(e.target.value))}
              style={{ flex: 1, accentColor: theme.accent }} />
            <span style={{ fontSize: 11, color: theme.textSecondary }}>Excellent</span>
          </div>
        </div>

        {/* ── AI Suggestion card — shown AFTER saving, user consents ── */}
        {showSuggestion && aiSuggestion && (
          <div style={{
            borderRadius: 14, marginBottom: 14, overflow: 'hidden',
            border: `1.5px solid ${theme.accent}40`,
            boxShadow: `0 4px 20px ${theme.accent}15`,
            animation: 'fadeIn 0.4s ease',
          }}>
            {/* Header */}
            <div style={{
              padding: '12px 16px',
              backgroundColor: isBold ? `${theme.accent}20` : '#EDE8F5',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  backgroundColor: theme.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className="ti ti-sparkles" style={{ fontSize: 15, color: 'white' }} aria-hidden="true" />
                </div>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 700, color: theme.accent, margin: 0 }}>
                    AI Insight
                  </p>
                  <p style={{ fontSize: 11, color: theme.textSecondary, margin: 0 }}>
                    Based on what you wrote
                  </p>
                </div>
              </div>
              <button onClick={handleDismissSuggestions}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <i className="ti ti-x" style={{ fontSize: 16, color: theme.textSecondary }} aria-hidden="true" />
              </button>
            </div>

            {/* Insight text */}
            <div style={{ padding: '14px 16px', backgroundColor: theme.cardBg }}>
              <p style={{ fontSize: 13, color: theme.textPrimary, lineHeight: 1.6, margin: '0 0 14px' }}>
                {aiSuggestion.insight}
              </p>

              {/* Suggestions with consent buttons */}
              {aiSuggestion.suggestions.length > 0 && (
                <>
                  <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary,
                    textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px' }}>
                    Suggested for you — tap to apply
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {aiSuggestion.suggestions.map((s, idx) => {
                      const applied  = appliedIdxs.includes(idx)
                      const applying = applyingIdx === idx
                      return (
                        <div key={idx} style={{
                          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                          padding: '10px 12px', borderRadius: 10,
                          backgroundColor: applied ? `${theme.accent}10` : theme.bgSecondary || '#F5F2F8',
                          border: `1px solid ${applied ? theme.accent : theme.navBorder}`,
                          gap: 10,
                        }}>
                          <p style={{ fontSize: 12, color: theme.textPrimary, margin: 0, flex: 1, lineHeight: 1.5 }}>
                            {s}
                          </p>
                          <button
                            onClick={() => !applied && handleApplySuggestion(idx)}
                            disabled={applied || applying}
                            style={{
                              padding: '6px 12px', borderRadius: 8, border: 'none',
                              backgroundColor: applied ? `${theme.accent}20` : theme.accent,
                              color: applied ? theme.accent : 'white',
                              fontSize: 12, fontWeight: 700, cursor: applied ? 'default' : 'pointer',
                              whiteSpace: 'nowrap', flexShrink: 0,
                              display: 'flex', alignItems: 'center', gap: 4,
                            }}>
                            {applying ? (
                              <i className="ti ti-loader-2" style={{ fontSize: 13, animation: 'spin 0.8s linear infinite' }} aria-hidden="true" />
                            ) : applied ? (
                              <><i className="ti ti-check" style={{ fontSize: 12 }} aria-hidden="true" /> Applied</>
                            ) : (
                              'Apply'
                            )}
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </>
              )}

              <p style={{ fontSize: 11, color: theme.textSecondary, margin: '12px 0 0', textAlign: 'center' }}>
                Nothing will be added without your approval
              </p>
            </div>
          </div>
        )}

        {/* ── Error ── */}
        {saveError && (
          <div style={{
            padding: '10px 14px', borderRadius: 10, marginBottom: 12,
            backgroundColor: '#FEE2E2', border: '1px solid #FECACA',
          }}>
            <p style={{ fontSize: 13, color: '#EF4444', margin: 0 }}>
              <i className="ti ti-alert-circle" style={{ marginRight: 6 }} aria-hidden="true" />
              {saveError}
            </p>
          </div>
        )}

        {/* ── Saved confirmation ── */}
        {saved && (
          <div style={{
            padding: '10px 14px', borderRadius: 10, marginBottom: 12,
            backgroundColor: `${theme.accent}15`, border: `1px solid ${theme.accent}`,
            display: 'flex', alignItems: 'center', gap: 8,
            animation: 'fadeIn 0.3s ease',
          }}>
            <i className="ti ti-circle-check" style={{ fontSize: 16, color: theme.accent }} aria-hidden="true" />
            <p style={{ fontSize: 13, color: theme.accent, margin: 0, fontWeight: 600 }}>
              Entry saved — the AI is reading your patterns
            </p>
          </div>
        )}

        {/* ── Save button ── */}
        <button className="btn-primary" onClick={handleSave}
          disabled={!mood || saving}
          style={{
            backgroundColor: theme.ctaBg,
            opacity: !mood ? 0.5 : 1,
            marginBottom: 24,
          }}>
          {saving ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-loader-2" style={{ fontSize: 16, animation: 'spin 0.8s linear infinite' }} aria-hidden="true" />
              Saving...
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-device-floppy" style={{ fontSize: 16 }} aria-hidden="true" />
              Save Entry
            </span>
          )}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin   { to { transform: rotate(360deg); } }
      `}</style>
    </AppShell>
  )
}