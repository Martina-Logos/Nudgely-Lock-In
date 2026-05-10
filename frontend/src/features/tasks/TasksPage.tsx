import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { tasksApi } from '../../lib/api'
import type { Task, Subtask, Drive } from '../../types'

// ─── Drive tabs ───────────────────────────────────────────────────────────────
const DRIVES: { value: Drive; label: string; emoji: string; color: string }[] = [
  { value: 'OnFire',    label: 'On Fire',    emoji: '🔥', color: '#FF6B35' },
  { value: 'DueSoon',   label: 'Due Soon',   emoji: '⏰', color: '#F59E0B' },
  { value: 'LowLift',   label: 'Low Lift',   emoji: '🌿', color: '#23BBB7' },
  { value: 'OpenSpace', label: 'Open Space', emoji: '✨', color: '#744D83' },
]

const STATUS_LABELS: Record<string, string> = {
  Todo:         'To do',
  WorkingOnIt:  'Working on it',
  PushedBack:   'Pushed back',
  StuckOnThis:  'Stuck on this',
  Done:         'Done',
}

// ─── Subtask item ─────────────────────────────────────────────────────────────
function SubtaskItem({ subtask, theme, onComplete }: {
  subtask: Subtask; theme: any; onComplete: (id: string) => void
}) {
  return (
    <div className="flex items-center gap-3 py-2">
      <button
        onClick={() => !subtask.completed && onComplete(subtask.id)}
        className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
        style={{
          backgroundColor: subtask.completed ? theme.accent : 'transparent',
          border: `2px solid ${subtask.completed ? theme.accent : theme.navBorder}`,
          cursor: subtask.completed ? 'default' : 'pointer',
        }}>
        {subtask.completed && (
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>
      <span className="text-sm" style={{
        color: subtask.completed ? theme.textSecondary : theme.textPrimary,
        textDecoration: subtask.completed ? 'line-through' : 'none',
      }}>
        {subtask.title}
      </span>
    </div>
  )
}

// ─── Task card ────────────────────────────────────────────────────────────────
function TaskCard({ task, theme, onUpdate, onBreakdown, onComplete, onSubtaskComplete }: {
  task: Task; theme: any
  onUpdate: (id: string, data: object) => void
  onBreakdown: (id: string) => void
  onComplete: (id: string) => void
  onSubtaskComplete: (subtaskId: string, taskId: string) => void
}) {
  const [expanded, setExpanded] = useState(false)
  const [breaking, setBreaking] = useState(false)
  const drive = DRIVES.find(d => d.value === task.drive)!

  const handleBreakdown = async () => {
    setBreaking(true)
    await onBreakdown(task.id)
    setBreaking(false)
    setExpanded(true)
  }

  return (
    <div className="rounded-2xl mb-3 overflow-hidden"
      style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>

      {/* Task header */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                style={{ backgroundColor: `${drive.color}20`, color: drive.color }}>
                {drive.emoji} {drive.label}
              </span>
              {task.estimatedMinutes && (
                <span className="text-xs" style={{ color: theme.textSecondary }}>
                  {task.estimatedMinutes} min
                </span>
              )}
            </div>
            <h3 className="text-sm font-semibold leading-snug" style={{ color: theme.textPrimary }}>
              {task.title}
            </h3>
            <p className="text-xs mt-1" style={{ color: theme.textSecondary }}>
              {STATUS_LABELS[task.status] || task.status}
            </p>
          </div>

          <button onClick={() => setExpanded(e => !e)}
            className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: theme.bgSecondary || '#E3DBE6', border: 'none', cursor: 'pointer' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              <path d="M6 9L12 15L18 9" stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 mt-3">
          <button
            onClick={() => onUpdate(task.id, { status: 'WorkingOnIt' })}
            className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
            style={{ backgroundColor: theme.accent, color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>
            Start
          </button>
          <button
            onClick={handleBreakdown}
            disabled={breaking}
            className="flex-1 py-2 rounded-xl text-xs font-semibold transition-all"
            style={{
              backgroundColor: 'transparent',
              color: theme.accent,
              border: `1.5px solid ${theme.accent}`,
              cursor: breaking ? 'wait' : 'pointer',
            }}>
            {breaking ? 'Breaking...' : 'Break down'}
          </button>
          <button
            onClick={() => onComplete(task.id)}
            className="py-2 px-3 rounded-xl text-xs font-semibold transition-all"
            style={{ backgroundColor: `${theme.accent}15`, color: theme.accent, border: 'none', cursor: 'pointer' }}>
            ✓
          </button>
        </div>
      </div>

      {/* Subtasks */}
      {expanded && task.subtasks && task.subtasks.length > 0 && (
        <div className="px-4 pb-4 border-t" style={{ borderColor: theme.navBorder }}>
          <p className="text-xs font-semibold mt-3 mb-1" style={{ color: theme.textSecondary }}>Steps</p>
          {task.subtasks.map(subtask => (
            <SubtaskItem key={subtask.id} subtask={subtask} theme={theme}
              onComplete={(id) => onSubtaskComplete(id, task.id)} />
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Add task input ───────────────────────────────────────────────────────────
function AddTaskInput({ theme, onAdd }: { theme: any; onAdd: (input: string) => Promise<void> }) {
  const [input, setInput]   = useState('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleAdd = async () => {
    if (!input.trim() || loading) return
    setLoading(true)
    await onAdd(input.trim())
    setInput('')
    setLoading(false)
  }

  return (
    <div className="flex gap-2 mb-5">
      <input ref={inputRef}
        className="flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all"
        style={{
          backgroundColor: theme.cardBg,
          border: `1.5px solid ${theme.navBorder}`,
          color: theme.textPrimary,
          fontFamily: 'inherit',
        }}
        placeholder="Add a task... e.g. 'Finish report by Friday'"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handleAdd()}
      />
      <button onClick={handleAdd} disabled={!input.trim() || loading}
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all active:scale-95"
        style={{ backgroundColor: theme.accent, border: 'none', cursor: loading ? 'wait' : 'pointer' }}>
        {loading ? (
          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  )
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function TasksPage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()

  const [tasks, setTasks]       = useState<Task[]>([])
  const [activeDrive, setActiveDrive] = useState<Drive>('OnFire')
  const [loading, setLoading]   = useState(true)
  const [aiMessage, setAiMessage] = useState("Great! I've broken down your tasks into actionable steps. Let's start with the most urgent one.")

  useEffect(() => { loadTasks() }, [])

  async function loadTasks() {
    try {
      const { data } = await tasksApi.getAll()
      setTasks(data)
    } catch {}
    finally { setLoading(false) }
  }

  async function handleAddTask(input: string) {
    try {
      const { data } = await tasksApi.create(input)
      setTasks(prev => [data, ...prev])
      setActiveDrive(data.drive)
      if (data.aiNudge) setAiMessage(data.aiNudge)
    } catch {}
  }

  async function handleUpdate(id: string, updateData: object) {
    try {
      const { data } = await tasksApi.update(id, updateData)
      setTasks(prev => prev.map(t => t.id === id ? data : t))
    } catch {}
  }

  async function handleBreakdown(id: string) {
    try {
      const { data } = await tasksApi.breakdown(id)
      setTasks(prev => prev.map(t => t.id === id ? data : t))
    } catch {}
  }

  async function handleComplete(id: string) {
    try {
      const { data } = await tasksApi.complete(id)
      setTasks(prev => prev.map(t => t.id === id ? data : t))
    } catch {}
  }

  async function handleSubtaskComplete(subtaskId: string, taskId: string) {
    try {
      await tasksApi.update(taskId, {})
      // Optimistic update
      setTasks(prev => prev.map(t => {
        if (t.id !== taskId) return t
        return { ...t, subtasks: t.subtasks.map(s => s.id === subtaskId ? { ...s, completed: true } : s) }
      }))
    } catch {}
  }

  const filteredTasks = tasks.filter(t => t.drive === activeDrive && t.status !== 'Done')
  const doneTasks     = tasks.filter(t => t.status === 'Done')

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
            AI Task Flow
          </h1>
        </div>

        {/* Drive tabs */}
        <div className="flex gap-2 mb-4 overflow-x-auto no-scrollbar pb-1">
          {DRIVES.map(drive => (
            <button key={drive.value}
              onClick={() => setActiveDrive(drive.value)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0"
              style={{
                backgroundColor: activeDrive === drive.value ? `${drive.color}20` : theme.cardBg,
                color: activeDrive === drive.value ? drive.color : theme.textSecondary,
                border: `1.5px solid ${activeDrive === drive.value ? drive.color : theme.navBorder}`,
                cursor: 'pointer',
              }}>
              {drive.emoji} {drive.label}
            </button>
          ))}
        </div>

        {/* AI message */}
        <div className="rounded-2xl p-4 mb-4 flex items-start gap-3"
          style={{ backgroundColor: isBold ? theme.cardAlt : '#EDE8F5' }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: theme.accent }}>
            <span className="text-white text-xs font-bold">AI</span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: theme.textPrimary }}>
            {aiMessage}
          </p>
        </div>

        {/* Add task */}
        <AddTaskInput theme={theme} onAdd={handleAddTask} />

        {/* Task list */}
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
              style={{ borderColor: theme.accent }} />
          </div>
        ) : filteredTasks.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-4xl mb-3">✨</p>
            <p className="font-semibold mb-1" style={{ color: theme.textPrimary }}>No tasks here</p>
            <p className="text-sm" style={{ color: theme.textSecondary }}>
              Add a task above or switch drives
            </p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} theme={theme}
              onUpdate={handleUpdate} onBreakdown={handleBreakdown}
              onComplete={handleComplete} onSubtaskComplete={handleSubtaskComplete} />
          ))
        )}

        {/* Done count */}
        {doneTasks.length > 0 && (
          <p className="text-xs text-center pb-4" style={{ color: theme.textSecondary }}>
            ✅ {doneTasks.length} task{doneTasks.length > 1 ? 's' : ''} completed today
          </p>
        )}
      </div>
    </AppShell>
  )
}