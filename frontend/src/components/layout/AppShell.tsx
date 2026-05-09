import BottomNav from './BottomNav'
import { useTheme } from '../../lib/theme'

interface AppShellProps {
  children: React.ReactNode
  hideNav?: boolean
}

export default function AppShell({ children, hideNav = false }: AppShellProps) {
  const { theme } = useTheme()

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: theme.bgPrimary }}
    >
      <main className="flex-1 pb-20">
        {children}
      </main>
      {!hideNav && <BottomNav />}
    </div>
  )
}