import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { useAuthStore } from '../../stores/authStore'
import { userApi, authApi } from '../../lib/api'

const TEMPERAMENT_INFO: Record<string, { emoji: string; desc: string }> = {
  Sanguine:    { emoji: '☀️', desc: 'The Optimist' },
  Choleric:    { emoji: '🔥', desc: 'The Driver' },
  Melancholic: { emoji: '🌊', desc: 'The Analyst' },
  Phlegmatic:  { emoji: '🌿', desc: 'The Peacemaker' },
}

function SettingRow({ icon, label, value, onPress, danger = false, theme }: {
  icon: string; label: string; value?: string
  onPress: () => void; danger?: boolean; theme: any
}) {
  return (
    <button onClick={onPress}
      className="w-full flex items-center justify-between px-4 py-4 transition-all active:opacity-70"
      style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
      <div className="flex items-center gap-3">
        <span className="text-xl w-8 text-center">{icon}</span>
        <span className="text-sm font-medium" style={{ color: danger ? '#EF4444' : theme.textPrimary }}>
          {label}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {value && <span className="text-xs" style={{ color: theme.textSecondary }}>{value}</span>}
        {!danger && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </div>
    </button>
  )
}

export default function ProfilePage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()
  const user               = useAuthStore((s) => s.user)
  const logout             = useAuthStore((s) => s.logout)

  const [editing, setEditing]     = useState(false)
  const [displayName, setDisplay] = useState(user?.displayName || '')
  const [saving, setSaving]       = useState(false)

  const temperamentData = user?.temperament ? TEMPERAMENT_INFO[user.temperament] : null

  const handleSave = async () => {
    setSaving(true)
    try {
      await userApi.update({ displayName })
      setEditing(false)
    } catch {}
    finally { setSaving(false) }
  }

  const handleLogout = async () => {
    try { await authApi.logout() } catch {}
    logout()
    navigate('/')
  }

  const handleDeleteAccount = async () => {
    if (!window.confirm('Are you sure? This will permanently delete your account and all data.')) return
    try {
      await userApi.delete()
      logout()
      navigate('/')
    } catch {}
  }

  return (
    <AppShell>
      <div className="px-5 pt-6" style={{ backgroundColor: theme.bgPrimary }}>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate('/dashboard')}
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ backgroundColor: theme.cardBg, border: 'none', cursor: 'pointer' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke={theme.textPrimary} strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <h1 className="text-xl font-bold"
            style={{ color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
            Profile
          </h1>
        </div>

        {/* Avatar + name */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-3"
            style={{ backgroundColor: `${theme.accent}20`, border: `3px solid ${theme.accent}` }}>
            {user?.avatarUrl ? (
              <img src={user.avatarUrl} alt="Avatar" className="w-full h-full rounded-full object-cover" />
            ) : (
              <span>{user?.displayName?.[0]?.toUpperCase() || '?'}</span>
            )}
          </div>

          {editing ? (
            <div className="flex items-center gap-2 w-full max-w-[200px]">
              <input className="input text-center py-2 text-base font-bold flex-1"
                value={displayName} onChange={e => setDisplay(e.target.value)} />
              <button onClick={handleSave} disabled={saving}
                className="px-3 py-2 rounded-xl text-xs font-bold"
                style={{ backgroundColor: theme.accent, color: '#FFFFFF', border: 'none', cursor: 'pointer' }}>
                {saving ? '...' : 'Save'}
              </button>
            </div>
          ) : (
            <button onClick={() => setEditing(true)}
              className="flex items-center gap-2"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <h2 className="text-xl font-bold"
                style={{ color: isBold ? '#FFFFFF' : theme.textPrimary, fontFamily: '"DM Serif Display", serif' }}>
                {user?.displayName}
              </h2>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M11 4H4C3.47 4 2.96 4.21 2.59 4.59C2.21 4.96 2 5.47 2 6V20C2 20.53 2.21 21.04 2.59 21.41C2.96 21.79 3.47 22 4 22H18C18.53 22 19.04 21.79 19.41 21.41C19.79 21.04 20 20.53 20 18V11"
                  stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round" />
                <path d="M18.5 2.5C18.89 2.11 19.42 1.89 19.97 1.89C20.52 1.89 21.06 2.11 21.44 2.5C21.83 2.88 22.05 3.42 22.05 3.97C22.05 4.52 21.83 5.05 21.44 5.44L12 15L8 16L9 12L18.5 2.5Z"
                  stroke={theme.textSecondary} strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}

          <p className="text-sm mt-1" style={{ color: theme.textSecondary }}>{user?.email}</p>

          {/* Role + vibe badges */}
          <div className="flex items-center gap-2 mt-2">
            {user?.role && (
              <span className="text-xs px-3 py-1 rounded-full font-semibold"
                style={{ backgroundColor: `${theme.accent}20`, color: theme.accent }}>
                {user.role}
              </span>
            )}
            {user?.personalityVibe && (
              <span className="text-xs px-3 py-1 rounded-full font-semibold"
                style={{ backgroundColor: `${theme.progress}20`, color: theme.progress }}>
                {user.personalityVibe === 'Soft' ? '🌸 Soft' : '⚡ Bold'}
              </span>
            )}
          </div>
        </div>

        {/* Cognitive profile card */}
        {(user?.temperament || user?.iqScore !== undefined) && (
          <div className="rounded-2xl p-4 mb-4"
            style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
            <p className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: theme.textSecondary }}>Cognitive Profile</p>

            {user?.temperament && temperamentData && (
              <div className="flex items-center gap-3 mb-3 pb-3 border-b" style={{ borderColor: theme.navBorder }}>
                <span className="text-2xl">{temperamentData.emoji}</span>
                <div>
                  <p className="text-sm font-bold" style={{ color: theme.textPrimary }}>{user.temperament}</p>
                  <p className="text-xs" style={{ color: theme.textSecondary }}>{temperamentData.desc}</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'IQ', value: user?.iqScore, color: '#744D83' },
                { label: 'EQ', value: user?.eqScore, color: '#23BBB7' },
                { label: 'SQ', value: user?.sqScore, color: '#23627C' },
              ].map(({ label, value, color }) => (
                <div key={label} className="rounded-xl p-3 text-center"
                  style={{ backgroundColor: `${color}15` }}>
                  <p className="text-lg font-bold" style={{ color }}>{value ?? '—'}</p>
                  <p className="text-xs font-semibold" style={{ color: theme.textSecondary }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Settings sections */}
        <div className="rounded-2xl overflow-hidden mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider px-4 pt-4 pb-2"
            style={{ color: theme.textSecondary }}>Preferences</p>
          <div className="divide-y" style={{ borderColor: theme.navBorder }}>
            <SettingRow icon="🎯" label="Focus Time"
              value={user?.focusTime || 'Not set'} onPress={() => {}} theme={theme} />
            <SettingRow icon="🌍" label="Timezone"
              value={user?.timezone || 'UTC'} onPress={() => {}} theme={theme} />
            <SettingRow icon="🎨" label="Theme"
              value={user?.personalityVibe || 'Soft'} onPress={() => {}} theme={theme} />
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden mb-4"
          style={{ backgroundColor: theme.cardBg, boxShadow: '0 2px 12px rgba(116,77,131,0.08)' }}>
          <p className="text-xs font-semibold uppercase tracking-wider px-4 pt-4 pb-2"
            style={{ color: theme.textSecondary }}>Account</p>
          <div className="divide-y" style={{ borderColor: theme.navBorder }}>
            <SettingRow icon="📊" label="Weekly Report"
              onPress={() => navigate('/reports/weekly')} theme={theme} />
            <SettingRow icon="🚪" label="Sign Out"
              onPress={handleLogout} theme={theme} />
            <SettingRow icon="🗑️" label="Delete Account"
              onPress={handleDeleteAccount} danger theme={theme} />
          </div>
        </div>

        {/* Version */}
        <p className="text-center text-xs pb-6 mt-2" style={{ color: theme.textSecondary }}>
          Nudgely v1.0 · Your focus, aligned.
        </p>
      </div>
    </AppShell>
  )
}