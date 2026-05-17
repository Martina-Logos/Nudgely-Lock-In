import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../../lib/theme'

const NAV_ITEMS = [
  {
    path:  '/dashboard',
    label: 'Home',
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
          fill={active ? color : 'none'}
          stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    path:  '/tasks',
    label: 'Tasks',
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 11L12 14L22 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H16"
          stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          fill={active ? `${color}22` : 'none'} />
      </svg>
    ),
  },
  {
    path:  '/brain-beats',
    label: 'Brain',
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.5 2 6 4.5 6 7.5C6 9 6.5 10.3 7.5 11.3C6.6 12 6 13.1 6 14.5C6 17 7.8 19 10 19.5V22H14V19.5C16.2 19 18 17 18 14.5C18 13.1 17.4 12 16.5 11.3C17.5 10.3 18 9 18 7.5C18 4.5 15.5 2 12 2Z"
          fill={active ? `${color}33` : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    path:  '/self-awareness',
    label: 'Journal',
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          fill={active ? `${color}22` : 'none'} stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M8 10H16M8 14H12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    path:  '/profile',
    label: 'Profile',
    icon: (active: boolean, color: string) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" fill={active ? `${color}33` : 'none'}
          stroke={color} strokeWidth="2" />
        <path d="M4 20C4 17 7.6 15 12 15C16.4 15 20 17 20 20"
          stroke={color} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function BottomNav() {
  const navigate  = useNavigate()
  const location  = useLocation()
  const { theme } = useTheme()

  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50"
      style={{
        backgroundColor: theme.navBg,
        borderTop: `1px solid ${theme.navBorder}`,
        paddingBottom: 'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path ||
            (item.path === '/brain-beats' && ['/brain-beats', '/meditation', '/scramble'].includes(location.pathname))
          const color = isActive ? theme.navActive : theme.navInactive

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-200 active:scale-95"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {item.icon(isActive, color)}
              <span
                className="text-[10px] font-semibold transition-colors duration-200"
                style={{ color }}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}