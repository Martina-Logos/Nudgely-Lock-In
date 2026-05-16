import { createContext, useContext, useEffect } from 'react'
import { useAuthStore } from '../stores/authStore'

// ─── Theme tokens ─────────────────────────────────────────────────────────────

export const SOFT_THEME = {
  // Backgrounds
  bgPrimary:   '#f9f9f7',
  bgSecondary: '#f2f0fb',
  // Cards
  cardBg:      '#ffffff',
  cardAlt:     '#f4eeff',
  cardLilac:   '#e7d1ff',
  // Buttons
  ctaBg:       '#43e8d8',
  ctaText:     '#0d3d38',
  ctaSecondary:'#e7d1ff',
  // Text
  textPrimary:   '#1a1a2e',
  textSecondary: '#5a5a7a',
  textMuted:     '#9999b8',
  textOnDark:    '#ffffff',
  // Accents
  accent:        '#43e8d8',
  accentPurple:  '#6b3991',
  accentBlue:    '#1d6a82',
  progress:      '#6b3991',
  highlight:     '#e7d1ff',
  // Nav
  navBg:         '#ffffff',
  navBorder:     'rgba(107,57,145,0.10)',
  navActive:     '#6b3991',
  navInactive:   '#9999b8',
  // Input
  inputBg:       '#f0eef8',
  // Borders
  border:        'rgba(107,57,145,0.10)',
  borderFocus:   '#43e8d8',
}

export const BOLD_THEME = {
  // Backgrounds
  bgPrimary:   '#1d2d44',
  bgSecondary: '#162236',
  // Cards
  cardBg:      '#243550',
  cardAlt:     '#c4eff2',
  cardLilac:   '#e7d1ff',
  // Buttons
  ctaBg:       '#43e8d8',
  ctaText:     '#0d3d38',
  ctaSecondary:'#c4eff2',
  // Text
  textPrimary:   '#f9f9f7',
  textSecondary: '#a8c5d8',
  textMuted:     '#6a8fa5',
  textOnDark:    '#ffffff',
  // Accents
  accent:        '#43e8d8',
  accentPurple:  '#c4eff2',
  accentBlue:    '#43e8d8',
  progress:      '#43e8d8',
  highlight:     '#c4eff2',
  // Nav
  navBg:         '#162236',
  navBorder:     'rgba(196,239,242,0.12)',
  navActive:     '#43e8d8',
  navInactive:   '#6a8fa5',
  // Input
  inputBg:       '#1a2840',
  // Borders
  border:        'rgba(196,239,242,0.12)',
  borderFocus:   '#43e8d8',
}

export type Theme = typeof SOFT_THEME

const ThemeContext = createContext<{ theme: Theme; isBold: boolean }>({
  theme: SOFT_THEME,
  isBold: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const user   = useAuthStore((s) => s.user)
  const isBold = user?.personalityVibe === 'Bold'
  const theme  = isBold ? BOLD_THEME : SOFT_THEME

  useEffect(() => {
    const root = document.documentElement
    // Inject theme tokens as CSS variables
    root.style.setProperty('--theme-bg',           theme.bgPrimary)
    root.style.setProperty('--theme-bg2',          theme.bgSecondary)
    root.style.setProperty('--theme-card',         theme.cardBg)
    root.style.setProperty('--theme-card-alt',     theme.cardAlt)
    root.style.setProperty('--theme-accent',       theme.accent)
    root.style.setProperty('--theme-purple',       theme.accentPurple)
    root.style.setProperty('--theme-text',         theme.textPrimary)
    root.style.setProperty('--theme-text2',        theme.textSecondary)
    root.style.setProperty('--theme-muted',        theme.textMuted)
    root.style.setProperty('--theme-nav-bg',       theme.navBg)
    root.style.setProperty('--theme-nav-border',   theme.navBorder)
    root.style.setProperty('--theme-nav-active',   theme.navActive)
    root.style.setProperty('--theme-nav-inactive', theme.navInactive)
    root.style.setProperty('--theme-input-bg',     theme.inputBg)
    root.style.setProperty('--theme-border',       theme.border)

    const rootEl = document.getElementById('root')
    if (rootEl) rootEl.style.backgroundColor = theme.bgPrimary
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