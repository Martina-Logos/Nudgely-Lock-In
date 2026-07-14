import { useState, useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'

// ── Word bank ─────────────────────────────────────────────────────────────────
// Curated for Nudgely's wellness + focus themes. 4–8 letters, meaningful.
const WORD_BANK: { word: string; hint: string; category: string }[] = [
  // Focus & productivity
  { word: 'FOCUS',   hint: 'The thing your brain is hunting for',         category: 'mind' },
  { word: 'STEADY',  hint: 'Calm and in control',                          category: 'mind' },
  { word: 'GROUND',  hint: 'What keeps you from floating away',            category: 'mind' },
  { word: 'ANCHOR',  hint: 'Something that holds you in place',            category: 'mind' },
  { word: 'INTENT',  hint: 'Doing something on purpose',                   category: 'mind' },
  { word: 'PRESENT', hint: 'The only moment that is real',                 category: 'mind' },
  { word: 'CLARITY', hint: 'When the fog lifts',                           category: 'mind' },
  { word: 'DRIVE',   hint: 'What moves you forward',                       category: 'mind' },
  { word: 'STRIDE',  hint: 'A confident step forward',                     category: 'mind' },
  // Wellness
  { word: 'CALM',    hint: 'The opposite of panic',                        category: 'wellness' },
  { word: 'BREATH',  hint: 'The thing that is always there for you',       category: 'wellness' },
  { word: 'RESTORE', hint: 'To fill back up',                              category: 'wellness' },
  { word: 'RELEASE', hint: 'Let it go',                                    category: 'wellness' },
  { word: 'BALANCE', hint: 'Neither too much nor too little',              category: 'wellness' },
  { word: 'GENTLE',  hint: 'Kind, especially to yourself',                 category: 'wellness' },
  { word: 'EASE',    hint: 'When effort feels effortless',                 category: 'wellness' },
  { word: 'RENEW',   hint: 'Start fresh',                                  category: 'wellness' },
  { word: 'SERENE',  hint: 'Quietly, deeply peaceful',                     category: 'wellness' },
  // Growth
  { word: 'GROWTH',  hint: 'What happens when you keep going',             category: 'growth' },
  { word: 'GRIT',    hint: 'Continuing even when it is hard',              category: 'growth' },
  { word: 'BRAVE',   hint: 'Doing it even when scared',                    category: 'growth' },
  { word: 'TRUST',   hint: 'Believing without proof',                      category: 'growth' },
  { word: 'OPEN',    hint: 'Ready to receive something new',               category: 'growth' },
  { word: 'EVOLVE',  hint: 'To gradually become better',                   category: 'growth' },
  { word: 'THRIVE',  hint: 'More than just surviving',                     category: 'growth' },
  { word: 'PERSIST', hint: 'Keep going, quietly, steadily',                category: 'growth' },
  // Nature / grounding
  { word: 'RIVER',   hint: 'Always moving, never the same twice',          category: 'nature' },
  { word: 'FOREST',  hint: 'Where everything slows down',                  category: 'nature' },
  { word: 'LIGHT',   hint: 'What you follow in the dark',                  category: 'nature' },
  { word: 'ROOTS',   hint: 'What keeps a tree standing in a storm',        category: 'nature' },
  { word: 'BLOOM',   hint: 'To open up fully',                             category: 'nature' },
  { word: 'SPACE',   hint: 'What you need before you can think clearly',   category: 'nature' },
]

// Category colours — soft, not harsh
const CATEGORY_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  mind:     { bg: 'rgba(107,57,145,0.08)',  text: '#6b3991', border: 'rgba(107,57,145,0.18)' },
  wellness: { bg: 'rgba(67,232,216,0.08)',  text: '#1d6a82', border: 'rgba(67,232,216,0.22)' },
  growth:   { bg: 'rgba(34,197,94,0.08)',   text: '#15803d', border: 'rgba(34,197,94,0.20)'  },
  nature:   { bg: 'rgba(217,119,6,0.08)',   text: '#b45309', border: 'rgba(217,119,6,0.20)'  },
}

const WORDS_PER_ROUND = 5

// ── Affirmations shown on word solved ────────────────────────────────────────
const SOLVE_MESSAGES = [
  'Nice one ✦',
  'That\'s it ✦',
  'You got it ✦',
  'Sharp mind ✦',
  'Well done ✦',
  'Exactly right ✦',
  'Keep going ✦',
]

// ── Utilities ─────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickRound(exclude: string[]): typeof WORD_BANK {
  const pool = WORD_BANK.filter(w => !exclude.includes(w.word))
  const source = pool.length >= WORDS_PER_ROUND ? pool : WORD_BANK
  return shuffle(source).slice(0, WORDS_PER_ROUND)
}

function scrambleWord(word: string): string[] {
  let letters = shuffle(word.split(''))
  // Guarantee it doesn't come out in original order
  while (letters.join('') === word && word.length > 1) {
    letters = shuffle(letters)
  }
  return letters
}

// ── Types ─────────────────────────────────────────────────────────────────────
type GamePhase = 'playing' | 'solved' | 'round-complete'

interface LetterTile {
  id: string        // unique per render
  char: string
  used: boolean     // has been placed in answer slots
}

// ── Main component ────────────────────────────────────────────────────────────
export default function ScramblePage() {
  const navigate              = useNavigate()
  const { theme }             = useTheme()

  // Round state
  const [round, setRound]           = useState<typeof WORD_BANK>(() => pickRound([]))
  const [wordIndex, setWordIndex]   = useState(0)
  const [solvedWords, setSolvedWords] = useState<string[]>([])
  const [totalSolved, setTotalSolved] = useState(0)
  const [phase, setPhase]           = useState<GamePhase>('playing')
  const [solveMsg, setSolveMsg]     = useState('')

  // Per-word state
  const [tiles, setTiles]           = useState<LetterTile[]>([])
  const [answer, setAnswer]         = useState<(LetterTile | null)[]>([])
  const [shaking, setShaking]       = useState(false)
  const [hintOpen, setHintOpen]     = useState(false)
  const [showHintText, setShowHintText] = useState(false)

const shakeRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Current word
  const currentWord = round[wordIndex]

  // ── Initialise a new word ─────────────────────────────────────────────────
  const initWord = useCallback((entry: typeof WORD_BANK[0]) => {
    const scrambled = scrambleWord(entry.word)
    setTiles(scrambled.map((char, i) => ({ id: `${char}-${i}-${Date.now()}`, char, used: false })))
    setAnswer(new Array(entry.word.length).fill(null))
    setShaking(false)
    setHintOpen(false)
    setShowHintText(false)
  }, [])

  // Boot first word
  useEffect(() => { initWord(currentWord) }, []) // eslint-disable-line

  // ── Place a letter from scramble → answer ─────────────────────────────────
  const placeLetter = (tile: LetterTile) => {
    if (tile.used || phase === 'solved') return
    const nextSlot = answer.findIndex(a => a === null)
    if (nextSlot === -1) return

    const newAnswer = [...answer]
    newAnswer[nextSlot] = tile
    setAnswer(newAnswer)

    setTiles(prev => prev.map(t => t.id === tile.id ? { ...t, used: true } : t))

    // Check if answer is complete
    const filled = newAnswer.filter(Boolean) as LetterTile[]
    if (filled.length === currentWord.word.length) {
      const attempt = filled.map(t => t.char).join('')
      if (attempt === currentWord.word) {
        handleSolve()
      } else {
        triggerShake()
      }
    }
  }

  // ── Remove a letter from answer → back to scramble ────────────────────────
  const removeLetter = (slotIdx: number) => {
    if (phase === 'solved') return
    const tile = answer[slotIdx]
    if (!tile) return

    const newAnswer = [...answer]
    newAnswer[slotIdx] = null
    setAnswer(newAnswer)
    setTiles(prev => prev.map(t => t.id === tile.id ? { ...t, used: false } : t))
  }

  // ── Shake on wrong answer ─────────────────────────────────────────────────
  const triggerShake = () => {
    setShaking(true)
    // Reset all placed letters back after shake
    shakeRef.current = setTimeout(() => {
      setShaking(false)
      // Clear answer, restore tiles
      setAnswer(new Array(currentWord.word.length).fill(null))
      setTiles(prev => prev.map(t => ({ ...t, used: false })))
    }, 600)
  }

  // ── Word solved ───────────────────────────────────────────────────────────
  const handleSolve = () => {
    setSolveMsg(SOLVE_MESSAGES[Math.floor(Math.random() * SOLVE_MESSAGES.length)])
    setPhase('solved')
    const newSolved = [...solvedWords, currentWord.word]
    setSolvedWords(newSolved)
    setTotalSolved(t => t + 1)

    // Auto-advance after 1.4s
    setTimeout(() => {
      const next = wordIndex + 1
      if (next >= WORDS_PER_ROUND) {
        setPhase('round-complete')
      } else {
        setWordIndex(next)
        setPhase('playing')
        initWord(round[next])
      }
    }, 1400)
  }

  // ── Start a new round ─────────────────────────────────────────────────────
  const startNewRound = () => {
    const exclude = [...solvedWords]
    const newRound = pickRound(exclude)
    setRound(newRound)
    setWordIndex(0)
    setSolvedWords([])
    setPhase('playing')
    initWord(newRound[0])
  }

  // ── Hint ──────────────────────────────────────────────────────────────────
  const toggleHint = () => {
    if (!hintOpen) {
      setHintOpen(true)
      setTimeout(() => setShowHintText(true), 80)
    } else {
      setShowHintText(false)
      setTimeout(() => setHintOpen(false), 200)
    }
  }

  // ── Skip ──────────────────────────────────────────────────────────────────
  const skip = () => {
    const next = wordIndex + 1
    if (next >= WORDS_PER_ROUND) {
      setPhase('round-complete')
    } else {
      setWordIndex(next)
      setPhase('playing')
      initWord(round[next])
    }
  }

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => () => {
    if (shakeRef.current) {
      clearTimeout(shakeRef.current)
    }
  }, [])

  // ── Render ────────────────────────────────────────────────────────────────
  const catStyle = currentWord ? CATEGORY_STYLES[currentWord.category] : CATEGORY_STYLES.mind
  const progress = ((wordIndex + (phase === 'solved' ? 1 : 0)) / WORDS_PER_ROUND) * 100

  return (
    <AppShell>
      <div style={{
        minHeight: '100%',
        backgroundColor: theme.bgPrimary,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '28px 20px 48px',
      }}>

        {/* ── Contained card ── */}
        <div style={{
          width: '100%',
          maxWidth: 560,
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button
                onClick={() => navigate(-1)}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'rgba(107,57,145,0.06)',
                  border: '1px solid rgba(107,57,145,0.10)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div>
                <h1 style={{
                  fontSize: 19, fontWeight: 700,
                  color: theme.textPrimary,
                  fontFamily: '"DM Serif Display", serif',
                  letterSpacing: '-0.2px',
                  lineHeight: 1,
                }}>
                  Word Scramble
                </h1>
                <p style={{ fontSize: 11.5, color: '#9b8ea5', marginTop: 2 }}>
                  Unscramble the word
                </p>
              </div>
            </div>

            {/* Session counter */}
            <div style={{
              fontSize: 12, fontWeight: 700,
              color: '#6b3991',
              background: 'rgba(107,57,145,0.07)',
              border: '1px solid rgba(107,57,145,0.12)',
              padding: '5px 12px', borderRadius: 9999,
              letterSpacing: '0.02em',
            }}>
              {totalSolved} solved
            </div>
          </div>

          {/* ── Round complete screen ── */}
          {phase === 'round-complete' ? (
            <RoundComplete
              totalSolved={totalSolved}
              onContinue={startNewRound}
              onDone={() => navigate(-1)}
              theme={theme}
            />
          ) : (
            <>
              {/* Progress bar */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#9b8ea5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Round progress
                  </span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#6b3991' }}>
                    {wordIndex + (phase === 'solved' ? 1 : 0)} / {WORDS_PER_ROUND}
                  </span>
                </div>
                <div style={{
                  height: 3, borderRadius: 9999,
                  background: 'rgba(107,57,145,0.08)',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%', borderRadius: 9999,
                    background: 'linear-gradient(90deg, #6b3991, #43e8d8)',
                    width: `${progress}%`,
                    transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </div>
                {/* Step dots */}
                <div style={{ display: 'flex', gap: 6, marginTop: 8, justifyContent: 'center' }}>
                  {Array.from({ length: WORDS_PER_ROUND }).map((_, i) => {
                    const done = i < wordIndex + (phase === 'solved' ? 1 : 0)
                    const current = i === wordIndex && phase !== 'solved'
                    return (
                      <div key={i} style={{
                        width: current ? 20 : 7, height: 7,
                        borderRadius: 9999,
                        background: done
                          ? '#43e8d8'
                          : current
                            ? '#6b3991'
                            : 'rgba(107,57,145,0.12)',
                        transition: 'all 0.3s ease',
                        boxShadow: current ? '0 0 6px rgba(107,57,145,0.3)' : 'none',
                      }} />
                    )
                  })}
                </div>
              </div>

              {/* Main game card */}
              <div style={{
                background: theme.cardBg || '#ffffff',
                border: '1px solid rgba(107,57,145,0.09)',
                borderRadius: 22,
                padding: '28px 24px 24px',
                boxShadow: '0 2px 16px rgba(107,57,145,0.07)',
                marginBottom: 16,
                position: 'relative',
                overflow: 'hidden',
              }}>

                {/* Subtle bg accent */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 80,
                  background: `radial-gradient(ellipse at 50% 0%, ${catStyle.bg.replace('0.08', '0.12')} 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Category chip */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  <span style={{
                    fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: catStyle.text,
                    background: catStyle.bg,
                    border: `1px solid ${catStyle.border}`,
                    padding: '4px 12px', borderRadius: 9999,
                  }}>
                    {currentWord.category}
                  </span>
                </div>

                {/* Hint */}
                <div style={{ textAlign: 'center', marginBottom: 24 }}>
                  <p style={{
                    fontSize: 14.5, color: '#867391',
                    fontStyle: 'italic', lineHeight: 1.5,
                    minHeight: 22,
                  }}>
                    "{currentWord.hint}"
                  </p>
                </div>

                {/* Answer slots */}
                <div style={{
                  display: 'flex', justifyContent: 'center',
                  gap: currentWord.word.length > 6 ? 6 : 8,
                  marginBottom: 28,
                  flexWrap: 'wrap',
                }}>
                  {answer.map((tile, i) => (
                    <AnswerSlot
                      key={i}
                      tile={tile}
                      index={i}
                      shaking={shaking}
                      solved={phase === 'solved'}
                      wordLength={currentWord.word.length}
                      onRemove={() => removeLetter(i)}
                    />
                  ))}
                </div>

                {/* Solve message */}
                {phase === 'solved' && (
                  <div style={{
                    textAlign: 'center', marginBottom: 8,
                    animation: 'scramble-pop 0.35s cubic-bezier(0.34,1.56,0.64,1)',
                  }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: '#6b3991' }}>
                      {solveMsg}
                    </p>
                  </div>
                )}

                {/* Scrambled tiles */}
                {phase !== 'solved' && (
                  <div style={{
                    display: 'flex', justifyContent: 'center',
                    flexWrap: 'wrap',
                    gap: currentWord.word.length > 6 ? 6 : 8,
                  }}>
                    {tiles.map(tile => (
                      <SourceTile
                        key={tile.id}
                        tile={tile}
                        wordLength={currentWord.word.length}
                        onPress={() => placeLetter(tile)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Controls row */}
              {phase !== 'solved' && (
                <div style={{ display: 'flex', gap: 10 }}>
                  {/* Hint */}
                  <div style={{ flex: 1, position: 'relative' }}>
                    <button
                      onClick={toggleHint}
                      style={{
                        width: '100%', padding: '11px 16px',
                        borderRadius: 12, border: '1px solid rgba(107,57,145,0.12)',
                        background: hintOpen ? 'rgba(107,57,145,0.07)' : (theme.cardBg || '#ffffff'),
                        color: '#6b3991', fontSize: 13, fontWeight: 600,
                        cursor: 'pointer', fontFamily: 'inherit',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <span style={{ fontSize: 14 }}>💡</span>
                      {hintOpen ? 'Hide hint' : 'Show hint'}
                    </button>
                    {hintOpen && (
                      <div style={{
                        position: 'absolute', bottom: 'calc(100% + 8px)', left: 0, right: 0,
                        background: theme.cardBg || '#ffffff',
                        border: '1px solid rgba(107,57,145,0.12)',
                        borderRadius: 12,
                        padding: '10px 14px',
                        boxShadow: '0 4px 16px rgba(107,57,145,0.10)',
                        opacity: showHintText ? 1 : 0,
                        transform: showHintText ? 'translateY(0)' : 'translateY(4px)',
                        transition: 'all 0.2s ease',
                        zIndex: 10,
                      }}>
                        <p style={{ fontSize: 12.5, color: '#5a5a7a', lineHeight: 1.5, fontStyle: 'italic' }}>
                          {currentWord.hint}
                        </p>
                        <p style={{ fontSize: 11, color: '#9b8ea5', marginTop: 4 }}>
                          {currentWord.word.length} letters · {currentWord.category}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Clear */}
                  <button
                    onClick={() => {
                      setAnswer(new Array(currentWord.word.length).fill(null))
                      setTiles(prev => prev.map(t => ({ ...t, used: false })))
                    }}
                    style={{
                      padding: '11px 16px',
                      borderRadius: 12, border: '1px solid rgba(107,57,145,0.12)',
                      background: theme.cardBg || '#ffffff',
                      color: '#867391', fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', fontFamily: 'inherit',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span style={{ fontSize: 14 }}>↺</span>
                    Clear
                  </button>

                  {/* Skip */}
                  <button
                    onClick={skip}
                    style={{
                      padding: '11px 16px',
                      borderRadius: 12, border: '1px solid rgba(107,57,145,0.12)',
                      background: theme.cardBg || '#ffffff',
                      color: '#867391', fontSize: 13, fontWeight: 600,
                      cursor: 'pointer', fontFamily: 'inherit',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Skip
                    <span style={{ fontSize: 12 }}>→</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes scramble-pop {
          from { opacity: 0; transform: scale(0.85); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes scramble-shake {
          0%,100% { transform: translateX(0); }
          20%     { transform: translateX(-6px); }
          40%     { transform: translateX(6px); }
          60%     { transform: translateX(-4px); }
          80%     { transform: translateX(4px); }
        }
        @keyframes scramble-drop {
          from { opacity: 0; transform: translateY(-10px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes scramble-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(67,232,216,0); }
          50%     { box-shadow: 0 0 0 4px rgba(67,232,216,0.25); }
        }
      `}</style>
    </AppShell>
  )
}

// ── Answer slot ───────────────────────────────────────────────────────────────
function AnswerSlot({
  tile, index, shaking, solved, wordLength, onRemove,
}: {
  tile: LetterTile | null
  index: number
  shaking: boolean
  solved: boolean
  wordLength: number
  onRemove: () => void
}) {
  const size = wordLength >= 8 ? 40 : wordLength >= 6 ? 46 : 52

  return (
    <div
      onClick={tile && !solved ? onRemove : undefined}
      style={{
        width: size, height: size,
        borderRadius: 12,
        border: solved
          ? '1.5px solid #43e8d8'
          : tile
            ? '1.5px solid #6b3991'
            : '1.5px dashed rgba(107,57,145,0.22)',
        background: solved
          ? 'rgba(67,232,216,0.10)'
          : tile
            ? 'rgba(107,57,145,0.07)'
            : 'rgba(107,57,145,0.03)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: tile && !solved ? 'pointer' : 'default',
        transition: 'all 0.18s ease',
        animation: shaking && tile
          ? 'scramble-shake 0.55s ease'
          : tile && !solved
            ? 'scramble-drop 0.2s cubic-bezier(0.34,1.56,0.64,1)'
            : 'none',
        animationDelay: tile && !solved && !shaking ? `${index * 0.03}s` : '0s',
        boxShadow: solved ? '0 0 0 3px rgba(67,232,216,0.15)' : 'none',
      }}
    >
      {tile && (
        <span style={{
          fontSize: wordLength >= 8 ? 16 : wordLength >= 6 ? 18 : 20,
          fontWeight: 800,
          color: solved ? '#1d6a82' : '#6b3991',
          fontFamily: '"DM Serif Display", serif',
          letterSpacing: '0.02em',
          userSelect: 'none',
        }}>
          {tile.char}
        </span>
      )}
    </div>
  )
}

// ── Source tile (scrambled letters) ──────────────────────────────────────────
function SourceTile({
  tile, wordLength, onPress,
}: {
  tile: LetterTile
  wordLength: number
  onPress: () => void
}) {
  const size = wordLength >= 8 ? 40 : wordLength >= 6 ? 46 : 52

  return (
    <button
      onClick={tile.used ? undefined : onPress}
      disabled={tile.used}
      style={{
        width: size, height: size,
        borderRadius: 12,
        border: '1.5px solid rgba(107,57,145,0.14)',
        background: tile.used ? 'rgba(107,57,145,0.03)' : '#ffffff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: tile.used ? 'default' : 'pointer',
        fontFamily: 'inherit',
        transition: 'all 0.15s cubic-bezier(0.34,1.56,0.64,1)',
        opacity: tile.used ? 0.28 : 1,
        transform: 'scale(1)',
        boxShadow: tile.used ? 'none' : '0 2px 8px rgba(107,57,145,0.08)',
      }}
      onMouseEnter={e => {
        if (!tile.used) (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)'
      }}
      onMouseDown={e => {
        if (!tile.used) (e.currentTarget as HTMLElement).style.transform = 'scale(0.94)'
      }}
      onMouseUp={e => {
        if (!tile.used) (e.currentTarget as HTMLElement).style.transform = 'scale(1.08)'
      }}
    >
      <span style={{
        fontSize: wordLength >= 8 ? 16 : wordLength >= 6 ? 18 : 20,
        fontWeight: 800,
        color: tile.used ? '#c4b8d0' : '#2d1f35',
        fontFamily: '"DM Serif Display", serif',
        letterSpacing: '0.02em',
        userSelect: 'none',
      }}>
        {tile.char}
      </span>
    </button>
  )
}

// ── Round complete screen ─────────────────────────────────────────────────────
function RoundComplete({
  totalSolved, onContinue, onDone, theme,
}: {
  totalSolved: number
  onContinue: () => void
  onDone: () => void
  theme: any
}) {
  return (
    <div style={{
      background: theme.cardBg || '#ffffff',
      border: '1px solid rgba(107,57,145,0.09)',
      borderRadius: 22,
      padding: '36px 28px',
      boxShadow: '0 2px 16px rgba(107,57,145,0.07)',
      textAlign: 'center',
      animation: 'scramble-pop 0.4s cubic-bezier(0.34,1.56,0.64,1)',
    }}>

      {/* Icon */}
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'rgba(107,57,145,0.07)',
        border: '1px solid rgba(107,57,145,0.12)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 32, margin: '0 auto 20px',
      }}>
        ✨
      </div>

      <h2 style={{
        fontSize: 22, fontWeight: 700,
        color: theme.textPrimary,
        fontFamily: '"DM Serif Display", serif',
        letterSpacing: '-0.2px', marginBottom: 6,
      }}>
        Round complete
      </h2>

      <p style={{ fontSize: 14, color: '#867391', marginBottom: 6, lineHeight: 1.5 }}>
        Great job — your mind is sharper than you think.
      </p>

      <p style={{
        fontSize: 13, fontWeight: 700,
        color: '#6b3991',
        background: 'rgba(107,57,145,0.07)',
        display: 'inline-block',
        padding: '4px 14px', borderRadius: 9999,
        marginBottom: 28,
      }}>
        {totalSolved} words solved this session
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          onClick={onContinue}
          className="btn-primary"
        >
          ✦ Another round
        </button>
        <button
          onClick={onDone}
          className="btn-secondary"
        >
          That's enough for now
        </button>
      </div>
    </div>
  )
}