import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { useAuthStore } from '../../stores/authStore'
import { tasksApi, habitsApi, sessionsApi, journalApi } from '../../lib/api'
import type { Task, Habit } from '../../types'

// ─── Progress Ring ────────────────────────────────────────────────────────────
function ProgressRing({ percent, color, size = 64 }: { percent: number; color: string; size?: number }) {
  const r = (size / 2) - 5
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#E3DBE6" strokeWidth="5" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      <text x={size/2} y={size/2 + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill={color}>
        {percent}%
      </text>
    </svg>
  )
}

// ─── Mood Slider ──────────────────────────────────────────────────────────────
const MOODS = ['😞', '😕', '😐', '🙂', '😄']

function MoodSlider({ onSelect, selected, theme }: { onSelect: (v: number) => void; selected: number | null; theme: any }) {
  return (
    <div className="flex justify-between items-center px-2">
      {MOODS.map((emoji, i) => (
        <button key={i}
          onClick={() => onSelect(i + 1)}
          className="text-2xl transition-all duration-200 active:scale-110"
          style={{
            opacity: selected === null || selected === i + 1 ? 1 : 0.4,
            transform: selected === i + 1 ? 'scale(1.3)' : 'scale(1)',
            filter: selected === i + 1 ? 'drop-shadow(0 2px 8px rgba(35,187,183,0.4))' : 'none',
            background: 'none', border: 'none', cursor: 'pointer',
          }}>
          {emoji}
        </button>
      ))}
    </div>
  )
}

// ─── Drive badge ──────────────────────────────────────────────────────────────
const DRIVE_LABELS: Record<string, { label: string; emoji: string; color: string }> = {
  OnFire:    { label: 'On Fire',    emoji: '🔥', color: '#FF6B35' },
  DueSoon:   { label: 'Due Soon',   emoji: '⏰', color: '#F59E0B' },
  LowLift:   { label: 'Low Lift',   emoji: '🌿', color: '#23BBB7' },
  OpenSpace: { label: 'Open Space', emoji: '✨', color: '#744D83' },
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate      = useNavigate()
  const { theme, isBold } = useTheme()
  const user          = useAuthStore((s) => s.user)

  const [topTask, setTopTask]         = useState<Task | null>(null)
  const [habits, setHabits]           = useState<Habit[]>([])
  const [focusMin, setFocusMin]       = useState(0)
  const [mood, setMood]               = useState<number | null>(null)
  const [aiNudge, setAiNudge]         = useState("Let's make today count. What's your first move?")
  const [loading, setLoading]         = useState(true)

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })

  useEffect(() => {
    async function load() {
      try {
        const [tasksRes, habitsRes, focusRes, journalRes] = await Promise.allSettled([
          tasksApi.getAll(),
          habitsApi.getAll(),
          sessionsApi.getTodayFocus(),
          journalApi.getToday(),
        ])

        if (tasksRes.status === 'fulfilled') {
          const tasks: Task[] = tasksRes.value.data
          const onFire = tasks.find(t => t.drive === 'OnFire' && t.status !== 'Done')
          setTopTask(onFire || tasks.find(t => t.status !== 'Done') || null)
          const nudge = tasks.find(t => t.aiNudge)?.aiNudge
          if (nudge) setAiNudge(nudge)
        }

        if (habitsRes.status === 'fulfilled') setHabits(habitsRes.value.data.slice(0, 3))
        if (focusRes.status === 'fulfilled')  setFocusMin(focusRes.value.data.minutes)
        if (journalRes.status === 'fulfilled' && journalRes.value.data) {
          setMood(journalRes.value.data.moodScore)
        }
      } catch {}
      finally { setLoading(false) }
    }
    load()
  }, [])

  const driveInfo = topTask ? DRIVE_LABELS[topTask.drive] : DRIVE_LABELS.OnFire
  const taskPercent = topTask?.subtasks?.length
    ? Math.round((topTask.subtasks.filter(s => s.completed).length / topTask.subtasks.length) * 100)
    : 0

  return (
    <AppShell>
      <div className="px-5 pt-6 pb-4" style={{ backgroundColor: theme.bgPrimary }}>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-bold" style={{ color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
              Nudgely
            </h1>
            <p className="text-xs mt-0.5" style={{ color: theme.textSecondary }}>{today}</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/reports/weekly')}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme.cardAlt }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M3 3V21M7 18V9M11 18V5M15 18V12M19 18V8" stroke={theme.textPrimary} strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </button>
            <button onClick={() => navigate('/brain-beats')}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme.cardAlt }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9 6.5 10.3 7.5 11.3C6.6 12 6 13.1 6 14.5C6 17 7.8 19 10 19.5V22H14V19.5C16.2 19 18 17 18 14.5C18 13.1 17.4 12 16.5 11.3C17.5 10.3 18 9 18 7.5C18 4.5 15.5 2 12 2Z"
                  stroke={theme.accent} strokeWidth="2" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        {/* Drive Card */}
        <div className="rounded-2xl p-5 mb-4 relative overflow-hidden"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 4px 20px rgba(116,77,131,0.12)' }}>
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{driveInfo.emoji}</span>
                <span className="text-sm font-bold" style={{ color: driveInfo.color }}>{driveInfo.label}</span>
              </div>
              <h2 className="text-base font-bold mb-1 leading-snug" style={{ color: theme.textPrimary }}>
                {topTask?.title || 'No tasks yet — add your first one'}
              </h2>
              <p className="text-xs" style={{ color: theme.textSecondary }}>
                {topTask
                  ? `Est. ${topTask.estimatedMinutes || 30} min focus time today`
                  : 'Tap Tasks to get started'}
              </p>
            </div>
            <ProgressRing percent={taskPercent} color={theme.progress} size={64} />
          </div>
        </div>

        {/* AI Nudge */}
        <div className="rounded-2xl p-4 mb-4 flex items-start gap-3"
          style={{ backgroundColor: isBold ? theme.cardAlt : '#EDE8F5', boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: theme.accent }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="white" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold mb-1" style={{ color: theme.accent }}>AI Nudge</p>
            <p className="text-sm leading-relaxed" style={{ color: theme.textPrimary }}>"{aiNudge}"</p>
          </div>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: theme.textSecondary }}>›</button>
        </div>

        {/* Mood Check-in */}
        <div className="rounded-2xl p-4 mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <p className="text-sm font-semibold mb-3" style={{ color: theme.textPrimary }}>How are you feeling?</p>
          <MoodSlider onSelect={setMood} selected={mood} theme={theme} />
        </div>

        {/* Today's Habits */}
        <div className="rounded-2xl p-4 mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold" style={{ color: theme.textPrimary }}>Today's Habits</p>
            <button onClick={() => navigate('/habits')}
              className="text-xs font-semibold" style={{ color: theme.accent, background: 'none', border: 'none', cursor: 'pointer' }}>
              View all →
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-4">
              <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin" style={{ borderColor: theme.accent }} />
            </div>
          ) : habits.length === 0 ? (
            <p className="text-xs text-center py-3" style={{ color: theme.textSecondary }}>No habits yet — add some in Habits</p>
          ) : (
            <div className="flex justify-around">
              {habits.map((habit) => {
                const today = new Date().toISOString().split('T')[0]
                const doneToday = habit.completions?.some(c => c.date === today)
                return (
                  <div key={habit.id} className="flex flex-col items-center gap-1.5">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center text-lg border-2 transition-all"
                      style={{ borderColor: doneToday ? theme.accent : '#E3DBE6', backgroundColor: doneToday ? `${theme.accent}20` : 'transparent' }}>
                      {doneToday ? '✓' : habit.emoji}
                    </div>
                    <p className="text-[10px] font-medium text-center max-w-[60px] leading-tight" style={{ color: theme.textSecondary }}>
                      {habit.name}
                    </p>
                    <p className="text-[10px]" style={{ color: theme.accent }}>{habit.streak}d streak</p>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Today's Focus */}
        <div className="rounded-2xl p-4 mb-6 flex items-center justify-between"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: theme.textSecondary }}>Today's Focus</p>
            <p className="text-3xl font-bold" style={{ color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
              {focusMin} <span className="text-base font-semibold">min</span>
            </p>
          </div>
          <div className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${theme.accent}20` }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9 6.5 10.3 7.5 11.3C6.6 12 6 13.1 6 14.5C6 17 7.8 19 10 19.5V22H14V19.5C16.2 19 18 17 18 14.5C18 13.1 17.4 12 16.5 11.3C17.5 10.3 18 9 18 7.5C18 4.5 15.5 2 12 2Z"
                stroke={theme.accent} strokeWidth="2" fill="none" />
            </svg>
          </div>
        </div>

        {/* Start Focus CTA */}
        <button className="btn-primary" onClick={() => navigate('/tasks')}
          style={{ backgroundColor: theme.ctaBg, color: theme.ctaText }}>
          Start Focus
        </button>
      </div>
    </AppShell>
  )
}