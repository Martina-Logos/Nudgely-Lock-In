import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { habitsApi } from '../../lib/api'
import type { Habit } from '../../types'

// ── Day labels ─────────────────────────────────────────────────────────────────
const DAY_LABELS_7  = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const DAY_LABELS_14 = ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S']

// Build an array of ISO date strings starting from N days ago up to today
function buildDateRange(days: number): string[] {
  const today = new Date()
  return Array.from({ length: days }, (_, i) => {
    const d = new Date(today)
    d.setDate(today.getDate() - (days - 1 - i))
    return d.toISOString().split('T')[0]
  })
}

const TODAY = new Date().toISOString().split('T')[0]

// ── Week dot grid — supports 7 or 14 days, days are clickable ─────────────────
function DotGrid({
  habit,
  days,
  theme,
  onToggleDay,
}: {
  habit: Habit
  days: 7 | 14
  theme: any
  onToggleDay: (habitId: string, date: string, currentlyDone: boolean) => void
}) {
  const dates  = buildDateRange(days)
  const labels = days === 7 ? DAY_LABELS_7 : DAY_LABELS_14

  // Dot size shrinks for 14-day grid so it fits cleanly
  const dotSize = days === 14 ? 24 : 30

  return (
    <div style={{ marginTop: 12 }}>
      {/* Week label dividers for 14-day view */}
      {days === 14 && (
        <div style={{ display: 'flex', marginBottom: 4 }}>
          <span style={{ flex: 7, fontSize: 9, fontWeight: 700, color: theme.textSecondary, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Last week
          </span>
          <span style={{ flex: 7, fontSize: 9, fontWeight: 700, color: theme.textSecondary, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            This week
          </span>
        </div>
      )}

      <div style={{ display: 'flex', gap: days === 14 ? 3 : 5 }}>
        {dates.map((date, i) => {
          const done    = habit.completions?.some(c => c.date === date)
          const isToday = date === TODAY
          const isFuture = date > TODAY

          // Separator between week 1 and week 2 for 14-day grid
          const showSeparator = days === 14 && i === 7

          return (
            <div key={date} style={{ display: 'flex', alignItems: 'flex-end', gap: 0 }}>
              {showSeparator && (
                <div style={{ width: 1, height: 28, backgroundColor: theme.navBorder, marginRight: 3, alignSelf: 'center' }} />
              )}

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                <span style={{
                  fontSize: 8, fontWeight: 600,
                  color: isToday ? theme.accent : theme.textSecondary,
                }}>
                  {labels[i]}
                </span>

                <button
                  onClick={() => !isFuture && onToggleDay(habit.id, date, !!done)}
                  title={isFuture ? 'Future day' : done ? `Undo ${date}` : `Mark ${date} done`}
                  disabled={isFuture}
                  style={{
                    width: dotSize,
                    height: dotSize,
                    borderRadius: '50%',
                    border: `2px solid ${
                      done      ? theme.accent :
                      isToday   ? theme.accent :
                                  theme.navBorder
                    }`,
                    backgroundColor: done
                      ? theme.accent
                      : isToday
                        ? `${theme.accent}12`
                        : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: isFuture ? 'default' : 'pointer',
                    opacity: isFuture ? 0.28 : 1,
                    transition: 'all 0.18s ease',
                    padding: 0,
                    flexShrink: 0,
                  }}
                >
                  {done && (
                    <i className="ti ti-check"
                      style={{ fontSize: days === 14 ? 10 : 13, color: '#ffffff' }}
                      aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ── Habit card ────────────────────────────────────────────────────────────────
function HabitCard({
  habit, theme, streakDays, onComplete, onDelete, onToggleDay,
}: {
  habit: Habit
  theme: any
  streakDays: 7 | 14
  onComplete: (id: string) => void
  onDelete:   (id: string) => void
  onToggleDay: (habitId: string, date: string, currentlyDone: boolean) => void
}) {
  const doneToday = habit.completions?.some(c => c.date === TODAY)

  const strengthColor =
    habit.strength === 'High'     ? '#23BBB7' :
    habit.strength === 'Moderate' ? '#F59E0B' :
                                    '#9B8EA5'

  const ICON_MAP: Record<string, string> = {
    '✅': 'ti-circle-check', '📚': 'ti-book',
    '🏃': 'ti-run',          '💧': 'ti-droplet',
    '🧘': 'ti-mood-calm',    '✍️': 'ti-pencil',
    '🎯': 'ti-target',       '💪': 'ti-barbell',
    '🌱': 'ti-plant',        '⭐': 'ti-star',
  }
  const iconClass = ICON_MAP[habit.emoji] || 'ti-circle-check'

  // How many days in the current streak window are completed
  const dates        = buildDateRange(streakDays)
  const completedCount = dates.filter(d => habit.completions?.some(c => c.date === d)).length
  const streakPercent  = Math.round((completedCount / streakDays) * 100)

  return (
    <div style={{
      borderRadius: 16, padding: '16px 16px 14px', marginBottom: 12,
      backgroundColor: theme.cardBg,
      border: `1px solid ${theme.navBorder}`,
      boxShadow: '0 2px 10px rgba(116,77,131,0.07)',
      transition: 'box-shadow 0.18s ease',
    }}>
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1, minWidth: 0 }}>
          {/* Icon */}
          <div style={{
            width: 40, height: 40, borderRadius: 10, flexShrink: 0,
            backgroundColor: `${theme.accent}15`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <i className={`ti ${iconClass}`} style={{ fontSize: 20, color: theme.accent }} aria-hidden="true" />
          </div>

          <div style={{ minWidth: 0, flex: 1 }}>
            {/* Name + strength */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 2, flexWrap: 'wrap' }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, margin: 0 }}>
                {habit.name}
              </p>
              <span style={{
                fontSize: 10, fontWeight: 700, padding: '2px 7px', borderRadius: 20,
                backgroundColor: `${strengthColor}20`, color: strengthColor, flexShrink: 0,
              }}>
                {habit.strength || 'Weak'}
              </span>
            </div>

            {/* Streak + window completion */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <p style={{ fontSize: 12, color: theme.textSecondary, margin: 0 }}>
                <i className="ti ti-flame" style={{ fontSize: 11, marginRight: 3, color: '#F59E0B' }} aria-hidden="true" />
                {habit.streak} day streak
              </p>
              <span style={{ fontSize: 10, color: theme.textSecondary }}>·</span>
              <p style={{ fontSize: 12, color: theme.accent, fontWeight: 600, margin: 0 }}>
                {completedCount}/{streakDays} this window
              </p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexShrink: 0, marginLeft: 8 }}>
          <button
            onClick={() => !doneToday && onComplete(habit.id)}
            title={doneToday ? 'Already done today' : 'Mark today complete'}
            style={{
              width: 38, height: 38, borderRadius: '50%', border: 'none',
              backgroundColor: doneToday ? `${theme.accent}25` : theme.accent,
              cursor: doneToday ? 'default' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.18s',
            }}
          >
            <i className="ti ti-check"
              style={{ fontSize: 16, color: doneToday ? theme.accent : 'white' }}
              aria-hidden="true" />
          </button>

          <button
            onClick={() => onDelete(habit.id)}
            title="Remove habit"
            style={{
              width: 30, height: 30, borderRadius: '50%', border: 'none',
              backgroundColor: '#FEE2E2', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <i className="ti ti-trash" style={{ fontSize: 13, color: '#EF4444' }} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Dot grid */}
      <DotGrid
        habit={habit}
        days={streakDays}
        theme={theme}
        onToggleDay={onToggleDay}
      />

      {/* Mini progress bar for the streak window */}
      <div style={{ marginTop: 10 }}>
        <div style={{ height: 3, borderRadius: 9999, backgroundColor: theme.navBorder, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 9999,
            backgroundColor: streakPercent === 100 ? '#23BBB7' : theme.accent,
            width: `${streakPercent}%`,
            transition: 'width 0.5s ease',
          }} />
        </div>
        <p style={{ fontSize: 10, color: theme.textSecondary, margin: '4px 0 0', textAlign: 'right' }}>
          {streakPercent}% of {streakDays}-day goal
        </p>
      </div>
    </div>
  )
}

// ── Add Habit Modal ───────────────────────────────────────────────────────────
const HABIT_ICONS = [
  { key: '✅', icon: 'ti-circle-check', label: 'Task'     },
  { key: '📚', icon: 'ti-book',         label: 'Read'     },
  { key: '🏃', icon: 'ti-run',          label: 'Exercise' },
  { key: '💧', icon: 'ti-droplet',      label: 'Hydrate'  },
  { key: '🧘', icon: 'ti-mood-calm',    label: 'Meditate' },
  { key: '✍️', icon: 'ti-pencil',       label: 'Write'    },
  { key: '🎯', icon: 'ti-target',       label: 'Focus'    },
  { key: '💪', icon: 'ti-barbell',      label: 'Train'    },
  { key: '🌱', icon: 'ti-plant',        label: 'Grow'     },
  { key: '⭐', icon: 'ti-star',         label: 'Goal'     },
]

function AddHabitModal({ theme, onAdd, onClose }: {
  theme: any
  onAdd:  (data: { name: string; emoji: string; type: string; targetDays: number }) => Promise<{ success: boolean; error?: string }>
  onClose: () => void
}) {
  const [name, setName]         = useState('')
  const [emoji, setEmoji]       = useState('✅')
  const [type, setType]         = useState('Build')
  const [targetDays, setTarget] = useState<7 | 14>(7)
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState('')

  const handleAdd = async () => {
    if (!name.trim()) { setError('Please enter a habit name'); return }
    setSaving(true); setError('')
    const result = await onAdd({ name: name.trim(), emoji, type, targetDays })
    setSaving(false)
    if (!result.success) setError(result.error || 'Failed to add habit. Try again.')
  }

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        backgroundColor: 'rgba(0,0,0,0.45)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div style={{
        width: '100%', maxWidth: 480,
        borderRadius: '24px 24px 0 0',
        backgroundColor: theme.cardBg,
        padding: '24px 20px 36px',
        animation: 'slideUp 0.25s ease',
        maxHeight: '92vh', overflowY: 'auto',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, color: theme.textPrimary, margin: 0, fontFamily: '"DM Serif Display", serif' }}>
            New Habit
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <i className="ti ti-x" style={{ fontSize: 20, color: theme.textSecondary }} aria-hidden="true" />
          </button>
        </div>

        {/* Icon picker */}
        <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 10px' }}>
          Choose an icon
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
          {HABIT_ICONS.map(h => (
            <button key={h.key} onClick={() => setEmoji(h.key)} title={h.label}
              style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                padding: '8px 10px', borderRadius: 10, border: 'none', cursor: 'pointer',
                backgroundColor: emoji === h.key ? `${theme.accent}20` : (theme.bgSecondary || '#F5F2F8'),
                outline: emoji === h.key ? `2px solid ${theme.accent}` : '2px solid transparent',
                transition: 'all 0.15s', minWidth: 52,
              }}>
              <i className={`ti ${h.icon}`}
                style={{ fontSize: 22, color: emoji === h.key ? theme.accent : theme.textSecondary }}
                aria-hidden="true" />
              <span style={{ fontSize: 10, fontWeight: 600, color: emoji === h.key ? theme.accent : theme.textSecondary }}>
                {h.label}
              </span>
            </button>
          ))}
        </div>

        {/* Habit name */}
        <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 8px' }}>
          Habit name
        </p>
        <input
          className="input"
          style={{ marginBottom: 20 }}
          placeholder="e.g. Morning Journal, Read 20 min, Exercise"
          value={name}
          onChange={e => { setName(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          autoFocus
        />

        {/* Streak goal — 7 or 14 days */}
        <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 8px' }}>
          Streak goal
        </p>
        <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
          {([7, 14] as const).map(d => (
            <button
              key={d}
              onClick={() => setTarget(d)}
              style={{
                flex: 1, padding: '13px 8px', borderRadius: 12,
                backgroundColor: targetDays === d ? theme.accent : 'transparent',
                color: targetDays === d ? '#FFFFFF' : theme.textSecondary,
                border: `2px solid ${targetDays === d ? theme.accent : theme.navBorder}`,
                cursor: 'pointer', fontWeight: 700, fontSize: 14,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
                transition: 'all 0.15s',
              }}
            >
              <span style={{ fontSize: 20, fontWeight: 800, fontFamily: '"DM Serif Display", serif' }}>{d}</span>
              <span style={{ fontSize: 11, fontWeight: 600 }}>day streak</span>
            </button>
          ))}
        </div>

        {/* Build or Quit */}
        <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '0 0 8px' }}>
          Type
        </p>
        <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
          {[
            { value: 'Build', icon: 'ti-trending-up' },
            { value: 'Quit',  icon: 'ti-trending-down' },
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
          <div style={{ padding: '10px 14px', borderRadius: 10, marginBottom: 14, backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
            <p style={{ fontSize: 13, color: '#EF4444', margin: 0 }}>{error}</p>
          </div>
        )}

        {/* Submit */}
        <button
          className="btn-primary"
          onClick={handleAdd}
          disabled={!name.trim() || saving}
          style={{ backgroundColor: theme.ctaBg }}
        >
          {saving ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <i className="ti ti-loader-2 animate-spin" style={{ fontSize: 16 }} aria-hidden="true" />
              Adding…
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

// ── Weekly ring ───────────────────────────────────────────────────────────────
function WeeklyRing({ percent, theme }: { percent: number; theme: any }) {
  const r = 38, circ = 2 * Math.PI * r
  const off = circ - (percent / 100) * circ
  return (
    <svg width="90" height="90" viewBox="0 0 90 90">
      <circle cx="45" cy="45" r={r} fill="none" stroke={theme.navBorder} strokeWidth="7" />
      <circle cx="45" cy="45" r={r} fill="none" stroke={theme.accent} strokeWidth="7"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={off}
        transform="rotate(-90 45 45)" style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      <text x="45" y="50" textAnchor="middle" fontSize="15" fontWeight="700" fill={theme.textPrimary}>
        {percent}%
      </text>
    </svg>
  )
}

// ── Streak window selector (global, sits above the list) ──────────────────────
function StreakWindowSelector({
  value, onChange, theme,
}: {
  value: 7 | 14
  onChange: (v: 7 | 14) => void
  theme: any
}) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      backgroundColor: theme.cardBg,
      border: `1px solid ${theme.navBorder}`,
      borderRadius: 12, padding: 4,
      marginBottom: 16,
    }}>
      <span style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, paddingLeft: 8, letterSpacing: '0.05em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
        Streak view
      </span>
      {([7, 14] as const).map(d => (
        <button
          key={d}
          onClick={() => onChange(d)}
          style={{
            flex: 1, padding: '8px 6px', borderRadius: 9, border: 'none',
            backgroundColor: value === d ? theme.accent : 'transparent',
            color: value === d ? '#ffffff' : theme.textSecondary,
            fontWeight: 700, fontSize: 13, cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          {d} days
        </button>
      ))}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function HabitsPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [habits, setHabits]         = useState<Habit[]>([])
  const [loading, setLoading]       = useState(true)
  const [showAdd, setShowAdd]       = useState(false)
  const [activeTab, setActiveTab]   = useState<'habits' | 'routines'>('habits')
  const [fetchError, setFetchError] = useState('')
  // Global streak window — user sets once, applies to all habits
  const [streakDays, setStreakDays] = useState<7 | 14>(7)

  useEffect(() => { loadHabits() }, [])

  async function loadHabits() {
    setLoading(true); setFetchError('')
    try {
      const { data } = await habitsApi.getAll()
      setHabits(data)
    } catch (err: any) {
      setFetchError(err.response?.data?.message || 'Failed to load habits.')
    } finally {
      setLoading(false)
    }
  }

  async function handleAdd(data: { name: string; emoji: string; type: string; targetDays: number }) {
    try {
      const { data: newHabit } = await habitsApi.create(data)
      setHabits(prev => [...prev, newHabit])
      setShowAdd(false)
      return { success: true }
    } catch (err: any) {
      return { success: false, error: err.response?.data?.message || 'Failed to add habit.' }
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

  // Toggle a specific past/today day dot — complete or undo
  async function handleToggleDay(habitId: string, date: string, currentlyDone: boolean) {
    if (currentlyDone) {
      // Undo — call uncomplete if your API supports it, else optimistic UI
      try {
        // Try an uncomplete endpoint — adjust to match your actual API
        const { data } = await habitsApi.uncomplete?.(habitId, date)
          ?? habitsApi.complete(habitId) // fallback — swap for real endpoint
        setHabits(prev => prev.map(h => h.id === habitId ? data : h))
      } catch {
        // Optimistic: remove the completion locally
        setHabits(prev => prev.map(h => {
          if (h.id !== habitId) return h
          return {
            ...h,
            completions: (h.completions || []).filter(c => c.date !== date),
          }
        }))
      }
    } else {
      // Mark done — if it's today use the standard complete, else use a backdated endpoint
      try {
        if (date === TODAY) {
          const { data } = await habitsApi.complete(habitId)
          setHabits(prev => prev.map(h => h.id === habitId ? data : h))
        } else {
          // Backdated completion — adjust to your API
          const { data } = await habitsApi.completeDate?.(habitId, date)
            ?? habitsApi.complete(habitId)
          setHabits(prev => prev.map(h => h.id === habitId ? data : h))
        }
      } catch {
        // Optimistic: add completion locally
        setHabits(prev => prev.map(h => {
          if (h.id !== habitId) return h
          const existing = h.completions || []
          if (existing.some(c => c.date === date)) return h
          return {
            ...h,
            completions: [...existing, { date, id: `temp-${date}` }],
          }
        }))
      }
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

  // Summary stats based on current streak window
  const dates          = buildDateRange(streakDays)
  const doneToday      = habits.filter(h => h.completions?.some(c => c.date === TODAY)).length
  const windowComplete = habits.reduce((acc, h) => {
    const count = dates.filter(d => h.completions?.some(c => c.date === d)).length
    return acc + count
  }, 0)
  const windowTotal   = habits.length * streakDays
  const windowPercent = windowTotal > 0 ? Math.round((windowComplete / windowTotal) * 100) : 0

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
          <h1 style={{
            fontSize: 20, fontWeight: 700, margin: 0,
            color: isBold ? '#FFFFFF' : theme.textPrimary,
            fontFamily: '"DM Serif Display", serif',
          }}>
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
              borderRadius: 14, padding: '16px', marginBottom: 16,
              backgroundColor: theme.cardBg,
              border: `1px solid ${theme.navBorder}`,
              boxShadow: '0 2px 10px rgba(116,77,131,0.07)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <div>
                <p style={{ fontSize: 12, color: theme.textSecondary, margin: '0 0 4px', fontWeight: 600 }}>
                  {streakDays}-Day Window
                </p>
                <p style={{ fontSize: 32, fontWeight: 800, color: theme.textPrimary, margin: 0, fontFamily: '"DM Serif Display", serif' }}>
                  {windowPercent}%
                </p>
                <p style={{ fontSize: 12, color: theme.textSecondary, margin: '4px 0 0' }}>
                  {doneToday} of {habits.length} done today
                </p>
              </div>
              <WeeklyRing percent={windowPercent} theme={theme} />
            </div>

            {/* Streak window selector */}
            {habits.length > 0 && (
              <StreakWindowSelector value={streakDays} onChange={setStreakDays} theme={theme} />
            )}

            {/* Error */}
            {fetchError && (
              <div style={{ padding: '12px 16px', borderRadius: 12, marginBottom: 16, backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
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
                <HabitCard
                  key={habit.id}
                  habit={habit}
                  theme={theme}
                  streakDays={streakDays}
                  onComplete={handleComplete}
                  onDelete={handleDelete}
                  onToggleDay={handleToggleDay}
                />
              ))
            )}

            {/* Add button */}
            <button
              onClick={() => setShowAdd(true)}
              style={{
                width: '100%', padding: '14px', borderRadius: 14, marginTop: 4,
                backgroundColor: 'transparent',
                border: `2px dashed ${theme.navBorder}`,
                color: theme.textSecondary, cursor: 'pointer',
                fontWeight: 600, fontSize: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                transition: 'all 0.15s',
              }}
            >
              <i className="ti ti-plus" style={{ fontSize: 18 }} aria-hidden="true" />
              Add New Habit
            </button>
          </>
        ) : (
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

      <style>{`
        @keyframes spin    { to { transform: rotate(360deg); } }
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </AppShell>
  )
}