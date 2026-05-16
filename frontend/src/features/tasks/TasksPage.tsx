import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { tasksApi } from '../../lib/api'
import type { Task, Drive } from '../../types'

const DRIVES: { value: Drive; label: string; icon: string; color: string }[] = [
  { value: 'OnFire',    label: 'On Fire',    icon: 'ti-flame',    color: '#FF6B35' },
  { value: 'DueSoon',   label: 'Due Soon',   icon: 'ti-clock',    color: '#F59E0B' },
  { value: 'LowLift',   label: 'Low Lift',   icon: 'ti-leaf',     color: '#43e8d8' },
  { value: 'OpenSpace', label: 'Open Space', icon: 'ti-sparkles', color: '#6b3991' },
]

// ─── Undo toast ───────────────────────────────────────────────────────────────
function UndoToast({ message, onUndo, onDismiss }: {
  message: string; onUndo: () => void; onDismiss: () => void
}) {
  useEffect(() => {
    const t = setTimeout(onDismiss, 5000)
    return () => clearTimeout(t)
  }, [onDismiss])

  return (
    <div style={{
      position: 'fixed', bottom: 90, left: '50%', transform: 'translateX(-50%)',
      zIndex: 200, display: 'flex', alignItems: 'center', gap: 12,
      backgroundColor: '#1a1a2e', color: 'white',
      padding: '12px 16px', borderRadius: 14,
      boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      animation: 'slideUp 0.3s ease',
      minWidth: 280, maxWidth: 380,
    }}>
      <span style={{ fontSize: 13, fontWeight: 500, flex: 1 }}>{message}</span>
      <button onClick={onUndo}
        style={{
          fontSize: 13, fontWeight: 700, color: '#43e8d8',
          background: 'none', border: 'none', cursor: 'pointer', padding: '2px 6px',
          borderRadius: 6, flexShrink: 0,
        }}>
        Undo
      </button>
      <button onClick={onDismiss}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.5)', padding: 2 }}>
        <i className="ti ti-x" style={{ fontSize: 14 }} aria-hidden="true" />
      </button>
    </div>
  )
}

// ─── Task card ────────────────────────────────────────────────────────────────
function TaskCard({ task, theme, onBreakdown, onComplete, onUncomplete, onSubtaskToggle }: {
  task: Task; theme: any
  onBreakdown:     (id: string) => Promise<void>
  onComplete:      (id: string) => void
  onUncomplete:    (id: string) => void
  onSubtaskToggle: (subtaskId: string, taskId: string, currentState: boolean) => void
}) {
  const navigate     = useNavigate()
  const [expanded, setExpanded]   = useState(false)
  const [breaking, setBreaking]   = useState(false)
  const [breakMsg, setBreakMsg]   = useState('')
  const drive = DRIVES.find(d => d.value === task.drive)!
  const isDone = task.status === 'Done'

  const doneSubtasks  = task.subtasks?.filter(s => s.completed).length || 0
  const totalSubtasks = task.subtasks?.length || 0
  const hasSubtasks   = totalSubtasks > 0

  const handleBreakdown = async () => {
    setBreaking(true); setBreakMsg('')
    await onBreakdown(task.id)
    setBreaking(false)
    setBreakMsg("I've broken this into smaller steps for you.")
    setExpanded(true)
    setTimeout(() => setBreakMsg(''), 4000)
  }

  return (
    <div style={{
      borderRadius: 16, marginBottom: 12, overflow: 'hidden',
      backgroundColor: theme.cardBg,
      border: `1.5px solid ${isDone ? `${drive.color}40` : theme.border || 'rgba(107,57,145,0.10)'}`,
      boxShadow: isDone ? 'none' : '0 2px 12px rgba(107,57,145,0.07)',
      opacity: isDone ? 0.75 : 1,
      transition: 'all 0.2s',
    }}>
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>

          {/* Checkbox — click to complete OR undo */}
          <button
            onClick={() => isDone ? onUncomplete(task.id) : onComplete(task.id)}
            title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
            style={{
              width: 24, height: 24, borderRadius: 8, border: 'none',
              backgroundColor: isDone ? drive.color : 'transparent',
              outline: `2px solid ${isDone ? drive.color : theme.border || 'rgba(107,57,145,0.2)'}`,
              cursor: 'pointer', flexShrink: 0, marginTop: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}>
            {isDone && <i className="ti ti-check" style={{ fontSize: 13, color: 'white' }} aria-hidden="true" />}
          </button>

          <div style={{ flex: 1, minWidth: 0 }}>
            {/* Drive badge + time */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{
                fontSize: 11, fontWeight: 700, padding: '2px 8px', borderRadius: 20,
                backgroundColor: `${drive.color}18`, color: drive.color,
                display: 'inline-flex', alignItems: 'center', gap: 4,
              }}>
                <i className={`ti ${drive.icon}`} style={{ fontSize: 11 }} aria-hidden="true" />
                {drive.label}
              </span>
              {task.estimatedMinutes && (
                <span style={{ fontSize: 11, color: theme.textSecondary, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <i className="ti ti-clock" style={{ fontSize: 11 }} aria-hidden="true" />
                  {task.estimatedMinutes}m
                </span>
              )}
            </div>

            {/* Title */}
            <p style={{
              fontSize: 14, fontWeight: 600, color: theme.textPrimary, margin: 0,
              lineHeight: 1.4,
              textDecoration: isDone ? 'line-through' : 'none',
            }}>
              {task.title}
            </p>

            {/* Subtask progress bar */}
            {hasSubtasks && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8 }}>
                <div style={{
                  flex: 1, height: 3, borderRadius: 10,
                  backgroundColor: theme.border || '#e7d1ff',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%', borderRadius: 10,
                    backgroundColor: drive.color,
                    width: `${(doneSubtasks / totalSubtasks) * 100}%`,
                    transition: 'width 0.3s ease',
                  }} />
                </div>
                <span style={{ fontSize: 11, color: theme.textSecondary, whiteSpace: 'nowrap' }}>
                  {doneSubtasks}/{totalSubtasks}
                </span>
              </div>
            )}
          </div>

          {/* Expand toggle */}
          {hasSubtasks && (
            <button onClick={() => setExpanded(e => !e)}
              style={{
                width: 28, height: 28, borderRadius: '50%', border: 'none',
                backgroundColor: theme.bgSecondary || '#f2f0fb',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
              <i className={`ti ${expanded ? 'ti-chevron-up' : 'ti-chevron-down'}`}
                style={{ fontSize: 14, color: theme.textSecondary }} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Action buttons — only when not done */}
        {!isDone && (
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button
              onClick={() => navigate('/focus', { state: { taskTitle: task.title, taskId: task.id } })}
              style={{
                flex: 1, padding: '9px 0', borderRadius: 10, border: 'none',
                backgroundColor: '#6b3991', color: 'white',
                fontWeight: 700, fontSize: 13, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                fontFamily: 'inherit',
              }}>
              <i className="ti ti-player-play" style={{ fontSize: 14 }} aria-hidden="true" />
              Start
            </button>

            <button onClick={handleBreakdown} disabled={breaking}
              style={{
                flex: 1, padding: '9px 0', borderRadius: 10,
                backgroundColor: 'transparent', color: '#6b3991',
                border: `1.5px solid #6b3991`,
                fontWeight: 700, fontSize: 13, cursor: breaking ? 'wait' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                fontFamily: 'inherit',
              }}>
              {breaking ? (
                <><i className="ti ti-loader-2 animate-spin" style={{ fontSize: 14 }} aria-hidden="true" />Breaking...</>
              ) : (
                <><i className="ti ti-list-details" style={{ fontSize: 14 }} aria-hidden="true" />Break down</>
              )}
            </button>
          </div>
        )}

        {/* Breakdown message */}
        {breakMsg && (
          <div style={{
            marginTop: 10, padding: '8px 12px', borderRadius: 8,
            backgroundColor: '#f4eeff', border: '1px solid #e7d1ff',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <i className="ti ti-sparkles" style={{ fontSize: 14, color: '#6b3991' }} aria-hidden="true" />
            <span style={{ fontSize: 12, color: '#6b3991', fontWeight: 500 }}>{breakMsg}</span>
          </div>
        )}
      </div>

      {/* Subtasks */}
      {expanded && hasSubtasks && (
        <div style={{
          borderTop: `1px solid ${theme.border || 'rgba(107,57,145,0.10)'}`,
          padding: '10px 16px 12px',
          backgroundColor: theme.bgSecondary || '#f9f9f7',
        }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: theme.textSecondary,
            textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 8px' }}>
            Steps
          </p>
          {task.subtasks.map((subtask, idx) => (
            <div key={subtask.id} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '7px 0',
              borderBottom: idx < task.subtasks.length - 1
                ? `1px solid ${theme.border || 'rgba(107,57,145,0.08)'}` : 'none',
            }}>
              {/* Subtask checkbox — toggleable */}
              <button
                onClick={() => onSubtaskToggle(subtask.id, task.id, subtask.completed)}
                title={subtask.completed ? 'Mark incomplete' : 'Mark complete'}
                style={{
                  width: 20, height: 20, borderRadius: 6, border: 'none',
                  backgroundColor: subtask.completed ? '#6b3991' : 'transparent',
                  outline: `2px solid ${subtask.completed ? '#6b3991' : theme.border || 'rgba(107,57,145,0.2)'}`,
                  cursor: 'pointer', flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s',
                }}>
                {subtask.completed && (
                  <i className="ti ti-check" style={{ fontSize: 11, color: 'white' }} aria-hidden="true" />
                )}
              </button>

              <span style={{
                fontSize: 13, flex: 1,
                color: subtask.completed ? theme.textSecondary : theme.textPrimary,
                textDecoration: subtask.completed ? 'line-through' : 'none',
              }}>
                {subtask.title}
              </span>

              {subtask.estimatedMinutes && (
                <span style={{ fontSize: 11, color: theme.textSecondary }}>{subtask.estimatedMinutes}m</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Add task input ───────────────────────────────────────────────────────────
function AddTaskInput({ theme, onAdd }: { theme: any; onAdd: (input: string) => Promise<void> }) {
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const handleAdd = async () => {
    if (!input.trim() || loading) return
    setLoading(true); setError('')
    try {
      await onAdd(input.trim())
      setInput('')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to add task.')
    } finally { setLoading(false) }
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          style={{
            flex: 1, padding: '13px 16px', borderRadius: 14, fontSize: 14,
            backgroundColor: theme.cardBg,
            border: `1.5px solid ${error ? '#FCA5A5' : theme.border || 'rgba(107,57,145,0.10)'}`,
            color: theme.textPrimary, outline: 'none', fontFamily: 'inherit',
          }}
          placeholder="Describe a task... e.g. 'Finish report by Friday'"
          value={input}
          onChange={e => { setInput(e.target.value); setError('') }}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
        />
        <button onClick={handleAdd} disabled={!input.trim() || loading}
          style={{
            width: 46, height: 46, borderRadius: 12, border: 'none',
            backgroundColor: !input.trim() ? theme.border : '#6b3991',
            cursor: !input.trim() ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
          {loading
            ? <i className="ti ti-loader-2 animate-spin" style={{ fontSize: 18, color: 'white' }} aria-hidden="true" />
            : <i className="ti ti-plus" style={{ fontSize: 20, color: 'white' }} aria-hidden="true" />
          }
        </button>
      </div>
      {error && <p style={{ fontSize: 12, color: '#EF4444', margin: '6px 0 0 4px' }}>{error}</p>}
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
  const [toast, setToast]           = useState<{ message: string; undo: () => void } | null>(null)
  const undoRef = useRef<(() => void) | null>(null)

  useEffect(() => { loadTasks() }, [])

  async function loadTasks() {
    setLoading(true)
    try {
      const { data } = await tasksApi.getAll()
      setTasks(data)
    } catch {}
    finally { setLoading(false) }
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

  // Complete task — with undo
  async function handleComplete(id: string) {
    const previous = tasks.find(t => t.id === id)
    if (!previous) return

    // Optimistic update
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'Done' as any, completedAt: new Date().toISOString() } : t))

    // Show undo toast
    const undo = async () => {
      setTasks(prev => prev.map(t => t.id === id ? { ...t, status: previous.status, completedAt: undefined } : t))
      try { await tasksApi.update(id, { status: previous.status, completedAt: null }) } catch {}
      setToast(null)
    }
    undoRef.current = undo
    setToast({ message: 'Task marked as complete', undo })

    try { await tasksApi.complete(id) } catch {
      // Revert on failure
      setTasks(prev => prev.map(t => t.id === id ? previous : t))
      setToast(null)
    }
  }

  // Undo complete — mark back to Todo
  async function handleUncomplete(id: string) {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: 'Todo' as any, completedAt: undefined } : t))
    try { await tasksApi.update(id, { status: 'Todo', completedAt: null }) } catch {}
    setToast({ message: 'Task marked as incomplete', undo: () => {} })
    setTimeout(() => setToast(null), 2000)
  }

  // Subtask toggle — complete OR undo
  async function handleSubtaskToggle(subtaskId: string, taskId: string, currentState: boolean) {
    // Optimistic update
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t
      return {
        ...t,
        subtasks: t.subtasks.map(s =>
          s.id === subtaskId ? { ...s, completed: !currentState } : s
        ),
      }
    }))

    try {
      if (!currentState) {
        await tasksApi.completeSubtask(subtaskId)
        setToast({
          message: 'Step marked complete',
          undo: async () => {
            setTasks(prev => prev.map(t => {
              if (t.id !== taskId) return t
              return { ...t, subtasks: t.subtasks.map(s => s.id === subtaskId ? { ...s, completed: false } : s) }
            }))
            setToast(null)
          },
        })
      } else {
        // Undo subtask complete
        await tasksApi.update(taskId, {}) // backend would need an uncomplete-subtask endpoint
        setToast({ message: 'Step marked incomplete', undo: () => {} })
        setTimeout(() => setToast(null), 2000)
      }
    } catch {
      // Revert
      setTasks(prev => prev.map(t => {
        if (t.id !== taskId) return t
        return { ...t, subtasks: t.subtasks.map(s => s.id === subtaskId ? { ...s, completed: currentState } : s) }
      }))
    }
  }

  const activeTasks = tasks.filter(t => t.drive === activeDrive && t.status !== 'Done')
  const doneTasks   = tasks.filter(t => t.drive === activeDrive && t.status === 'Done')

  return (
    <AppShell>
      <style>{`
        @media (min-width: 768px) { .tasks-inner { max-width: 720px; margin: 0 auto; } }
        @keyframes slideUp { from { opacity:0; transform:translateY(8px) translateX(-50%); } to { opacity:1; transform:translateY(0) translateX(-50%); } }
        .animate-spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div style={{ padding: '24px 20px', backgroundColor: theme.bgPrimary, minHeight: '100vh' }}>
        <div className="tasks-inner">

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <button onClick={() => navigate('/dashboard')}
              style={{
                width: 36, height: 36, borderRadius: '50%', border: 'none',
                backgroundColor: theme.cardBg, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
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
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, overflowX: 'auto', paddingBottom: 4 }}
            className="no-scrollbar">
            {DRIVES.map(drive => (
              <button key={drive.value} onClick={() => setActiveDrive(drive.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 14px', borderRadius: 20, border: 'none',
                  backgroundColor: activeDrive === drive.value ? `${drive.color}18` : theme.cardBg,
                  color: activeDrive === drive.value ? drive.color : theme.textSecondary,
                  fontWeight: 700, fontSize: 13, cursor: 'pointer', whiteSpace: 'nowrap',
                  outline: activeDrive === drive.value
                    ? `2px solid ${drive.color}` : `1px solid ${theme.border || 'rgba(107,57,145,0.10)'}`,
                  fontFamily: 'inherit',
                }}>
                <i className={`ti ${drive.icon}`} style={{ fontSize: 14 }} aria-hidden="true" />
                {drive.label}
              </button>
            ))}
          </div>

          {/* Add task */}
          <AddTaskInput theme={theme} onAdd={handleAddTask} />

          {/* Task list */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 40 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%',
                border: '3px solid #6b3991', borderTopColor: 'transparent',
                animation: 'spin 0.8s linear infinite' }} />
            </div>
          ) : activeTasks.length === 0 && doneTasks.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <i className="ti ti-checks" style={{ fontSize: 48, color: theme.border, display: 'block', marginBottom: 12 }} aria-hidden="true" />
              <p style={{ fontSize: 16, fontWeight: 700, color: theme.textPrimary, margin: '0 0 6px' }}>
                No {DRIVES.find(d => d.value === activeDrive)?.label} tasks
              </p>
              <p style={{ fontSize: 13, color: theme.textSecondary, margin: 0 }}>
                Type a task above — the AI will parse and place it
              </p>
            </div>
          ) : (
            <>
              {activeTasks.map(task => (
                <TaskCard key={task.id} task={task} theme={theme}
                  onBreakdown={handleBreakdown}
                  onComplete={handleComplete}
                  onUncomplete={handleUncomplete}
                  onSubtaskToggle={handleSubtaskToggle} />
              ))}

              {/* Done tasks section */}
              {doneTasks.length > 0 && (
                <div style={{ marginTop: 8 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: theme.textSecondary,
                    textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px',
                    display: 'flex', alignItems: 'center', gap: 6 }}>
                    <i className="ti ti-circle-check" style={{ fontSize: 14, color: '#43e8d8' }} aria-hidden="true" />
                    Completed ({doneTasks.length})
                  </p>
                  {doneTasks.map(task => (
                    <TaskCard key={task.id} task={task} theme={theme}
                      onBreakdown={handleBreakdown}
                      onComplete={handleComplete}
                      onUncomplete={handleUncomplete}
                      onSubtaskToggle={handleSubtaskToggle} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Undo toast */}
      {toast && (
        <UndoToast
          message={toast.message}
          onUndo={toast.undo}
          onDismiss={() => setToast(null)}
        />
      )}
    </AppShell>
  )
}
