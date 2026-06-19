import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { reportsApi } from '../../lib/api'
import type { WeeklyReport } from '../../types'

// ── Bar chart ─────────────────────────────────────────────────────────────────
function FocusBarChart({ data, theme }: {
  data: { day: string; minutes: number }[]
  theme: any
}) {
  const max = Math.max(...data.map(d => d.minutes), 1)

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 6, height: 100, padding: '0 4px' }}>
      {data.map((d, i) => {
        const pct = Math.max((d.minutes / max) * 100, d.minutes > 0 ? 8 : 2)
        return (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, flex: 1 }}>
            {d.minutes > 0 && (
              <span style={{ fontSize: 9, fontWeight: 600, color: theme.textSecondary }}>{d.minutes}m</span>
            )}
            <div style={{
              width: '100%', borderRadius: '4px 4px 0 0', minHeight: 4,
              height: `${pct}%`,
              backgroundColor: d.minutes > 0 ? theme.accent : 'rgba(107,57,145,0.10)',
              transition: 'height 0.5s ease',
            }} />
            <span style={{ fontSize: 10, fontWeight: 500, color: theme.textSecondary }}>{d.day}</span>
          </div>
        )
      })}
    </div>
  )
}

// ── Mood line chart ────────────────────────────────────────────────────────────
function MoodLineChart({ data, theme }: {
  data: { day: string; score: number }[]
  theme: any
}) {
  const w = 300, h = 80, pad = 10
  const validData = data.filter(d => d.score > 0)

  if (validData.length < 2) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80 }}>
        <p style={{ fontSize: 12, color: theme.textSecondary }}>Not enough data yet</p>
      </div>
    )
  }

  const xStep  = (w - pad * 2) / Math.max(data.length - 1, 1)
  const yScale = (score: number) => h - pad - ((score - 1) / 4) * (h - pad * 2)
  const points = data.map((d, i) => ({ x: pad + i * xStep, y: d.score > 0 ? yScale(d.score) : null }))

  let pathD = ''
  points.forEach((p, i) => {
    if (p.y === null) return
    if (pathD === '' || points[i - 1]?.y === null) {
      pathD += `M ${p.x} ${p.y}`
    } else {
      const prev = points[i - 1]!
      const cpx  = (prev.x + p.x) / 2
      pathD += ` C ${cpx} ${prev.y}, ${cpx} ${p.y}, ${p.x} ${p.y}`
    }
  })

  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" style={{ display: 'block' }}>
        {[1,2,3,4,5].map(score => (
          <line key={score} x1={pad} y1={yScale(score)} x2={w-pad} y2={yScale(score)}
            stroke="rgba(107,57,145,0.08)" strokeWidth="0.5" strokeDasharray="3,3" />
        ))}
        <path d={pathD} fill="none" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round"/>
        {points.map((p, i) => p.y !== null && (
          <circle key={i} cx={p.x} cy={p.y} r="4"
            fill={theme.accent} stroke="white" strokeWidth="2"/>
        ))}
      </svg>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 4px 0', marginTop: 4 }}>
        {data.map((d, i) => (
          <span key={i} style={{ fontSize: 10, color: theme.textSecondary }}>{d.day}</span>
        ))}
      </div>
    </div>
  )
}

// ── Stat card ──────────────────────────────────────────────────────────────────
function StatCard({ value, label, icon, color, theme, isBold }: {
  value: string | number; label: string; icon: string
  color: string; theme: any; isBold: boolean
}) {
  return (
    <div style={{
      flex: 1, minWidth: 0,
      borderRadius: 14, padding: '16px 12px',
      textAlign: 'center',
      backgroundColor: isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF',
      border: `1px solid ${isBold ? 'rgba(255,255,255,0.08)' : 'rgba(107,57,145,0.08)'}`,
      boxShadow: '0 2px 10px rgba(107,57,145,0.07)',
    }}>
      <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
      <p style={{
        fontSize: 24, fontWeight: 800, color, margin: '0 0 4px',
        fontFamily: '"DM Serif Display", serif', lineHeight: 1,
      }}>
        {value}
      </p>
      <p style={{ fontSize: 10, fontWeight: 600, color: theme.textSecondary, margin: 0, lineHeight: 1.3 }}>
        {label}
      </p>
    </div>
  )
}

// ── Week navigator ─────────────────────────────────────────────────────────────
function WeekNavigator({ weekStart, weekEnd, onPrev, onNext, theme, isBold }: {
  weekStart: string; weekEnd: string
  onPrev: () => void; onNext: () => void
  theme: any; isBold: boolean
}) {
  const fmt = (d: string) => new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  const bg  = isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF'
  const border = isBold ? 'rgba(255,255,255,0.08)' : 'rgba(107,57,145,0.08)'

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      borderRadius: 14, padding: '12px 16px', marginBottom: 20,
      backgroundColor: bg, border: `1px solid ${border}`,
      boxShadow: '0 2px 10px rgba(107,57,145,0.07)',
    }}>
      <button onClick={onPrev} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 14, fontWeight: 700, color: theme.textPrimary, margin: 0 }}>
          {fmt(weekStart)} – {fmt(weekEnd)}
        </p>
        <p style={{ fontSize: 11, color: theme.textSecondary, margin: '2px 0 0' }}>This Week</p>
      </div>
      <button onClick={onNext} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  )
}

// ── Card wrapper ───────────────────────────────────────────────────────────────
function Card({ children, theme, isBold, style = {} }: {
  children: React.ReactNode; theme: any; isBold: boolean; style?: React.CSSProperties
}) {
  return (
    <div style={{
      borderRadius: 16, padding: '18px 20px', marginBottom: 14,
      backgroundColor: isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF',
      border: `1px solid ${isBold ? 'rgba(255,255,255,0.08)' : 'rgba(107,57,145,0.08)'}`,
      boxShadow: '0 2px 10px rgba(107,57,145,0.07)',
      ...style,
    }}>
      {children}
    </div>
  )
}

function CardTitle({ children, theme }: { children: React.ReactNode; theme: any }) {
  return (
    <p style={{ fontSize: 13, fontWeight: 700, color: theme.textPrimary, margin: '0 0 14px' }}>
      {children}
    </p>
  )
}

// ── Main page ──────────────────────────────────────────────────────────────────
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
      const weekStart    = getWeekStart(weekOffset)
      const { data }     = await reportsApi.getWeekly(weekStart)
      // Normalise — backend may return the report directly or nested
      const report = data?.weekStart ? data : data?.data ?? data
      setReport(report)
    } catch { /* show empty state */ }
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

  const textPrimary = isBold ? '#FFFFFF' : theme.textPrimary
  const textSub     = isBold ? 'rgba(255,255,255,0.55)' : theme.textSecondary

  return (
    <AppShell>
      <div style={{ backgroundColor: theme.bgPrimary, minHeight: '100%', padding: '28px 24px 48px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                background: isBold ? 'rgba(255,255,255,0.06)' : '#FFFFFF',
                border: `1px solid ${isBold ? 'rgba(255,255,255,0.08)' : 'rgba(107,57,145,0.08)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h1 style={{
              fontSize: 20, fontWeight: 700, margin: 0,
              color: textPrimary, fontFamily: '"DM Serif Display", serif',
            }}>
              Weekly Report
            </h1>
          </div>

          {/* Week navigator */}
          <WeekNavigator
            weekStart={weekStartStr} weekEnd={weekEndStr}
            onPrev={() => setWeekOffset(o => o - 1)}
            onNext={() => setWeekOffset(o => Math.min(o + 1, 0))}
            theme={theme} isBold={isBold}
          />

          {loading ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 0', gap: 14 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                border: `3px solid ${theme.accent}`,
                borderTopColor: 'transparent',
                animation: 'report-spin 0.8s linear infinite',
              }} />
              <p style={{ fontSize: 13, color: textSub }}>Generating your report...</p>
            </div>
          ) : report ? (
            <>
              {/* Stat cards — fixed flex row, no hr dividers */}
              <div style={{ display: 'flex', gap: 10, marginBottom: 14 }}>
                <StatCard value={report.totalFocusMin} label="Focus Minutes"
                  icon="🎯" color={theme.accent} theme={theme} isBold={isBold} />
                <StatCard value={report.tasksDone} label="Tasks Done"
                  icon="✅" color="#744D83" theme={theme} isBold={isBold} />
                <StatCard
                  value={report.avgMood > 0 ? report.avgMood.toFixed(1) : '—'}
                  label="Avg Mood" icon="😊" color="#F59E0B" theme={theme} isBold={isBold} />
              </div>

              {/* Daily focus */}
              <Card theme={theme} isBold={isBold}>
                <CardTitle theme={theme}>Daily Focus Time</CardTitle>
                <FocusBarChart data={report.dailyFocusData as any} theme={theme} />
              </Card>

              {/* Mood trend */}
              <Card theme={theme} isBold={isBold}>
                <CardTitle theme={theme}>Mood Trend</CardTitle>
                <MoodLineChart data={report.moodTrendData as any} theme={theme} />
              </Card>

              {/* AI Summary */}
              {report.aiSummary && (
                <Card theme={theme} isBold={isBold}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <div style={{
                      width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                      backgroundColor: theme.accent,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, color: theme.accent, margin: '0 0 5px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                        AI Summary
                      </p>
                      <p style={{ fontSize: 13, lineHeight: 1.65, color: textPrimary, margin: 0 }}>
                        {report.aiSummary}
                      </p>
                    </div>
                  </div>
                </Card>
              )}

              {/* Wins & Tips — side by side on desktop, stacked on mobile */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginBottom: 14 }}>
                <div style={{
                  borderRadius: 14, padding: '16px',
                  backgroundColor: isBold ? 'rgba(255,255,255,0.06)' : '#FFFBEB',
                  border: `1px solid ${isBold ? 'rgba(255,255,255,0.08)' : 'rgba(245,158,11,0.15)'}`,
                }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#F59E0B', margin: '0 0 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    🏆 Wins
                  </p>
                  {report.wins?.length > 0
                    ? report.wins.map((win, i) => (
                        <p key={i} style={{ fontSize: 12, color: textPrimary, margin: '0 0 6px', lineHeight: 1.5 }}>{win}</p>
                      ))
                    : <p style={{ fontSize: 12, color: textSub }}>Keep going!</p>
                  }
                </div>

                <div style={{
                  borderRadius: 14, padding: '16px',
                  backgroundColor: isBold ? 'rgba(255,255,255,0.06)' : '#F0FDFB',
                  border: `1px solid ${isBold ? 'rgba(255,255,255,0.08)' : 'rgba(67,232,216,0.18)'}`,
                }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: theme.accent, margin: '0 0 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    💡 Tips
                  </p>
                  {report.tips?.length > 0
                    ? report.tips.map((tip, i) => (
                        <p key={i} style={{ fontSize: 12, color: textPrimary, margin: '0 0 6px', lineHeight: 1.5 }}>{tip}</p>
                      ))
                    : <p style={{ fontSize: 12, color: textSub }}>More data needed</p>
                  }
                </div>
              </div>

              {/* CTA */}
              <button
                className="btn-primary"
                onClick={() => {
                  setApplying(true)
                  // Navigate to tasks — that's where the user acts on suggestions
                  setTimeout(() => { navigate('/tasks') }, 800)
                }}
                disabled={applying}
              >
                {applying
                  ? <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 14, height: 14, borderRadius: '50%', border: '2px solid white', borderTopColor: 'transparent', display: 'inline-block', animation: 'report-spin 0.8s linear infinite' }} />
                      Opening tasks…
                    </span>
                  : 'Apply suggestions to next week'
                }
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: 40, marginBottom: 12 }}>📊</p>
              <p style={{ fontSize: 16, fontWeight: 700, color: textPrimary, margin: '0 0 6px' }}>No data yet</p>
              <p style={{ fontSize: 13, color: textSub }}>
                Complete tasks and log your mood to see your weekly report
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`@keyframes report-spin { to { transform: rotate(360deg); } }`}</style>
    </AppShell>
  )
}