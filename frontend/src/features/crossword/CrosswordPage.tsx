import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

// ─── Puzzle data ──────────────────────────────────────────────────────────────
const PUZZLE = {
  grid: [
    ['F', 'O', 'C', 'U', 'S', null, null],
    [null, null, 'L', null, null, null, null],
    [null, 'F', 'A', 'R', 'E', 'N', null],
    [null, null, 'R', null, 'S', null, null],
    ['Z', 'O', 'N', 'E', 'T', null, null],
    [null, null, 'I', null, null, null, null],
    [null, null, 'T', 'I', 'M', 'E', 'R'],
    [null, null, 'Y', null, null, null, null],
  ],
  clues: {
    across: [
      { number: 1, clue: 'State of deep concentration (5)',   row: 0, col: 0, answer: 'FOCUS' },
      { number: 3, clue: 'Mental clarity (3)',                row: 2, col: 1, answer: 'FAR'   },
      { number: 4, clue: 'In the ___ (4)',                    row: 4, col: 0, answer: 'ZONE'  },
      { number: 5, clue: 'Productivity tool (5)',             row: 6, col: 2, answer: 'TIMER' },
    ],
    down: [
      { number: 1, clue: 'Type of attention training (9)',    col: 2, row: 0, answer: 'CLARITY'  },
      { number: 2, clue: 'Productivity method (6)',           col: 4, row: 0, answer: 'SESTET'  },
    ],
  },
  rows: 8,
  cols: 7,
}

export default function CrosswordPage() {
  const navigate      = useNavigate()
  const { theme, isBold } = useTheme()

  const [userGrid, setUserGrid] = useState<(string | null)[][]>(
    PUZZLE.grid.map(row => row.map(cell => cell === null ? null : ''))
  )
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null)
  const [solved, setSolved]     = useState(false)
  const [elapsed, setElapsed]   = useState(0)

  // Timer
  useEffect(() => {
    if (solved) return
    const t = setInterval(() => setElapsed(e => e + 1), 1000)
    return () => clearInterval(t)
  }, [solved])

  // Check solution
  useEffect(() => {
    const isSolved = PUZZLE.grid.every((row, r) =>
      row.every((cell, c) => {
        if (cell === null) return true
        return userGrid[r][c]?.toUpperCase() === cell
      })
    )
    if (isSolved && userGrid.flat().some(c => c !== '')) setSolved(true)
  }, [userGrid])

  const handleCellInput = (row: number, col: number, value: string) => {
    if (PUZZLE.grid[row][col] === null) return
    const newGrid = userGrid.map(r => [...r])
    newGrid[row][col] = value.slice(-1).toUpperCase()
    setUserGrid(newGrid)
  }

  const getCellStyle = (row: number, col: number) => {
    const isNull     = PUZZLE.grid[row][col] === null
    const isSelected = selected?.row === row && selected?.col === col
    const isCorrect  = userGrid[row][col] && userGrid[row][col] === PUZZLE.grid[row][col]

    if (isNull) return { backgroundColor: isBold ? theme.bgSecondary : '#D4C9DE', border: 'none' }
    if (isCorrect) return {
      backgroundColor: `${theme.accent}25`,
      border: `2px solid ${theme.accent}`,
    }
    if (isSelected) return {
      backgroundColor: `${theme.progress}20`,
      border: `2px solid ${theme.progress}`,
    }
    return {
      backgroundColor: theme.cardBg,
      border: `1.5px solid ${theme.navBorder}`,
    }
  }

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

  const progress = Math.round(
    (userGrid.flat().filter((c, i) => c && PUZZLE.grid.flat()[i] !== null && c === PUZZLE.grid.flat()[i]).length /
     PUZZLE.grid.flat().filter(c => c !== null).length) * 100
  )

  return (
    <AppShell>
      <div className="px-5 pt-6" style={{ backgroundColor: theme.bgPrimary }}>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/brain-beats')}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ backgroundColor: theme.cardBg, border: 'none', cursor: 'pointer' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <h1 className="text-xl font-bold" style={{ color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
              Crossword
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: theme.cardBg, color: theme.textSecondary }}>
              Progress: {progress}%
            </div>
            <div className="px-3 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: theme.cardBg, color: theme.textSecondary }}>
              {formatTime(elapsed)}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="rounded-2xl p-4 mb-5"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 4px 20px rgba(116,77,131,0.10)' }}>
          <div className="overflow-x-auto">
            <div style={{ display: 'inline-grid', gridTemplateColumns: `repeat(${PUZZLE.cols}, 38px)`, gap: 3 }}>
              {Array.from({ length: PUZZLE.rows }, (_, row) =>
                Array.from({ length: PUZZLE.cols }, (_, col) => {
                  const isNull = PUZZLE.grid[row][col] === null
                  return (
                    <div key={`${row}-${col}`}
                      style={{ width: 38, height: 38, borderRadius: 6, position: 'relative', ...getCellStyle(row, col) }}>
                      {!isNull && (
                        <input
                          type="text" maxLength={1}
                          value={userGrid[row][col] || ''}
                          onChange={e => handleCellInput(row, col, e.target.value)}
                          onFocus={() => setSelected({ row, col })}
                          style={{
                            width: '100%', height: '100%', background: 'transparent',
                            border: 'none', outline: 'none', textAlign: 'center',
                            fontSize: 16, fontWeight: 700, color: theme.textPrimary,
                            textTransform: 'uppercase', cursor: 'pointer',
                          }}
                        />
                      )}
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>

        {/* Clues */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl p-4" style={{ backgroundColor: theme.cardBg }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>Across</p>
            {PUZZLE.clues.across.map(clue => (
              <p key={clue.number} className="text-xs mb-2 leading-snug" style={{ color: theme.textSecondary }}>
                <span className="font-bold" style={{ color: theme.textPrimary }}>{clue.number}. </span>
                {clue.clue}
              </p>
            ))}
          </div>
          <div className="rounded-xl p-4" style={{ backgroundColor: theme.cardBg }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: theme.accent }}>Down</p>
            {PUZZLE.clues.down.map(clue => (
              <p key={clue.number} className="text-xs mb-2 leading-snug" style={{ color: theme.textSecondary }}>
                <span className="font-bold" style={{ color: theme.textPrimary }}>{clue.number}. </span>
                {clue.clue}
              </p>
            ))}
          </div>
        </div>

        {/* CTA */}
        {solved ? (
          <div className="rounded-2xl p-5 text-center mb-6"
            style={{ backgroundColor: `${theme.accent}20`, border: `2px solid ${theme.accent}` }}>
            <p className="text-2xl mb-2">🎉</p>
            <p className="font-bold mb-1" style={{ color: theme.accent }}>Puzzle Complete!</p>
            <p className="text-sm" style={{ color: theme.textSecondary }}>Completed in {formatTime(elapsed)}</p>
          </div>
        ) : (
          <button className="btn-primary mb-6" onClick={() => navigate('/tasks')}
            style={{ backgroundColor: theme.ctaBg }}>
            Ready to focus?
          </button>
        )}
      </div>
    </AppShell>
  )
}