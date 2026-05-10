import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { habitsApi } from '../../lib/api'
import type { Habit } from '../../types'

// ─── Week dot grid ────────────────────────────────────────────────────────────
const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

function WeekDotGrid({ habit, theme }: { habit: Habit; theme: any }) {
  const today    = new Date()
  const monday   = new Date(today)
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7))

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d.toISOString().split('T')[0]
  })

  return (
    <div className="flex gap-1.5 mt-2">
      {weekDates.map((date, i) => {
        const done = habit.completions?.some(c => c.date === date)
        const isToday = date === today.toISOString().split('T')[0]
        return (
          <div key={date} className="flex flex-col items-center gap-1">
            <span className="text-[9px] font-medium" style={{ color: theme.textSecondary }}>
              {DAYS[i]}
            </span>
            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all"
              style={{
                backgroundColor: done ? theme.accent : 'transparent',
                border: `2px solid ${isToday && !done ? theme.accent : done ? theme.accent : theme.navBorder}`,
              }}>
              {done && (
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
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
  onDelete: (id: string) => void
}) {
  const today    = new Date().toISOString().split('T')[0]
  const doneToday = habit.completions?.some(c => c.date === today)

  const strengthColor = habit.strength === 'High' ? '#23BBB7'
    : habit.strength === 'Moderate' ? '#F59E0B' : '#9B8EA5'

  return (
    <div className="rounded-2xl p-4 mb-3"
      style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{habit.emoji}</span>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold" style={{ color: theme.textPrimary }}>{habit.name}</p>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${strengthColor}20`, color: strengthColor }}>
                {habit.strength}
              </span>
            </div>
            <p className="text-xs" style={{ color: theme.textSecondary }}>
              🔥 {habit.streak} day streak
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => !doneToday && onComplete(habit.id)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95"
            style={{
              backgroundColor: doneToday ? `${theme.accent}20` : theme.accent,
              border: `2px solid ${theme.accent}`,
              cursor: doneToday ? 'default' : 'pointer',
            }}>
            {doneToday ? (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8L6.5 11.5L13 5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            )}
          </button>

          <button onClick={() => onDelete(habit.id)}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#FEE2E2', border: 'none', cursor: 'pointer' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <WeekDotGrid habit={habit} theme={theme} />
    </div>
  )
}

// ─── Add habit modal ──────────────────────────────────────────────────────────
const EMOJIS = ['✅', '📚', '🏃', '💧', '🧘', '✍️', '🎯', '💪', '🌱', '⭐']

function AddHabitModal({ theme, onAdd, onClose }: {
  theme: any
  onAdd: (data: { name: string; emoji: string; type: string }) => void
  onClose: () => void
}) {
  const [name, setName]   = useState('')
  const [emoji, setEmoji] = useState('✅')
  const [type, setType]   = useState('Build')

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
      <div className="w-full max-w-[430px] rounded-t-3xl p-6 animate-slide-up"
        style={{ backgroundColor: theme.cardBg }}>
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold" style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
            New Habit
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20 }}>✕</button>
        </div>

        {/* Emoji picker */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {EMOJIS.map(e => (
            <button key={e} onClick={() => setEmoji(e)}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-all"
              style={{
                backgroundColor: emoji === e ? `${theme.accent}20` : theme.bgSecondary || '#E3DBE6',
                border: `2px solid ${emoji === e ? theme.accent : 'transparent'}`,
                cursor: 'pointer',
              }}>
              {e}
            </button>
          ))}
        </div>

        {/* Name */}
        <input className="input mb-4" placeholder="Habit name e.g. Morning Journal"
          value={name} onChange={e => setName(e.target.value)} />

        {/* Type */}
        <div className="flex gap-3 mb-5">
          {['Build', 'Quit'].map(t => (
            <button key={t} onClick={() => setType(t)}
              className="flex-1 py-3 rounded-xl font-semibold text-sm transition-all"
              style={{
                backgroundColor: type === t ? theme.accent : 'transparent',
                color: type === t ? '#FFFFFF' : theme.textSecondary,
                border: `2px solid ${type === t ? theme.accent : theme.navBorder}`,
                cursor: 'pointer',
              }}>
              {t === 'Build' ? '📈 Build' : '🚫 Quit'}
            </button>
          ))}
        </div>

        <button className="btn-primary" onClick={() => name.trim() && onAdd({ name, emoji, type })}
          disabled={!name.trim()} style={{ backgroundColor: theme.ctaBg }}>
          Add Habit
        </button>
      </div>
    </div>
  )
}

// ─── Weekly completion ring ───────────────────────────────────────────────────
function WeeklyRing({ percent, theme }: { percent: number; theme: any }) {
  const r = 40
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <svg width="90" height="90" viewBox="0 0 90 90">
      <circle cx="45" cy="45" r={r} fill="none" stroke={theme.navBorder} strokeWidth="7" />
      <circle cx="45" cy="45" r={r} fill="none" stroke={theme.accent} strokeWidth="7"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        transform="rotate(-90 45 45)" style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      <text x="45" y="50" textAnchor="middle" fontSize="16" fontWeight="700" fill={theme.textPrimary}>
        {percent}%
      </text>
    </svg>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function HabitsPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [habits, setHabits]     = useState<Habit[]>([])
  const [loading, setLoading]   = useState(true)
  const [showAdd, setShowAdd]   = useState(false)
  const [activeTab, setActiveTab] = useState<'habits' | 'routines'>('habits')

  useEffect(() => { loadHabits() }, [])

  async function loadHabits() {
    try {
      const { data } = await habitsApi.getAll()
      setHabits(data)
    } catch {}
    finally { setLoading(false) }
  }

  async function handleAdd(data: { name: string; emoji: string; type: string }) {
    try {
      const { data: newHabit } = await habitsApi.create(data)
      setHabits(prev => [...prev, newHabit])
      setShowAdd(false)
    } catch {}
  }

  async function handleComplete(id: string) {
    try {
      const { data } = await habitsApi.complete(id)
      setHabits(prev => prev.map(h => h.id === id ? data : h))
    } catch {}
  }

  async function handleDelete(id: string) {
    try {
      await habitsApi.delete(id)
      setHabits(prev => prev.filter(h => h.id !== id))
    } catch {}
  }

  // Weekly completion %
  const today = new Date().toISOString().split('T')[0]
  const completedToday = habits.filter(h => h.completions?.some(c => c.date === today)).length
  const weekPercent = habits.length ? Math.round((completedToday / habits.length) * 100) : 0

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
            Habits & Routines
          </h1>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-1 p-1 rounded-xl mb-5"
          style={{ backgroundColor: theme.cardBg }}>
          {(['habits', 'routines'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="flex-1 py-2.5 rounded-lg text-sm font-semibold capitalize transition-all"
              style={{
                backgroundColor: activeTab === tab ? theme.accent : 'transparent',
                color: activeTab === tab ? '#FFFFFF' : theme.textSecondary,
                border: 'none', cursor: 'pointer',
              }}>
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'habits' ? (
          <>
            {/* Weekly summary */}
            <div className="rounded-2xl p-4 mb-5 flex items-center justify-between"
              style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: theme.textSecondary }}>This Week</p>
                <p className="text-3xl font-bold" style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
                  {weekPercent}%
                </p>
              </div>
              <WeeklyRing percent={weekPercent} theme={theme} />
            </div>

            {/* Habits list */}
            {loading ? (
              <div className="flex justify-center py-10">
                <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                  style={{ borderColor: theme.accent }} />
              </div>
            ) : habits.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-4xl mb-3">🌱</p>
                <p className="font-semibold mb-1" style={{ color: theme.textPrimary }}>No habits yet</p>
                <p className="text-sm" style={{ color: theme.textSecondary }}>Start building your first habit</p>
              </div>
            ) : (
              habits.map(habit => (
                <HabitCard key={habit.id} habit={habit} theme={theme}
                  onComplete={handleComplete} onDelete={handleDelete} />
              ))
            )}

            {/* Add habit */}
            <button
              onClick={() => setShowAdd(true)}
              className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 mb-6 transition-all"
              style={{
                backgroundColor: 'transparent',
                border: `2px dashed ${theme.navBorder}`,
                color: theme.textSecondary,
                cursor: 'pointer',
              }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 5V19M5 12H19" stroke={theme.textSecondary} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <span className="text-sm font-semibold">Add New Habit</span>
            </button>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">🗓️</p>
            <p className="font-semibold mb-1" style={{ color: theme.textPrimary }}>Routines coming soon</p>
            <p className="text-sm" style={{ color: theme.textSecondary }}>Morning & evening routines in the next update</p>
          </div>
        )}
      </div>

      {showAdd && (
        <AddHabitModal theme={theme} onAdd={handleAdd} onClose={() => setShowAdd(false)} />
      )}
    </AppShell>
  )
}