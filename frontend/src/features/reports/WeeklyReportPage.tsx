import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { reportsApi } from '../../lib/api'
import type { WeeklyReport } from '../../types'

// ─── Bar chart ────────────────────────────────────────────────────────────────
function FocusBarChart({ data, theme }: {
  data: { day: string; minutes: number }[]; theme: any
}) {
  const max = Math.max(...data.map(d => d.minutes), 1)

  return (
    <div className="flex items-end justify-between gap-1.5 h-28 px-1">
      {data.map((d, i) => {
        const height = Math.max((d.minutes / max) * 100, d.minutes > 0 ? 8 : 2)
        return (
          <div key={i} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="w-full rounded-t-lg transition-all duration-500 relative group"
              style={{
                height: `${height}%`,
                backgroundColor: d.minutes > 0 ? theme.accent : theme.navBorder,
                minHeight: 4,
              }}>
              {d.minutes > 0 && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-semibold whitespace-nowrap"
                  style={{ color: theme.textSecondary }}>
                  {d.minutes}m
                </div>
              )}
            </div>
            <span className="text-[10px] font-medium" style={{ color: theme.textSecondary }}>
              {d.day}
            </span>
          </div>
        )
      })}
    </div>
  )
}

// ─── Mood line chart ──────────────────────────────────────────────────────────
function MoodLineChart({ data, theme }: {
  data: { day: string; score: number }[]; theme: any
}) {
  const width  = 300
  const height = 80
  const padding = 10

  const validData = data.filter(d => d.score > 0)
  if (validData.length < 2) {
    return (
      <div className="flex items-center justify-center h-20">
        <p className="text-xs" style={{ color: theme.textSecondary }}>Not enough data yet</p>
      </div>
    )
  }

  const xStep  = (width - padding * 2) / (data.length - 1)
  const yScale = (score: number) => height - padding - ((score - 1) / 4) * (height - padding * 2)

  const points = data.map((d, i) => ({
    x: padding + i * xStep,
    y: d.score > 0 ? yScale(d.score) : null,
  }))

  // Build path — skip null points
  let pathD = ''
  points.forEach((p, i) => {
    if (p.y === null) return
    if (pathD === '' || points[i - 1]?.y === null) {
      pathD += `M ${p.x} ${p.y}`
    } else {
      // Smooth curve
      const prev = points[i - 1]!
      const cpx  = (prev.x + p.x) / 2
      pathD += ` C ${cpx} ${prev.y}, ${cpx} ${p.y}, ${p.x} ${p.y}`
    }
  })

  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
        {/* Grid lines */}
        {[1, 2, 3, 4, 5].map(score => (
          <line key={score}
            x1={padding} y1={yScale(score)}
            x2={width - padding} y2={yScale(score)}
            stroke={theme.navBorder} strokeWidth="0.5" strokeDasharray="3,3" />
        ))}

        {/* Line */}
        <path d={pathD} fill="none" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" />

        {/* Dots */}
        {points.map((p, i) => p.y !== null && (
          <circle key={i} cx={p.x} cy={p.y} r="4"
            fill={theme.accent} stroke={theme.cardBg} strokeWidth="2" />
        ))}
      </svg>

      {/* Day labels */}
      <div className="flex justify-between px-1 mt-1">
        {data.map((d, i) => (
          <span key={i} className="text-[10px]" style={{ color: theme.textSecondary }}>{d.day}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Stat card ────────────────────────────────────────────────────────────────
function StatCard({ value, label, icon, color, theme }: {
  value: string | number; label: string; icon: string; color: string; theme: any
}) {
  return (
    <div className="flex-1 rounded-2xl p-4 flex flex-col items-center text-center"
      style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
      <span className="text-xl mb-1">{icon}</span>
      <p className="text-2xl font-bold" style={{ color, fontFamily: '"DM Serif Display", serif' }}>
        {value}
      </p>
      <p className="text-[10px] font-medium mt-0.5" style={{ color: theme.textSecondary }}>{label}</p>
    </div>
  )
}

// ─── Week navigator ───────────────────────────────────────────────────────────
function WeekNavigator({ weekStart, weekEnd, onPrev, onNext, theme }: {
  weekStart: string; weekEnd: string
  onPrev: () => void; onNext: () => void
  theme: any
}) {
  const fmt = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  return (
    <div className="flex items-center justify-between rounded-2xl px-4 py-3 mb-5"
      style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
      <button onClick={onPrev} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div className="text-center">
        <p className="text-sm font-bold" style={{ color: theme.textPrimary }}>
          {fmt(weekStart)} – {fmt(weekEnd)}
        </p>
        <p className="text-xs" style={{ color: theme.textSecondary }}>This Week</p>
      </div>
      <button onClick={onNext} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function WeeklyReportPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [report, setReport]         = useState<WeeklyReport | null>(null)
  const [loading, setLoading]       = useState(true)
  const [weekOffset, setWeekOffset] = useState(0)
  const [applying, setApplying]     = useState(false)

  useEffect(() => { loadReport() }, [weekOffset])

  async function loadReport() {
    setLoading(true)
    try {
      const weekStart = getWeekStart(weekOffset)
      const { data }  = await reportsApi.getWeekly(weekStart)
      setReport(data)
    } catch {}
    finally { setLoading(false) }
  }

  function getWeekStart(offset: number): string {
    const d = new Date()
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7) + offset * 7)
    d.setHours(0, 0, 0, 0)
    return d.toISOString()
  }

  const weekStartStr = report?.weekStart || getWeekStart(weekOffset)
  const weekEndStr   = report?.weekEnd   || getWeekStart(weekOffset + 1)

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
            Weekly Report
          </h1>
        </div>

        {/* Week navigator */}
        <WeekNavigator
          weekStart={weekStartStr} weekEnd={weekEndStr}
          onPrev={() => setWeekOffset(o => o - 1)}
          onNext={() => setWeekOffset(o => Math.min(o + 1, 0))}
          theme={theme}
        />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: theme.accent }} />
            <p className="text-sm" style={{ color: theme.textSecondary }}>Generating your report...</p>
          </div>
        ) : report ? (
          <>
            {/* Stats row */}
            <div className="flex gap-3 mb-5">
              <StatCard value={report.totalFocusMin} label="Focus Minutes"
                icon="🎯" color={theme.accent} theme={theme} />
              <StatCard value={report.tasksDone} label="Tasks Done"
                icon="✅" color="#744D83" theme={theme} />
              <StatCard value={report.avgMood > 0 ? report.avgMood.toFixed(1) : '—'} label="Avg Mood"
                icon="😊" color="#F59E0B" theme={theme} />
            </div>

            {/* Focus bar chart */}
            <div className="rounded-2xl p-4 mb-4"
              style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
              <p className="text-sm font-semibold mb-4" style={{ color: theme.textPrimary }}>
                Daily Focus Time
              </p>
              <FocusBarChart data={report.dailyFocusData as any} theme={theme} />
            </div>

            {/* Mood trend */}
            <div className="rounded-2xl p-4 mb-4"
              style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
              <p className="text-sm font-semibold mb-4" style={{ color: theme.textPrimary }}>
                Mood Trend
              </p>
              <MoodLineChart data={report.moodTrendData as any} theme={theme} />
            </div>

            {/* AI Summary */}
            {report.aiSummary && (
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
                  <p className="text-xs font-semibold mb-1" style={{ color: theme.accent }}>AI Summary</p>
                  <p className="text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
                    {report.aiSummary}
                  </p>
                </div>
              </div>
            )}

            {/* Wins & Tips */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {/* Wins */}
              <div className="rounded-2xl p-4"
                style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: '#F59E0B' }}>🏆 Wins</p>
                {report.wins?.length > 0 ? report.wins.map((win, i) => (
                  <p key={i} className="text-xs mb-2 leading-snug" style={{ color: theme.textPrimary }}>
                    {win}
                  </p>
                )) : (
                  <p className="text-xs" style={{ color: theme.textSecondary }}>Keep going!</p>
                )}
              </div>

              {/* Tips */}
              <div className="rounded-2xl p-4"
                style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
                <p className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: theme.accent }}>💡 Tips</p>
                {report.tips?.length > 0 ? report.tips.map((tip, i) => (
                  <p key={i} className="text-xs mb-2 leading-snug" style={{ color: theme.textPrimary }}>
                    {tip}
                  </p>
                )) : (
                  <p className="text-xs" style={{ color: theme.textSecondary }}>More data needed</p>
                )}
              </div>
            </div>

            {/* Apply suggestions CTA */}
            <button
              className="btn-primary mb-6"
              onClick={() => { setApplying(true); setTimeout(() => { setApplying(false); navigate('/tasks') }, 1500) }}
              style={{ backgroundColor: theme.ctaBg }}
              disabled={applying}>
              {applying ? 'Applying...' : 'Apply suggestions to next week'}
            </button>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">📊</p>
            <p className="font-semibold mb-1" style={{ color: theme.textPrimary }}>No data yet</p>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              Complete tasks and log your mood to see your weekly report
            </p>
          </div>
        )}
      </div>
    </AppShell>
  )
}