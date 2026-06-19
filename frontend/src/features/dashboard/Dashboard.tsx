import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { useAuthStore } from '../../stores/authStore'
import { tasksApi, habitsApi, sessionsApi, journalApi, reportsApi } from '../../lib/api'
import type { Task, Habit } from '../../types'

// ── Progress Ring ──────────────────────────────────────────────────────────────
function ProgressRing({ percent, color, size = 64 }: { percent: number; color: string; size?: number }) {
  const r      = (size / 2) - 6
  const circ   = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ flexShrink: 0 }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="5" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth="5"
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        transform={`rotate(-90 ${size/2} ${size/2})`}
        style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
      <text x={size/2} y={size/2 + 5} textAnchor="middle" fontSize="12" fontWeight="700" fill={color}>
        {percent}%
      </text>
    </svg>
  )
}

// ── Drive badge ────────────────────────────────────────────────────────────────
const DRIVE_LABELS: Record<string, { label: string; icon: string; color: string }> = {
  OnFire:    { label: 'On Fire',    icon: 'ti-flame',    color: '#FF6B35' },
  DueSoon:   { label: 'Due Soon',   icon: 'ti-clock',    color: '#F59E0B' },
  LowLift:   { label: 'Low Lift',   icon: 'ti-leaf',     color: '#23BBB7' },
  OpenSpace: { label: 'Open Space', icon: 'ti-sparkles', color: '#744D83' },
}

// ── Real weekly focus bar chart ────────────────────────────────────────────────
function WeeklyFocusChart({ data, theme }: {
  data: { day: string; minutes: number }[]
  theme: any
}) {
  const max = Math.max(...data.map(d => d.minutes), 1)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 56 }}>
      {data.map((d, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1 }}>
          <div style={{
            width: '100%', borderRadius: '3px 3px 0 0',
            height: `${Math.max((d.minutes / max) * 44, d.minutes > 0 ? 6 : 2)}px`,
            backgroundColor: d.minutes > 0 ? theme.accent : theme.navBorder,
            minHeight: 2,
            transition: 'height 0.4s ease',
          }} />
          <span style={{ fontSize: 9, color: theme.textSecondary }}>{d.day}</span>
        </div>
      ))}
    </div>
  )
}

// ── Dashboard ─────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const navigate          = useNavigate()
  const { theme, isBold } = useTheme()
  const user              = useAuthStore(s => s.user)

  const [topTask, setTopTask]       = useState<Task | null>(null)
  const [habits, setHabits]         = useState<Habit[]>([])
  const [focusMin, setFocusMin]     = useState(0)
  const [weeklyData, setWeeklyData] = useState<{ day: string; minutes: number }[]>([])
  const [mood, setMood]             = useState<number | null>(null)
  const [aiNudge, setAiNudge]       = useState("Let's make today count. What's your first move?")
  const [loading, setLoading]       = useState(true)

  const today     = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  const firstName = user?.displayName?.split(' ')[0] || 'there'

  useEffect(() => {
    async function load() {
      try {
        const [tasksRes, habitsRes, focusRes, journalRes, reportRes] = await Promise.allSettled([
          tasksApi.getAll(),
          habitsApi.getAll(),
          sessionsApi.getTodayFocus(),
          journalApi.getToday(),
          reportsApi.getWeekly(),
        ])

        // Tasks
        if (tasksRes.status === 'fulfilled') {
          const tasks: Task[] = tasksRes.value.data
          const onFire = tasks.find(t => t.drive === 'OnFire' && t.status !== 'Done')
          setTopTask(onFire || tasks.find(t => t.status !== 'Done') || null)
          const nudge = tasks.find(t => t.aiNudge)?.aiNudge
          if (nudge) setAiNudge(nudge)
        }

        // Habits — show first 3
        if (habitsRes.status === 'fulfilled') {
          setHabits(habitsRes.value.data.slice(0, 3))
        }

        // Today's focus minutes — handle multiple response shapes
        if (focusRes.status === 'fulfilled') {
          const d = focusRes.value.data
          // Backend may return { minutes } or { totalMinutes } or a number
          const mins = typeof d === 'number'
            ? d
            : d?.minutes ?? d?.totalMinutes ?? d?.total ?? 0
          setFocusMin(mins)
        }

        // Weekly focus chart — from the weekly report
        if (reportRes.status === 'fulfilled' && reportRes.value.data) {
          const report = reportRes.value.data
          if (Array.isArray(report.dailyFocusData) && report.dailyFocusData.length > 0) {
            setWeeklyData(report.dailyFocusData as { day: string; minutes: number }[])
          }
        }

        // Fallback weekly data if report not ready — build empty week
        setWeeklyData(prev => {
          if (prev.length > 0) return prev
          const days = ['M','T','W','T','F','S','S']
          return days.map(day => ({ day, minutes: 0 }))
        })

        // Mood from today's journal
        if (journalRes.status === 'fulfilled' && journalRes.value.data) {
          setMood(journalRes.value.data.moodScore ?? null)
        }

      } catch { /* silent */ }
      finally { setLoading(false) }
    }
    load()
  }, [])

  const driveInfo   = topTask ? DRIVE_LABELS[topTask.drive] ?? DRIVE_LABELS.OnFire : DRIVE_LABELS.OnFire
  const taskPercent = topTask?.subtasks?.length
    ? Math.round((topTask.subtasks.filter(s => s.completed).length / topTask.subtasks.length) * 100)
    : 0

  const todayDate = new Date().toISOString().split('T')[0]
  const MOODS     = ['😞','😕','😐','🙂','😄']
  const MOOD_LABELS = ['Rough','Low','Okay','Good','Great']

  const cardStyle = {
    backgroundColor: theme.cardBg,
    borderRadius: 16,
    border: `1px solid ${theme.navBorder}`,
    padding: '18px 20px',
    boxShadow: '0 2px 12px rgba(116,77,131,0.07)',
  }

  return (
    <AppShell>
      {/* Mobile header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}
        className="mobile-header">
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif', margin: 0 }}>
            Welcome, {firstName} 👋
          </h1>
          <p style={{ fontSize: 12, color: theme.textSecondary, margin: '2px 0 0' }}>{today}</p>
        </div>
      </div>

      <style>{`
        .dash-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 768px) {
          .mobile-header { display: none !important; }
          .dash-greeting { display: block !important; }
          .dash-grid     { grid-template-columns: 1.5fr 1fr; }
          .dash-grid-3   { grid-template-columns: 1fr 1fr 1fr !important; }
        }
      `}</style>

      {/* Desktop greeting */}
      <div className="dash-greeting" style={{ display: 'none', marginBottom: 20 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif', margin: 0 }}>
          Welcome back, {firstName} 👋
        </h1>
        <p style={{ fontSize: 13, color: theme.textSecondary, margin: '3px 0 0' }}>{today}</p>
      </div>

      {/* Stat cards */}
      <div className="dash-grid dash-grid-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>

        {/* Today's Focus — real data */}
        <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
            Today's Focus
          </p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
            <span style={{ fontSize: 30, fontWeight: 800, color: theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
              {loading ? '—' : focusMin}
            </span>
            <span style={{ fontSize: 13, color: theme.textSecondary }}>min</span>
          </div>
          <p style={{ fontSize: 11, color: theme.accent, margin: 0, fontWeight: 600 }}>
            <i className="ti ti-trending-up" style={{ marginRight: 3 }} aria-hidden="true" />
            {focusMin > 0 ? 'Keep going' : 'Start a session'}
          </p>
        </div>

        {/* Mood Today — real data */}
        <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
            Mood Today
          </p>
          <div style={{ fontSize: 28 }}>
            {mood ? MOODS[mood - 1] : '—'}
          </div>
          <p style={{ fontSize: 11, color: theme.textSecondary, margin: 0 }}>
            {mood ? MOOD_LABELS[mood - 1] : 'Not logged'}
          </p>
        </div>

        {/* Weekly Focus — real chart */}
        <div style={{ ...cardStyle, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary, textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0 }}>
            Weekly Focus
          </p>
          {weeklyData.length > 0
            ? <WeeklyFocusChart data={weeklyData} theme={theme} />
            : <p style={{ fontSize: 11, color: theme.textSecondary, margin: '8px 0 0' }}>No sessions yet</p>
          }
        </div>
      </div>

      {/* Drive card + AI nudge */}
      <div className="dash-grid" style={{ display: 'grid', gap: 14, marginBottom: 14 }}>
        {/* Drive card */}
        <div style={{
          borderRadius: 16, padding: '20px',
          background: isBold
            ? 'linear-gradient(135deg, #23627C, #1B4E63)'
            : 'linear-gradient(135deg, #744D83, #5a3868)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, paddingRight: 16 }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 20,
                padding: '3px 10px', marginBottom: 10,
              }}>
                <i className={`ti ${driveInfo.icon}`} style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)' }} aria-hidden="true" />
                <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.9)' }}>{driveInfo.label}</span>
              </div>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: '#FFFFFF', margin: '0 0 6px', lineHeight: 1.3 }}>
                {topTask?.title || 'No tasks yet — add your first one'}
              </h2>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', margin: 0 }}>
                Est. {topTask?.estimatedMinutes || 30} min focus time today
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14 }}>
                <div style={{ flex: 1, height: 4, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{ width: `${taskPercent}%`, height: '100%', backgroundColor: '#23BBB7', borderRadius: 10, transition: 'width 0.6s ease' }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>{taskPercent}%</span>
              </div>
            </div>
            <ProgressRing percent={taskPercent} color="#23BBB7" size={72} />
          </div>

          {topTask && (
            <button
              onClick={() => navigate('/focus', { state: { taskTitle: topTask.title } })}
              style={{
                marginTop: 14, width: '100%', padding: '10px',
                borderRadius: 10, border: 'none',
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: 'white', fontSize: 13, fontWeight: 600,
                cursor: 'pointer', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              <i className="ti ti-player-play" style={{ fontSize: 14 }} aria-hidden="true" />
              Start this task
            </button>
          )}
        </div>

        {/* AI Nudge */}
        <div style={{
          ...cardStyle,
          backgroundColor: isBold ? 'rgba(35,187,183,0.12)' : '#EDE8F5',
          border: `1px solid ${isBold ? 'rgba(35,187,183,0.25)' : '#D4C8E0'}`,
          display: 'flex', alignItems: 'flex-start', gap: 12,
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            backgroundColor: theme.accent,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <i className="ti ti-sparkles" style={{ fontSize: 16, color: 'white' }} aria-hidden="true" />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: theme.accent, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              AI Nudge
            </p>
            <p style={{ fontSize: 13, color: theme.textPrimary, lineHeight: 1.55, margin: 0 }}>
              "{aiNudge}"
            </p>
          </div>
        </div>
      </div>

      {/* Habits + Mood */}
      <div className="dash-grid" style={{ display: 'grid', gap: 14, marginBottom: 14 }}>
        {/* Habits */}
        <div style={cardStyle}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, margin: 0 }}>Today's Habits</p>
            <button onClick={() => navigate('/habits')}
              style={{ fontSize: 12, fontWeight: 600, color: theme.accent, background: 'none', border: 'none', cursor: 'pointer' }}>
              View all <i className="ti ti-arrow-right" style={{ fontSize: 11 }} aria-hidden="true" />
            </button>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 16 }}>
              <div style={{ width: 20, height: 20, borderRadius: '50%', border: `2px solid ${theme.accent}`, borderTopColor: 'transparent', animation: 'spin 0.8s linear infinite' }} />
            </div>
          ) : habits.length === 0 ? (
            <p style={{ fontSize: 12, color: theme.textSecondary, textAlign: 'center', padding: '12px 0' }}>
              No habits yet
            </p>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {habits.map(habit => {
                const done = habit.completions?.some(c => c.date === todayDate)
                return (
                  <div key={habit.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      backgroundColor: done ? `${theme.accent}20` : 'transparent',
                      border: `2px solid ${done ? theme.accent : theme.navBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
                    }}>
                      {done
                        ? <i className="ti ti-check" style={{ fontSize: 18, color: theme.accent }} aria-hidden="true" />
                        : <span>{habit.emoji}</span>
                      }
                    </div>
                    <p style={{ fontSize: 10, fontWeight: 600, color: theme.textSecondary, textAlign: 'center', maxWidth: 60, margin: 0, lineHeight: 1.3 }}>
                      {habit.name}
                    </p>
                    <p style={{ fontSize: 10, color: theme.accent, margin: 0, fontWeight: 600 }}>
                      {habit.streak}d
                    </p>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Mood + Focus CTA */}
        <div style={cardStyle}>
          <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, margin: '0 0 14px' }}>
            How are you feeling?
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
            {MOODS.map((emoji, i) => (
              <button key={i} onClick={() => setMood(i + 1)}
                style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: `2px solid ${mood === i + 1 ? theme.accent : 'transparent'}`,
                  backgroundColor: mood === i + 1 ? `${theme.accent}15` : 'transparent',
                  fontSize: 22, cursor: 'pointer',
                  transform: mood === i + 1 ? 'scale(1.2)' : 'scale(1)',
                  transition: 'all 0.15s',
                  opacity: mood !== null && mood !== i + 1 ? 0.4 : 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                {emoji}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate('/focus')}
            style={{
              width: '100%', backgroundColor: theme.ctaBg, color: '#FFFFFF',
              border: 'none', borderRadius: 12, padding: '13px',
              fontSize: 14, fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              boxShadow: `0 4px 14px ${theme.accent}40`, fontFamily: 'inherit',
            }}>
            <i className="ti ti-player-play" style={{ fontSize: 16 }} aria-hidden="true" />
            Start Focus
          </button>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </AppShell>
  )
}