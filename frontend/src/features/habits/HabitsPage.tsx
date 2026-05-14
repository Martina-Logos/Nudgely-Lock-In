import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { habitsApi } from '../../lib/api'
import type { Habit } from '../../types'

// ─── Week dot grid ────────────────────────────────────────────────────────────
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

function WeekDotGrid({ habit, theme }: { habit: Habit; theme: any }) {
  const today  = new Date()
  const monday = new Date(today)
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7))

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d.toISOString().split('T')[0]
  })

  return (
    <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
      {weekDates.map((date, i) => {
        const done    = habit.completions?.some(c => c.date === date)
        const isToday = date === today.toISOString().split('T')[0]
        return (
          <div key={date} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: theme.textSecondary }}>{DAYS[i]}</span>
            <div style={{
              width: 28, height: 28, borderRadius: '50%',
              backgroundColor: done ? theme.accent : 'transparent',
              border: `2px solid ${isToday && !done ? theme.accent : done ? theme.accent : theme.navBorder}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}>
              {done && <i className="ti ti-check" style={{ fontSize: 12, color: 'white' }} aria-hidden="true" />}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ─── Habit card ───────────────────────────────────────────────────────────────
function HabitCard({ habit, theme, onComplete, onDelete }: {
  habit: Habit; theme: any
  onComplete: (id: string) => void
  onDelete:   (id: string) => void
}) {
  const today     = new Date().toISOString().split('T')[0]
  const doneToday = habit.completions?.some(c => c.date === today)

  const strengthColor = habit.strength === 'High' ? '#23BBB7'
    : habit.strength === 'Moderate' ? '#F59E0B' : '#9B8EA5'

  const ICON_MAP: Record<string, string> = {
    '✅': 'ti-circle-check',  '📚': 'ti-book',
    '🏃': 'ti-run',           '💧': 'ti-droplet',
    '🧘': 'ti-mood-calm',     '✍️': 'ti-pencil',
    '🎯': 'ti-target',        '💪': 'ti-barbell',
    '🌱': 'ti-plant',         '⭐': 'ti-star',
  }
  const iconClass = ICON_MAP[habit.emoji] || 'ti-circle-check'

  return (
    <div style={{
      borderRadius: 14, padding: '14px 16px', marginBottom: 12,
      backgroundColor: theme.cardBg,
      border: `1px solid ${theme.navBorder}`,
      boxShadow: '0 2px 10px rgba(116,77,131,0.07)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Icon badge */}
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            backgroundColor: `${theme.accent}15`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <i className={`ti ${iconClass}`} style={{ fontSize: 20, color: theme.accent }} aria-hidden="true" />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, margin: 0 }}>
                {habit.name}
              </p>
              <span style={{
                fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20,
                backgroundColor: `${strengthColor}20`, color: strengthColor,
              }}>
                {habit.strength}
              </span>
            </div>
            <p style={{ fontSize: 12, color: theme.textSecondary, margin: 0 }}>
              <i className="ti ti-flame" style={{ fontSize: 11, marginRight: 3, color: '#F59E0B' }} aria-hidden="true" />
              {habit.streak} day streak
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Complete button */}
          <button onClick={() => !doneToday && onComplete(habit.id)}
            title={doneToday ? 'Done today' : 'Mark complete'}
            style={{
              width: 40, height: 40, borderRadius: '50%', border: 'none',
              backgroundColor: doneToday ? `${theme.accent}25` : theme.accent,
              cursor: doneToday ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}>
            <i className="ti ti-check"
              style={{ fontSize: 16, color: doneToday ? theme.accent : 'white' }}
              aria-hidden="true" />
          </button>

          {/* Delete */}
          <button onClick={() => onDelete(habit.id)} title="Remove habit"
            style={{
              width: 32, height: 32, borderRadius: '50%', border: 'none',
              backgroundColor: '#FEE2E2', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
            <i className="ti ti-trash" style={{ fontSize: 14, color: '#EF4444' }} aria-hidden="true" />
          </button>
        </div>
      </div>

      <WeekDotGrid habit={habit} theme={theme} />
    </div>
  )
}

// ─── Add Habit Modal ──────────────────────────────────────────────────────────
const HABIT_ICONS = [
  { key: '✅', icon: 'ti-circle-check', label: 'Task' },
  { key: '📚', icon: 'ti-book',         label: 'Read' },
  { key: '🏃', icon: 'ti-run',          label: 'Exercise' },
  { key: '💧', icon: 'ti-droplet',      label: 'Hydrate' },
  { key: '🧘', icon: 'ti-mood-calm',    label: 'Meditate' },
  { key: '✍️', icon: 'ti-pencil',       label: 'Write' },
  { key: '🎯', icon: 'ti-target',       label: 'Focus' },
  { key: '💪', icon: 'ti-barbell',      label: 'Train' },
  { key: '🌱', icon: 'ti-plant',        label: 'Grow' },
  { key: '⭐', icon: 'ti-star',         label: 'Goal' },
]

function AddHabitModal({ theme, onAdd, onClose }: {
  theme: any
  onAdd:  (data: { name: string; emoji: string; type: string }) => Promise<{ success: boolean; error?: string }>
  onClose: () => void
}) {
  const [name, setName]     = useState('')
  const [emoji, setEmoji]   = useState('✅')
  const [type, setType]     = useState('Build')
  const [saving, setSaving] = useState(false)
  const [error, setError]   = useState('')

  const handleAdd = async () => {
    if (!name.trim()) { setError('Please enter a habit name'); return }
    setSaving(true); setError('')
    const result = await onAdd({ name: name.trim(), emoji, type })
    setSaving(false)
    if (!result.success) setError(result.error || 'Failed to add habit. Please try again.')
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
    }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div style={{
        width: '100%', maxWidth: 480, borderRadius: '24px 24px 0 0',
        backgroundColor: theme.cardBg, padding: '24px 20px 32px',
        animation: 'slideUp 0.25s ease',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: theme.textPrimary, margin: 0,
            fontFamily: '"DM Serif Display", serif' }}>
            New Habit
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="ti ti-x" style={{ fontSize: 20, color: theme.textSecondary }} aria-hidden="true" />
          </button>
        </div>

        {/* Icon picker — labeled */}
        <p style={{ fontSize: 12, fontWeight: 600, color: theme.textSecondary,
          textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 10px' }}>
          Choose an icon
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {HABIT_ICONS.map(h => (
            <button key={h.key} onClick={() => setEmoji(h.key)}
              title={h.label}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                padding: '8px 10px', borderRadius: 10, border: 'none', cursor: 'pointer',
                backgroundColor: emoji === h.key ? `${theme.accent}20` : theme.bgSecondary || '#F5F2F8',
                outline: emoji === h.key ? `2px solid ${theme.accent}` : '2px solid transparent',
                transition: 'all 0.15s', minWidth: 52,
              }}>
              <i className={`ti ${h.icon}`}
                style={{ fontSize: 22, color: emoji === h.key ? theme.accent : theme.textSecondary }}
                aria-hidden="true" />
              <span style={{ fontSize: 10, fontWeight: 600,
                color: emoji === h.key ? theme.accent : theme.textSecondary }}>
                {h.label}
              </span>
            </button>
          ))}
        </div>

        {/* Name input */}
        <p style={{ fontSize: 12, fontWeight: 600, color: theme.textSecondary,
          textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>
          Habit name
        </p>
        <input className="input" style={{ marginBottom: 16 }}
          placeholder="e.g. Morning Journal, Exercise, Read 20 min"
          value={name}
          onChange={e => { setName(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          autoFocus
        />

        {/* Type — Build or Quit */}
        <p style={{ fontSize: 12, fontWeight: 600, color: theme.textSecondary,
          textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 8px' }}>
          Type
        </p>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          {[
            { value: 'Build', icon: 'ti-trending-up', label: 'Build — grow this habit' },
            { value: 'Quit',  icon: 'ti-trending-down', label: 'Quit — break this habit' },
          ].map(t => (
            <button key={t.value} onClick={() => setType(t.value)}
              style={{
                flex: 1, padding: '12px 8px', borderRadius: 12,
                backgroundColor: type === t.value ? theme.accent : 'transparent',
                color: type === t.value ? '#FFFFFF' : theme.textSecondary,
                border: `2px solid ${type === t.value ? theme.accent : theme.navBorder}`,
                cursor: 'pointer', fontWeight: 600, fontSize: 13,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'all 0.15s',
              }}>
              <i className={`ti ${t.icon}`} style={{ fontSize: 16 }} aria-hidden="true" />
              {t.value}
            </button>
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{
            padding: '10px 14px', borderRadius: 10, marginBottom: 12,
            backgroundColor: '#FEE2E2', border: '1px solid #FECACA',
          }}>
            <p style={{ fontSize: 13, color: '#EF4444', margin: 0 }}>{error}</p>
          </div>
        )}

        {/* Submit */}
        <button className="btn-primary" onClick={handleAdd} disabled={!name.trim() || saving}
          style={{ backgroundColor: theme.ctaBg }}>
          {saving ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-loader-2 animate-spin" style={{ fontSize: 16 }} aria-hidden="true" />
              Adding habit...
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-plus" style={{ fontSize: 16 }} aria-hidden="true" />
              Add Habit
            </span>
          )}
        </button>
      </div>
    </div>
  )
}

// ─── Weekly ring ──────────────────────────────────────────────────────────────
function WeeklyRing({ percent, theme }: { percent: number; theme: any }) {
  const r    = 38
  const circ = 2 * Math.PI * r
  const off  = circ - (percent / 100) * circ
  return (
    <svg width="90" height="90" viewBox="0 0 90 90">
      <circle cx="45" cy="45" r={r} fill="none" stroke={theme.navBorder} strokeWidth="7" />
      <circle cx="45" cy="45" r={r} fill="none" stroke={theme.accent} strokeWidth="7"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={off}
        transform="rotate(-90 45 45)" style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      <text x="45" y="50" textAnchor="middle" fontSize="15" fontWeight="700"
        fill={theme.textPrimary}>{percent}%</text>
    </svg>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HabitsPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [habits, setHabits]       = useState<Habit[]>([])
  const [loading, setLoading]     = useState(true)
  const [showAdd, setShowAdd]     = useState(false)
  const [activeTab, setActiveTab] = useState<'habits' | 'routines'>('habits')
  const [fetchError, setFetchError] = useState('')

  useEffect(() => { loadHabits() }, [])

  async function loadHabits() {
    setLoading(true); setFetchError('')
    try {
      const { data } = await habitsApi.getAll()
      setHabits(data)
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Failed to load habits.'
      setFetchError(msg)
    } finally {
      setLoading(false)
    }
  }

  async function handleAdd(data: { name: string; emoji: string; type: string }) {
    try {
      const { data: newHabit } = await habitsApi.create(data)
      setHabits(prev => [...prev, newHabit])
      setShowAdd(false)
      return { success: true }
    } catch (err: any) {
      const msg = err.response?.data?.message || 'Failed to add habit.'
      return { success: false, error: msg }
    }
  }

  async function handleComplete(id: string) {
    try {
      const { data } = await habitsApi.complete(id)
      setHabits(prev => prev.map(h => h.id === id ? data : h))
    } catch (err: any) {
      console.error('Complete habit failed:', err.response?.data)
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm('Remove this habit?')) return
    try {
      await habitsApi.delete(id)
      setHabits(prev => prev.filter(h => h.id !== id))
    } catch (err: any) {
      console.error('Delete habit failed:', err.response?.data)
    }
  }

  const today        = new Date().toISOString().split('T')[0]
  const doneToday    = habits.filter(h => h.completions?.some(c => c.date === today)).length
  const weekPercent  = habits.length ? Math.round((doneToday / habits.length) * 100) : 0

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
            Habits &amp; Routines
          </h1>
        </div>

        {/* Tab switcher */}
        <div style={{
          display: 'flex', gap: 4, padding: 4, borderRadius: 14,
          backgroundColor: theme.cardBg, marginBottom: 20,
          border: `1px solid ${theme.navBorder}`,
        }}>
          {(['habits', 'routines'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              style={{
                flex: 1, padding: '10px', borderRadius: 10, border: 'none',
                backgroundColor: activeTab === tab ? theme.accent : 'transparent',
                color: activeTab === tab ? '#FFFFFF' : theme.textSecondary,
                fontWeight: 600, fontSize: 14, cursor: 'pointer',
                textTransform: 'capitalize', transition: 'all 0.15s',
              }}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'habits' ? (
          <>
            {/* Weekly summary */}
            <div style={{
              borderRadius: 14, padding: '16px', marginBottom: 20,
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.navBorder}`,
              boxShadow: '0 2px 10px rgba(116,77,131,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ fontSize: 12, color: theme.textSecondary, margin: '0 0 4px', fontWeight: 600 }}>
                  This Week
                </p>
                <p style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, margin: 0,
                  fontFamily: '"DM Serif Display", serif' }}>
                  {weekPercent}%
                </p>
                <p style={{ fontSize: 12, color: theme.textSecondary, margin: '4px 0 0' }}>
                  {doneToday} of {habits.length} done today
                </p>
              </div>
              <WeeklyRing percent={weekPercent} theme={theme} />
            </div>

            {/* Fetch error */}
            {fetchError && (
              <div style={{
                padding: '12px 16px', borderRadius: 12, marginBottom: 16,
                backgroundColor: '#FEE2E2', border: '1px solid #FECACA',
              }}>
                <p style={{ fontSize: 13, color: '#EF4444', margin: 0 }}>
                  <i className="ti ti-alert-circle" style={{ marginRight: 6 }} aria-hidden="true" />
                  {fetchError}
                </p>
              </div>
            )}

            {/* Loading */}
            {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%',
                  border: `3px solid ${theme.accent}`,
                  borderTopColor: 'transparent',
                  animation: 'spin 0.8s linear infinite',
                }} />
              </div>
            ) : habits.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <i className="ti ti-plant-2" style={{ fontSize: 48, color: theme.navBorder, display: 'block', marginBottom: 12 }} aria-hidden="true" />
                <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, margin: '0 0 6px' }}>
                  No habits yet
                </p>
                <p style={{ fontSize: 13, color: theme.textSecondary, margin: 0 }}>
                  Start building your first habit below
                </p>
              </div>
            ) : (
              habits.map(habit => (
                <HabitCard key={habit.id} habit={habit} theme={theme}
                  onComplete={handleComplete} onDelete={handleDelete} />
              ))
            )}

            {/* Add button */}
            <button onClick={() => setShowAdd(true)}
              style={{
                width: '100%', padding: '14px', borderRadius: 14, marginTop: 4,
                backgroundColor: 'transparent',
                border: `2px dashed ${theme.navBorder}`,
                color: theme.textSecondary, cursor: 'pointer', fontWeight: 600, fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'all 0.15s',
              }}>
              <i className="ti ti-plus" style={{ fontSize: 18 }} aria-hidden="true" />
              Add New Habit
            </button>
          </>
        ) : (
          /* Routines tab */
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <i className="ti ti-calendar-event"
              style={{ fontSize: 52, color: theme.navBorder, display: 'block', marginBottom: 16 }}
              aria-hidden="true" />
            <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, margin: '0 0 8px' }}>
              Routines coming soon
            </p>
            <p style={{ fontSize: 13, color: theme.textSecondary, margin: 0 }}>
              Morning &amp; evening routines in the next update
            </p>
          </div>
        )}
      </div>

      {showAdd && (
        <AddHabitModal theme={theme} onAdd={handleAdd} onClose={() => setShowAdd(false)} />
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </AppShell>
  )
}