import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { tasksApi } from '../../lib/api'
import type { Task, Drive } from '../../types'

const DRIVES: { value: Drive; label: string; icon: string; color: string }[] = [
  { value: 'OnFire',    label: 'On Fire',    icon: 'ti-flame',    color: '#FF6B35' },
  { value: 'DueSoon',   label: 'Due Soon',   icon: 'ti-clock',    color: '#F59E0B' },
  { value: 'LowLift',   label: 'Low Lift',   icon: 'ti-leaf',     color: '#23BBB7' },
  { value: 'OpenSpace', label: 'Open Space', icon: 'ti-sparkles', color: '#744D83' },
]

// ─── Task card with progressive disclosure ────────────────────────────────────
function TaskCard({ task, theme, onBreakdown, onComplete, onSubtaskComplete, onStart }: {
  task: Task; theme: any
  onBreakdown:     (id: string) => Promise<void>
  onComplete:      (id: string) => void
  onSubtaskComplete: (subtaskId: string, taskId: string) => void
  onStart:         (task: Task) => void
}) {
  const navigate       = useNavigate()
  const [expanded, setExpanded]   = useState(false)
  const [breaking, setBreaking]   = useState(false)
  const [breakMsg, setBreakMsg]   = useState('')
  const drive = DRIVES.find(d => d.value === task.drive)!

  const hasSubtasks    = task.subtasks && task.subtasks.length > 0
  const doneSubtasks   = task.subtasks?.filter(s => s.completed).length || 0
  const totalSubtasks  = task.subtasks?.length || 0

  const handleBreakdown = async () => {
    setBreaking(true); setBreakMsg('')
    await onBreakdown(task.id)
    setBreaking(false)
    setBreakMsg("I've broken this into smaller steps for you.")
    setExpanded(true)
    setTimeout(() => setBreakMsg(''), 4000)
  }

  const cardBg     = theme.cardBg
  const borderColor = task.status === 'WorkingOnIt'
    ? drive.color
    : theme.navBorder

  return (
    <div style={{
      borderRadius: 14, marginBottom: 12, overflow: 'hidden',
      backgroundColor: cardBg,
      border: `1.5px solid ${borderColor}`,
      boxShadow: '0 2px 12px rgba(116,77,131,0.07)',
      transition: 'border-color 0.2s',
    }}>
      {/* Main row */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Drive badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
                backgroundColor: `${drive.color}18`, color: drive.color,
              }}>
                <i className={`ti ${drive.icon}`} style={{ fontSize: 11 }} aria-hidden="true" />
                {drive.label}
              </span>
              {task.estimatedMinutes && (
                <span style={{ fontSize: 11, color: theme.textSecondary, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <i className="ti ti-clock" style={{ fontSize: 11 }} aria-hidden="true" />
                  {task.estimatedMinutes} min
                </span>
              )}
            </div>

            {/* Title */}
            <p style={{
              fontSize: 14, fontWeight: 600, color: theme.textPrimary,
              margin: 0, lineHeight: 1.4,
              textDecoration: task.status === 'Done' ? 'line-through' : 'none',
              opacity: task.status === 'Done' ? 0.5 : 1,
            }}>
              {task.title}
            </p>

            {/* Subtask progress */}
            {hasSubtasks && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                <div style={{
                  flex: 1, height: 3, borderRadius: 10,
                  backgroundColor: theme.navBorder, overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%', borderRadius: 10,
                    backgroundColor: theme.accent,
                    width: `${totalSubtasks > 0 ? (doneSubtasks / totalSubtasks) * 100 : 0}%`,
                    transition: 'width 0.3s ease',
                  }} />
                </div>
                <span style={{ fontSize: 11, color: theme.textSecondary, whiteSpace: 'nowrap' }}>
                  {doneSubtasks}/{totalSubtasks} steps
                </span>
              </div>
            )}
          </div>

          {/* Expand toggle */}
          {hasSubtasks && (
            <button onClick={() => setExpanded(e => !e)}
              style={{
                width: 28, height: 28, borderRadius: '50%', border: 'none',
                backgroundColor: theme.bgSecondary || '#E3DBE6',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
              <i className={`ti ${expanded ? 'ti-chevron-up' : 'ti-chevron-down'}`}
                style={{ fontSize: 14, color: theme.textSecondary }}
                aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Action buttons */}
        {task.status !== 'Done' && (
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button
              onClick={() => onStart(task)}
              style={{
                flex: 1, padding: '9px 0', borderRadius: 10, border: 'none',
                backgroundColor: theme.accent, color: 'white',
                fontWeight: 700, fontSize: 13, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'all 0.15s',
              }}>
              <i className="ti ti-player-play" style={{ fontSize: 14 }} aria-hidden="true" />
              Start
            </button>

            <button
              onClick={handleBreakdown}
              disabled={breaking}
              style={{
                flex: 1, padding: '9px 0', borderRadius: 10,
                backgroundColor: 'transparent', color: theme.accent,
                border: `1.5px solid ${theme.accent}`,
                fontWeight: 700, fontSize: 13, cursor: breaking ? 'wait' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                transition: 'all 0.15s',
              }}>
              {breaking ? (
                <>
                  <i className="ti ti-loader-2 animate-spin" style={{ fontSize: 14 }} aria-hidden="true" />
                  Breaking...
                </>
              ) : (
                <>
                  <i className="ti ti-list-details" style={{ fontSize: 14 }} aria-hidden="true" />
                  Break down
                </>
              )}
            </button>

            <button onClick={() => onComplete(task.id)} title="Mark complete"
              style={{
                width: 40, padding: '9px 0', borderRadius: 10, border: 'none',
                backgroundColor: `${theme.accent}15`, color: theme.accent,
                fontWeight: 700, fontSize: 16, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
              <i className="ti ti-check" style={{ fontSize: 16 }} aria-hidden="true" />
            </button>
          </div>
        )}

        {/* Breakdown message */}
        {breakMsg && (
          <div style={{
            marginTop: 10, padding: '8px 12px', borderRadius: 8,
            backgroundColor: `${theme.accent}15`,
            border: `1px solid ${theme.accent}30`,
            display: 'flex', alignItems: 'center', gap: 8,
            animation: 'fadeIn 0.3s ease',
          }}>
            <i className="ti ti-sparkles" style={{ fontSize: 14, color: theme.accent }} aria-hidden="true" />
            <span style={{ fontSize: 12, color: theme.accent, fontWeight: 500 }}>{breakMsg}</span>
          </div>
        )}
      </div>

      {/* Subtasks — expanded */}
      {expanded && hasSubtasks && (
        <div style={{
          borderTop: `1px solid ${theme.navBorder}`,
          padding: '12px 16px',
          backgroundColor: theme.bgSecondary ? `${theme.bgSecondary}40` : '#F9F7FC',
        }}>
          {task.subtasks.map((subtask, idx) => (
            <div key={subtask.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '6px 0',
              borderBottom: idx < task.subtasks.length - 1
                ? `1px solid ${theme.navBorder}` : 'none',
            }}>
              <button
                onClick={() => !subtask.completed && onSubtaskComplete(subtask.id, task.id)}
                style={{
                  width: 20, height: 20, borderRadius: 6,
                  border: `2px solid ${subtask.completed ? theme.accent : theme.navBorder}`,
                  backgroundColor: subtask.completed ? theme.accent : 'transparent',
                  cursor: subtask.completed ? 'default' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, transition: 'all 0.15s',
                }}>
                {subtask.completed && (
                  <i className="ti ti-check" style={{ fontSize: 11, color: 'white' }} aria-hidden="true" />
                )}
              </button>
              <span style={{
                fontSize: 13, color: subtask.completed ? theme.textSecondary : theme.textPrimary,
                textDecoration: subtask.completed ? 'line-through' : 'none',
                flex: 1,
              }}>
                {subtask.title}
              </span>
              {subtask.estimatedMinutes && (
                <span style={{ fontSize: 11, color: theme.textSecondary }}>
                  {subtask.estimatedMinutes}m
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Add task input ───────────────────────────────────────────────────────────
function AddTaskInput({ theme, onAdd }: {
  theme: any
  onAdd: (input: string) => Promise<void>
}) {
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = async () => {
    if (!input.trim() || loading) return
    setLoading(true); setError('')
    try {
      await onAdd(input.trim())
      setInput('')
      inputRef.current?.focus()
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add task. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input ref={inputRef}
          style={{
            flex: 1, padding: '12px 16px', borderRadius: 12, fontSize: 14,
            backgroundColor: theme.cardBg,
            border: `1.5px solid ${error ? '#FCA5A5' : theme.navBorder}`,
            color: theme.textPrimary, outline: 'none', fontFamily: 'inherit',
            transition: 'border-color 0.2s',
          }}
          placeholder="Add a task... e.g. 'Finish report by Friday'"
          value={input}
          onChange={e => { setInput(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          onFocus={e => (e.target as HTMLInputElement).style.borderColor = theme.accent}
          onBlur={e => (e.target as HTMLInputElement).style.borderColor = error ? '#FCA5A5' : theme.navBorder}
        />
        <button onClick={handleAdd}
          disabled={!input.trim() || loading}
          style={{
            width: 46, height: 46, borderRadius: 12, border: 'none',
            backgroundColor: !input.trim() || loading ? theme.navBorder : theme.accent,
            cursor: !input.trim() || loading ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.15s', flexShrink: 0,
          }}>
          {loading
            ? <i className="ti ti-loader-2 animate-spin" style={{ fontSize: 18, color: 'white' }} aria-hidden="true" />
            : <i className="ti ti-plus" style={{ fontSize: 20, color: 'white' }} aria-hidden="true" />
          }
        </button>
      </div>
      {error && (
        <p style={{ fontSize: 12, color: '#EF4444', margin: '6px 0 0 4px' }}>
          <i className="ti ti-alert-circle" style={{ marginRight: 4, fontSize: 12 }} aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function TasksPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [tasks, setTasks]           = useState<Task[]>([])
  const [activeDrive, setActiveDrive] = useState<Drive>('OnFire')
  const [loading, setLoading]       = useState(true)
  const [fetchError, setFetchError] = useState('')

  useEffect(() => { loadTasks() }, [])

  async function loadTasks() {
    setLoading(true); setFetchError('')
    try {
      const { data } = await tasksApi.getAll()
      setTasks(data)
    } catch (err: any) {
      setFetchError(err.response?.data?.message || 'Failed to load tasks.')
    } finally {
      setLoading(false)
    }
  }

  async function handleAddTask(input: string) {
    const { data } = await tasksApi.create(input)
    setTasks(prev => [data, ...prev])
    setActiveDrive(data.drive)
  }

  async function handleBreakdown(id: string) {
    const { data } = await tasksApi.breakdown(id)
    setTasks(prev => prev.map(t => t.id === id ? data : t))
  }

  async function handleComplete(id: string) {
    const { data } = await tasksApi.complete(id)
    setTasks(prev => prev.map(t => t.id === id ? data : t))
  }

  async function handleSubtaskComplete(subtaskId: string, taskId: string) {
    try {
      await tasksApi.completeSubtask(subtaskId)
      setTasks(prev => prev.map(t => {
        if (t.id !== taskId) return t
        return {
          ...t,
          subtasks: t.subtasks.map(s =>
            s.id === subtaskId ? { ...s, completed: true } : s
          ),
        }
      }))
    } catch (err) {
      console.error('Subtask complete failed:', err)
    }
  }

  function handleStart(task: Task) {
    navigate('/focus', { state: { taskTitle: task.title, taskId: task.id } })
  }

  const activeTasks = tasks.filter(t => t.drive === activeDrive && t.status !== 'Done')
  const doneTasks   = tasks.filter(t => t.status === 'Done')
  const hasAnyTask  = tasks.length > 0

  return (
    <AppShell>
      <div style={{
        padding: '24px 20px',
        backgroundColor: theme.bgPrimary,
        minHeight: '100vh',
        /* Desktop: constrain and center */
      }}>
        <style>{`
          @media (min-width: 768px) {
            .tasks-inner { max-width: 720px; margin: 0 auto; }
          }
          @keyframes fadeIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }
          @keyframes spin { to { transform: rotate(360deg); } }
          .animate-spin { animation: spin 0.8s linear infinite; }
        `}</style>

        <div className="tasks-inner">
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
              AI Task Flow
            </h1>
          </div>

          {/* Drive tabs */}
          <div style={{
            display: 'flex', gap: 8, marginBottom: 20,
            overflowX: 'auto', paddingBottom: 4,
          }}
            className="no-scrollbar">
            {DRIVES.map(drive => (
              <button key={drive.value} onClick={() => setActiveDrive(drive.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 14px', borderRadius: 20, border: 'none',
                  backgroundColor: activeDrive === drive.value
                    ? `${drive.color}20` : theme.cardBg,
                  color: activeDrive === drive.value ? drive.color : theme.textSecondary,
                  fontWeight: 700, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap',
                  outline: activeDrive === drive.value
                    ? `2px solid ${drive.color}` : `1px solid ${theme.navBorder}`,
                  transition: 'all 0.15s',
                }}>
                <i className={`ti ${drive.icon}`} style={{ fontSize: 14 }} aria-hidden="true" />
                {drive.label}
              </button>
            ))}
          </div>

          {/* Add task input */}
          <AddTaskInput theme={theme} onAdd={handleAddTask} />

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
                border: `3px solid ${theme.accent}`, borderTopColor: 'transparent',
                animation: 'spin 0.8s linear infinite',
              }} />
            </div>
          ) : activeTasks.length === 0 ? (
            /* Empty state — no AI message unless tasks exist */
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <i className="ti ti-checks"
                style={{ fontSize: 48, color: theme.navBorder, display: 'block', marginBottom: 12 }}
                aria-hidden="true" />
              <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, margin: '0 0 6px' }}>
                No {DRIVES.find(d => d.value === activeDrive)?.label} tasks
              </p>
              <p style={{ fontSize: 13, color: theme.textSecondary, margin: 0 }}>
                Type a task above and press Enter — the AI will parse and place it here
              </p>
            </div>
          ) : (
            activeTasks.map(task => (
              <TaskCard
                key={task.id}
                task={task}
                theme={theme}
                onBreakdown={handleBreakdown}
                onComplete={handleComplete}
                onSubtaskComplete={handleSubtaskComplete}
                onStart={handleStart}
              />
            ))
          )}

          {/* Done count */}
          {hasAnyTask && doneTasks.length > 0 && (
            <p style={{ fontSize: 12, textAlign: 'center', color: theme.textSecondary, marginTop: 8 }}>
              <i className="ti ti-circle-check" style={{ marginRight: 4, color: theme.accent }} aria-hidden="true" />
              {doneTasks.length} task{doneTasks.length > 1 ? 's' : ''} completed today
            </p>
          )}
        </div>
      </div>
    </AppShell>
  )
}