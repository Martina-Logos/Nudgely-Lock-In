// src/hooks/useNudge.ts
//
// Called by Dashboard, TasksPage, FocusPage, SelfAwarenessPage to get
// a single contextual AI line without any chat UI.
//
// Usage:
//   const { nudge, loading } = useNudge('dashboard_morning')
//
// The nudge is fetched once on mount. A short in-memory cache (5 min per type)
// prevents re-fetching on every navigation to the same screen.

import { useState, useEffect } from 'react'
import { assistantApi } from '../lib/api'

type NudgeType = 'dashboard_morning' | 'task_stuck' | 'focus_start' | 'journal_open'

// In-memory cache: type → { text, fetchedAt }
const cache: Partial<Record<NudgeType, { text: string; fetchedAt: number }>> = {}
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

export function useNudge(type: NudgeType, enabled = true) {
  const [nudge, setNudge]     = useState<string | null>(() => {
    const cached = cache[type]
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) return cached.text
    return null
  })
  const [loading, setLoading] = useState(!nudge && enabled)

  useEffect(() => {
    if (!enabled) return

    // Already in cache
    const cached = cache[type]
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
      setNudge(cached.text)
      setLoading(false)
      return
    }

    let cancelled = false

    async function fetch() {
      setLoading(true)
      try {
        const { nudge: text } = await assistantApi.getNudge(type)
        if (!cancelled) {
          cache[type] = { text, fetchedAt: Date.now() }
          setNudge(text)
        }
      } catch {
        // Fail silently — screens render fine without the nudge
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetch()
    return () => { cancelled = true }
  }, [type, enabled])

  return { nudge, loading }
}