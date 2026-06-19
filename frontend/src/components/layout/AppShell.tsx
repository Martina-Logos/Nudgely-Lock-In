import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTheme } from '../../lib/theme'
import { useAuthStore } from '../../stores/authStore'
import { NudgePanel, NudgeFloatingButton } from '../../features/assistant/NudgePanel'

// ─── Nav items ────────────────────────────────────────────────────────────────
const NAV_MAIN = [
  { path: '/dashboard', label: 'Dashboard', icon: 'ti-home' },
  { path: '/tasks', label: 'Tasks', icon: 'ti-checks' },
  { path: '/habits', label: 'Habits', icon: 'ti-repeat' },
  { path: '/self-awareness', label: 'Journal', icon: 'ti-notebook' },
]

const NAV_FOCUS = [
  { path: '/brain-beats', label: 'Brain Beats', icon: 'ti-brain' },
  { path: '/focus', label: 'Focus Mode', icon: 'ti-player-play' },
  { path: '/meditation', label: 'Meditation', icon: 'ti-spa' },
  { path: '/scramble', label: 'Scramble', icon: 'ti-puzzle' },
]

const NAV_INSIGHTS = [
  { path: '/reports/weekly', label: 'Weekly Report', icon: 'ti-chart-bar' },
]

const NAV_ASSISTANT = [
  { path: 'nudge', label: 'Ask Nudge', icon: 'ti-sparkles' },
  { path: '/about', label: 'About Nudgely'}
]

const ALL_NAV = [...NAV_MAIN, ...NAV_FOCUS, ...NAV_INSIGHTS, ...NAV_ASSISTANT]

// ─── Sidebar ──────────────────────────────────────────────────────────────────
function Sidebar({
  collapsed,
  onToggle,
  theme,
  Aurora,
  onOpenNudge,
  nudgePanelOpen,
}: {
  collapsed: boolean
  onToggle: () => void
  theme: any
  Aurora: boolean
  onOpenNudge: () => void
  nudgePanelOpen: boolean
}) {
  const navigate = useNavigate()
  const location = useLocation()
  const user = useAuthStore((s) => s.user)

  const isActive = (path: string) =>
    location.pathname === path ||
    (path === '/brain-beats' &&
      ['/brain-beats', '/meditation', '/scramble'].includes(location.pathname))

  const sidebarBg = Aurora ? '#1B4E63' : '#FFFFFF'
  const borderColor = Aurora ? '#23627C' : '#E3DBE6'
  const labelColor = Aurora ? '#A7C7D1' : '#9B8EA5'
  const textColor = Aurora ? '#FFFFFF' : '#6B5878'
  const activeColor = Aurora ? '#23BBB7' : '#744D83'
  const activeBg = Aurora ? 'rgba(35,187,183,0.15)' : '#EDE8F5'
  const hoverBg = Aurora ? 'rgba(255,255,255,0.06)' : '#F5F2F8'

  function NavItem({ item }: { item: typeof NAV_MAIN[0] }) {
    const active = isActive(item.path)

    return (
      <button
        onClick={() => navigate(item.path)}
        title={collapsed ? item.label : undefined}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: collapsed ? 0 : 10,
          padding: collapsed ? '10px 0' : '9px 12px',
          justifyContent: collapsed ? 'center' : 'flex-start',
          borderRadius: 10,
          border: 'none',
          cursor: 'pointer',
          backgroundColor: active ? activeBg : 'transparent',
          color: active ? activeColor : textColor,
          fontWeight: active ? 600 : 500,
          fontSize: 13,
          transition: 'all 0.15s',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        onMouseEnter={(e) => {
          if (!active)
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = hoverBg
        }}
        onMouseLeave={(e) => {
          if (!active)
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              'transparent'
        }}
      >
        <i
          className={`ti ${item.icon}`}
          aria-hidden="true"
          style={{
            fontSize: 18,
            color: active ? activeColor : labelColor,
            flexShrink: 0,
            width: 20,
            textAlign: 'center',
          }}
        />

        {!collapsed && (
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {item.label}
          </span>
        )}
      </button>
    )
  }

  return (
    <aside
      style={{
        width: collapsed ? 56 : 220,
        flexShrink: 0,
        backgroundColor: sidebarBg,
        borderRight: `1px solid ${borderColor}`,
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.25s ease',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Collapse toggle */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-end',
          padding: collapsed ? '12px 0' : '12px 12px',
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <button
          onClick={onToggle}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            border: `1px solid ${borderColor}`,
            backgroundColor: 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: labelColor,
            transition: 'all 0.15s',
          }}
        >
          <i
            className={`ti ${
              collapsed ? 'ti-layout-sidebar-right' : 'ti-layout-sidebar'
            }`}
            style={{ fontSize: 15 }}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Nav sections */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: '8px 8px',
        }}
      >
        {!collapsed && (
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: labelColor,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '6px 4px 4px',
            }}
          >
            Main
          </p>
        )}

        {collapsed && <div style={{ height: 8 }} />}

        {NAV_MAIN.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}

        <div style={{ height: collapsed ? 8 : 0 }} />

        {!collapsed && (
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: labelColor,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '12px 4px 4px',
            }}
          >
            Focus
          </p>
        )}

        {collapsed && (
          <div
            style={{
              width: '100%',
              height: 1,
              backgroundColor: borderColor,
              margin: '6px 0',
            }}
          />
        )}

        {NAV_FOCUS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}

        <div style={{ height: collapsed ? 8 : 0 }} />

        {!collapsed && (
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: labelColor,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '12px 4px 4px',
            }}
          >
            Insights
          </p>
        )}

        {collapsed && (
          <div
            style={{
              width: '100%',
              height: 1,
              backgroundColor: borderColor,
              margin: '6px 0',
            }}
          />
        )}

        {NAV_INSIGHTS.map((item) => (
          <NavItem key={item.path} item={item} />
        ))}

        {/* Assistant section */}
        <div style={{ height: collapsed ? 8 : 0 }} />

        {!collapsed && (
          <p
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: labelColor,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '12px 4px 4px',
            }}
          >
            Assistant
          </p>
        )}

        {collapsed && (
          <div
            style={{
              width: '100%',
              height: 1,
              backgroundColor: borderColor,
              margin: '6px 0',
            }}
          />
        )}

        {NAV_ASSISTANT.map((item) => {
          const active = nudgePanelOpen

          return (
            <button
              key={item.path}
              onClick={onOpenNudge}
              title={collapsed ? item.label : undefined}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: collapsed ? 0 : 10,
                padding: collapsed ? '10px 0' : '9px 12px',
                justifyContent: collapsed ? 'center' : 'flex-start',
                borderRadius: 10,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: active ? activeBg : 'transparent',
                color: active ? activeColor : textColor,
                fontWeight: active ? 600 : 500,
                fontSize: 13,
                transition: 'all 0.15s',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                if (!active)
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    hoverBg
              }}
              onMouseLeave={(e) => {
                if (!active)
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    'transparent'
              }}
            >
              <i
                className={`ti ${item.icon}`}
                aria-hidden="true"
                style={{
                  fontSize: 18,
                  color: active ? activeColor : labelColor,
                  flexShrink: 0,
                  width: 20,
                  textAlign: 'center',
                }}
              />

              {!collapsed && (
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item.label}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* User section */}
      <div
        style={{
          borderTop: `1px solid ${borderColor}`,
          padding: '10px 8px',
        }}
      >
        <button
          onClick={() => navigate('/profile')}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: collapsed ? 0 : 8,
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: collapsed ? '6px 0' : '8px',
            borderRadius: 10,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              hoverBg
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLButtonElement).style.backgroundColor =
              'transparent'
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              backgroundColor: Aurora
                ? 'rgba(35,187,183,0.2)'
                : '#EDE8F5',
              border: `2px solid ${activeColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 700,
              color: activeColor,
              flexShrink: 0,
            }}
          >
            {user?.displayName?.[0]?.toUpperCase() || '?'}
          </div>

          {!collapsed && (
            <div
              style={{
                textAlign: 'left',
                overflow: 'hidden',
                flex: 1,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: Aurora ? '#FFFFFF' : '#744D83',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {user?.displayName || 'User'}
              </p>

              <p style={{ fontSize: 10, color: labelColor }}>
                {user?.personalityVibe === 'Bold'
                  ? 'Bold theme'
                  : 'Soft theme'}
              </p>
            </div>
          )}

          {!collapsed && (
            <i
              className="ti ti-settings"
              style={{
                fontSize: 14,
                color: labelColor,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
          )}
        </button>
      </div>
    </aside>
  )
}

// ─── Bottom nav (mobile only) ─────────────────────────────────────────────────
function BottomNav({ theme }: { theme: any }) {
  const navigate = useNavigate()
  const location = useLocation()

  const BOTTOM_ITEMS = [
    { path: '/dashboard', icon: 'ti-home', label: 'Home' },
    { path: '/tasks', icon: 'ti-checks', label: 'Tasks' },
    { path: '/brain-beats', icon: 'ti-brain', label: 'Brain' },
    { path: '/self-awareness', icon: 'ti-notebook', label: 'Journal' },
    { path: '/profile', icon: 'ti-user', label: 'Profile' },
  ]

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: 430,
        backgroundColor: theme.navBg,
        borderTop: `1px solid ${theme.navBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '6px 8px calc(6px + env(safe-area-inset-bottom, 0px))',
        zIndex: 50,
      }}
    >
      {BOTTOM_ITEMS.map((item) => {
        const active =
          location.pathname === item.path ||
          (item.path === '/brain-beats' &&
            ['/brain-beats', '/meditation', '/scramble'].includes(
              location.pathname
            ))

        const color = active ? theme.navActive : theme.navInactive

        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              padding: '4px 12px',
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              borderRadius: 12,
            }}
          >
            <i
              className={`ti ${item.icon}`}
              style={{ fontSize: 22, color }}
              aria-hidden="true"
            />

            <span
              style={{
                fontSize: 10,
                fontWeight: 600,
                color,
              }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

// ─── Top bar (desktop) ────────────────────────────────────────────────────────
function TopBar({ theme, Aurora }: { theme: any; Aurora: boolean }) {
  const navigate = useNavigate()
  const user = useAuthStore((s) => s.user)

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })

  const barBg = Aurora ? '#23627C' : '#FFFFFF'
  const barBorder = Aurora ? '#1B4E63' : '#E3DBE6'
  const textPri = Aurora ? '#FFFFFF' : '#2D1F35'
  const textSec = Aurora ? '#A7C7D1' : '#8E7A99'

  return (
    <header
      style={{
        height: 54,
        backgroundColor: barBg,
        borderBottom: `1px solid ${barBorder}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        flexShrink: 0,
      }}
    >
      <div>
        <span
          style={{
            fontSize: 17,
            fontWeight: 700,
            color: textPri,
            fontFamily: '"DM Serif Display", serif',
          }}
        >
          Nudgely
        </span>

        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: theme.accent,
            marginLeft: 4,
          }}
        >
          Lock-In
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: textSec,
          }}
        >
          {today}
        </span>

        <button
          onClick={() => navigate('/profile')}
          style={{
            width: 34,
            height: 34,
            borderRadius: '50%',
            backgroundColor: Aurora
              ? 'rgba(35,187,183,0.2)'
              : '#EDE8F5',
            border: `2px solid ${theme.accent}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 13,
            fontWeight: 700,
            color: theme.accent,
            cursor: 'pointer',
          }}
        >
          {user?.displayName?.[0]?.toUpperCase() || '?'}
        </button>
      </div>
    </header>
  )
}

// ─── Main Aurora ─────────────────────────────────────────────────────────────
interface AuroraProps {
  children: React.ReactNode
  hideNav?: boolean
}

export default function Aurora({
  children,
  hideNav = false,
}: AuroraProps) {
  const { theme, Aurora } = useTheme()

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768)
  const [sidebarCollapsed, setSidebar] = useState(false)

  // NEW
  const [nudgePanelOpen, setNudgePanelOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const handler = () => setIsDesktop(window.innerWidth >= 768)

    window.addEventListener('resize', handler)

    return () => window.removeEventListener('resize', handler)
  }, [])

  // ── Desktop layout ──────────────────────────────────────────────────────────
  if (isDesktop) {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          width: '100%',
          backgroundColor: theme.bgPrimary,
          overflow: 'hidden',
        }}
      >
        <TopBar theme={theme} Aurora={Aurora} />

        <div
          style={{
            display: 'flex',
            flex: 1,
            overflow: 'hidden',
          }}
        >
          {!hideNav && (
            <Sidebar
              collapsed={sidebarCollapsed}
              onToggle={() => setSidebar((c) => !c)}
              theme={theme}
              Aurora={Aurora}
              onOpenNudge={() => setNudgePanelOpen(true)}
              nudgePanelOpen={nudgePanelOpen}
            />
          )}

          {/* Content area */}
          <main
            style={{
              flex: 1,
              overflowY: 'auto',
              backgroundColor: theme.bgPrimary,
            }}
          >
            {/* Inner max-width container */}
            <div
              style={{
                maxWidth: 1100,
                margin: '0 auto',
                padding: '24px 28px 40px',
              }}
            >
              {children}
            </div>
          </main>
        </div>

        {/* Nudge Assistant */}
        {!hideNav && (
          <NudgeFloatingButton
            onClick={() => setNudgePanelOpen((p) => !p)}
            unreadCount={unreadCount}
          />
        )}

        <NudgePanel
          isOpen={nudgePanelOpen}
          onClose={() => {
            setNudgePanelOpen(false)
            setUnreadCount(0)
          }}
          unreadCount={unreadCount}
        />
      </div>
    )
  }

  // ── Mobile layout ───────────────────────────────────────────────────────────
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.bgPrimary,
        paddingBottom: hideNav ? 0 : 72,
        width: '100%',
        maxWidth: 430,
        margin: '0 auto',
      }}
    >
      {children}

      {!hideNav && <BottomNav theme={theme} />}

      {/* Nudge Assistant */}
      {!hideNav && (
        <NudgeFloatingButton
          onClick={() => setNudgePanelOpen((p) => !p)}
          unreadCount={unreadCount}
        />
      )}

      <NudgePanel
        isOpen={nudgePanelOpen}
        onClose={() => {
          setNudgePanelOpen(false)
          setUnreadCount(0)
        }}
        unreadCount={unreadCount}
      />
    </div>
  )
}