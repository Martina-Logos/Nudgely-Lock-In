import { createContext, useContext, useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'

// ─── Theme tokens ─────────────────────────────────────────────────────────────

export const SOFT_THEME = {
  // Backgrounds
  bgPrimary:   '#F0EADF',
  bgSecondary: '#E3DBE6',
  // Cards
  cardBg:      '#FFFFFF',
  cardAlt:     '#E3DBE6',
  // Buttons
  ctaBg:       '#23BBB7',
  ctaText:     '#FFFFFF',
  ctaSecondary:'#E3DBE6',
  // Text
  textPrimary:   '#744D83',
  textSecondary: '#8E7A99',
  textOnDark:    '#FFFFFF',
  // Accents
  accent:      '#23BBB7',
  progress:    '#744D83',
  // Nav
  navBg:       '#FFFFFF',
  navBorder:   '#E3DBE6',
  navActive:   '#744D83',
  navInactive: '#9B8EA5',
}

export const BOLD_THEME = {
  // Backgrounds
  bgPrimary:   '#23627C',
  bgSecondary: '#1B4E63',
  // Cards
  cardBg:      '#F0EADF',
  cardAlt:     '#D3EDEF',
  // Buttons
  ctaBg:       '#23BBB7',
  ctaText:     '#FFFFFF',
  ctaSecondary:'#D3EDEF',
  // Text
  textPrimary:   '#0F2F3A',
  textSecondary: '#A7C7D1',
  textOnDark:    '#FFFFFF',
  // Accents
  accent:      '#23BBB7',
  progress:    '#744D83',
  // Nav
  navBg:       '#1B4E63',
  navBorder:   '#23627C',
  navActive:   '#23BBB7',
  navInactive: '#A7C7D1',
}

export type Theme = typeof SOFT_THEME

// ─── Context ──────────────────────────────────────────────────────────────────

const ThemeContext = createContext<{ theme: Theme; isBold: boolean }>({
  theme: SOFT_THEME,
  isBold: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const user   = useAuthStore((s) => s.user)
  const isBold = user?.personalityVibe === 'Bold'
  const theme  = isBold ? BOLD_THEME : SOFT_THEME

  // Apply CSS variables to :root so Tailwind arbitrary values pick them up
  useEffect(() => {
    const root = document.documentElement
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(`--theme-${key}`, value)
    })
    // Also set body/root background
    document.getElementById('root')!.style.backgroundColor = theme.bgPrimary
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, isBold }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}