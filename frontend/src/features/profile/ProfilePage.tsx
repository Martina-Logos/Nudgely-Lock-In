import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import AppShell from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { useAuthStore } from '../../stores/authStore'
import { userApi, authApi } from '../../lib/api'

const TEMPERAMENT_INFO = {
  Sanguine:    { emoji: '☀️', desc: 'The Optimist',   color: '#F59E0B' },
  Choleric:    { emoji: '🔥', desc: 'The Driver',     color: '#EF4444' },
  Melancholic: { emoji: '🌊', desc: 'The Analyst',    color: '#3B82F6' },
  Phlegmatic:  { emoji: '🌿', desc: 'The Peacemaker', color: '#10B981' },
}

export default function ProfilePage() {
  const { theme, isBold } = useTheme()
  const navigate           = useNavigate()
  const user               = useAuthStore(s => s.user)
  const logout             = useAuthStore(s => s.logout)
  const setUser            = useAuthStore(s => s.setUser)

  const [editing, setEditing]         = useState(false)
  const [displayName, setDisplay]     = useState(user?.displayName || '')
  const [saving, setSaving]           = useState(false)
  const [avatarLoading, setAvatarLoading] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  const temperament = user?.temperament
    ? TEMPERAMENT_INFO[user.temperament as keyof typeof TEMPERAMENT_INFO]
    : null

  // ─── Theme-aware tokens ────────────────────────────────────────────────────
  const textPrimary  = isBold ? '#FFFFFF'                    : theme.textPrimary
  const textSub      = isBold ? 'rgba(255,255,255,0.50)'     : theme.textSecondary
  const textLabel    = isBold ? 'rgba(255,255,255,0.32)'     : '#A9BBB1'
  const cardBg       = isBold ? 'rgba(255,255,255,0.06)'     : '#FFFFFF'
  const cardBorder   = isBold ? 'rgba(255,255,255,0.08)'     : 'rgba(0,0,0,0.06)'
  const rowDivider   = isBold ? 'rgba(255,255,255,0.06)'     : '#F3EEF8'
  const cardShadow   = isBold ? '0 4px 28px rgba(0,0,0,0.30)' : '0 2px 20px rgba(116,77,131,0.07)'
  const hoverBg      = isBold ? 'rgba(255,255,255,0.04)'     : '#F8F4FF'

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!displayName.trim()) return
    setSaving(true)
    try {
      const { data } = await userApi.update({ displayName: displayName.trim() })
      setUser(data)
      setEditing(false)
    } catch { /* surface later */ } finally { setSaving(false) }
  }

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) { alert('Image must be under 2MB'); return }
    setAvatarLoading(true)
    const reader = new FileReader()
    reader.onload = async () => {
      try {
        const { data } = await userApi.update({ avatarUrl: reader.result as string })
        setUser(data)
      } catch { alert('Failed to update photo') } finally { setAvatarLoading(false) }
    }
    reader.readAsDataURL(file)
  }

  const handleLogout = async () => {
    try { await authApi.logout() } catch {}
    logout(); navigate('/')
  }

  const handleDelete = async () => {
    if (!window.confirm('Permanently delete your account and all data? This cannot be undone.')) return
    try { await userApi.delete(); logout(); navigate('/') } catch {}
  }

  // ─── Reusable row ─────────────────────────────────────────────────────────
  const PrefRow = ({
    icon, label, value, onClick, divider = true,
  }: { icon: string; label: string; value?: string; onClick?: () => void; divider?: boolean }) => (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px', cursor: onClick ? 'pointer' : 'default', transition: 'background 0.15s',
        borderBottom: divider ? `1px solid ${rowDivider}` : 'none',
      }}
      onMouseEnter={e => onClick && (e.currentTarget.style.backgroundColor = hoverBg)}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          backgroundColor: `${theme.accent}14`,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <i className={`ti ${icon}`} style={{ fontSize: 16, color: theme.accent }} />
        </div>
        <span style={{ fontSize: 14, fontWeight: 500, color: textPrimary }}>{label}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        {value && <span style={{ fontSize: 13, color: textSub }}>{value}</span>}
        {onClick && <i className="ti ti-chevron-right" style={{ fontSize: 14, color: textSub }} />}
      </div>
    </div>
  )

  const DangerRow = ({ icon, label, onClick, divider = false }: {
    icon: string; label: string; onClick: () => void; divider?: boolean
  }) => (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px',
        cursor: 'pointer', transition: 'background 0.15s',
        borderBottom: divider ? `1px solid ${rowDivider}` : 'none',
      }}
      onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(239,68,68,0.07)')}
      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <div style={{
        width: 36, height: 36, borderRadius: 10,
        backgroundColor: 'rgba(239,68,68,0.10)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <i className={`ti ${icon}`} style={{ fontSize: 16, color: '#EF4444' }} />
      </div>
      <span style={{ fontSize: 14, fontWeight: 600, color: '#EF4444' }}>{label}</span>
    </div>
  )

  // ─── Card wrapper ──────────────────────────────────────────────────────────
  const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
      backgroundColor: cardBg,
      border: `1px solid ${cardBorder}`,
      borderRadius: 20,
      overflow: 'hidden',
      marginBottom: 14,
      boxShadow: cardShadow,
      ...style,
    }}>
      {children}
    </div>
  )

  const SectionLabel = ({ text }: { text: string }) => (
    <p style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '0.09em',
      textTransform: 'uppercase', color: textLabel,
      padding: '18px 20px 12px', margin: 0,
      borderBottom: `1px solid ${rowDivider}`,
    }}>
      {text}
    </p>
  )

  return (
    <AppShell>
      <div style={{ backgroundColor: theme.bgPrimary, minHeight: '100vh', padding: '32px 24px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          {/* Page header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <button onClick={() => navigate('/dashboard')} style={{
              width: 38, height: 38, borderRadius: '50%', border: `1px solid ${cardBorder}`,
              backgroundColor: cardBg, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: cardShadow, flexShrink: 0,
            }}>
              <i className="ti ti-arrow-left" style={{ fontSize: 17, color: textPrimary }} />
            </button>
            <h1 style={{
              fontSize: 22, fontWeight: 700, margin: 0, color: textPrimary,
              fontFamily: '"DM Serif Display", serif',
            }}>
              Profile
            </h1>
          </div>

          {/* ── Profile header card ─────────────────────────────────────── */}
          <Card style={{ overflow: 'visible' }}>
            <div style={{
              padding: '36px 24px 28px',
              display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
            }}>
              {/* Avatar */}
              <div style={{ position: 'relative', marginBottom: 18 }}>
                <div
                  onClick={() => fileRef.current?.click()}
                  style={{
                    width: 92, height: 92, borderRadius: '50%',
                    backgroundColor: `${theme.accent}1A`,
                    border: `3px solid ${theme.accent}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', overflow: 'hidden', position: 'relative',
                  }}
                >
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt="avatar"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: 34, fontWeight: 800, color: theme.accent }}>
                      {user?.displayName?.[0]?.toUpperCase() || '?'}
                    </span>
                  )}
                  {avatarLoading && (
                    <div style={{
                      position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className="ti ti-loader" style={{ color: '#fff', fontSize: 22 }} />
                    </div>
                  )}
                </div>

                {/* Camera badge */}
                <button onClick={() => fileRef.current?.click()} style={{
                  position: 'absolute', bottom: 2, right: 0,
                  width: 28, height: 28, borderRadius: '50%', border: 'none',
                  backgroundColor: theme.accent,
                  boxShadow: `0 2px 8px ${theme.accent}55`,
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className="ti ti-camera" style={{ fontSize: 13, color: '#fff' }} />
                </button>

                <input
                  ref={fileRef} type="file" accept="image/*"
                  onChange={handleAvatarChange}
                  style={{ display: 'none' }}
                />
              </div>

              {/* Name */}
              {editing ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <input
                    value={displayName}
                    onChange={e => setDisplay(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSave()}
                    autoFocus
                    style={{
                      fontSize: 20, fontWeight: 700, textAlign: 'center',
                      backgroundColor: 'transparent',
                      border: `1.5px solid ${theme.accent}`,
                      borderRadius: 10, padding: '5px 14px',
                      color: textPrimary, outline: 'none',
                      fontFamily: '"DM Serif Display", serif', width: 170,
                    }}
                  />
                  <button onClick={handleSave} disabled={saving} style={{
                    padding: '6px 14px', borderRadius: 8, border: 'none',
                    backgroundColor: theme.accent, color: '#fff',
                    fontSize: 13, fontWeight: 600, cursor: 'pointer',
                  }}>
                    {saving ? '…' : 'Save'}
                  </button>
                  <button onClick={() => { setEditing(false); setDisplay(user?.displayName || '') }} style={{
                    padding: '6px 10px', borderRadius: 8, border: 'none',
                    backgroundColor: 'transparent', color: textSub,
                    cursor: 'pointer', fontSize: 13,
                  }}>
                    ✕
                  </button>
                </div>
              ) : (
                <button onClick={() => setEditing(true)} style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8,
                }}>
                  <span style={{
                    fontSize: 22, fontWeight: 700, color: textPrimary,
                    fontFamily: '"DM Serif Display", serif',
                  }}>
                    {user?.displayName || 'Your Name'}
                  </span>
                  <i className="ti ti-pencil" style={{ fontSize: 14, color: textSub }} />
                </button>
              )}

              <p style={{ fontSize: 14, color: textSub, margin: '0 0 14px', lineHeight: 1.4 }}>
                {user?.email}
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                {user?.role && (
                  <span style={{
                    fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 999,
                    backgroundColor: `${theme.accent}18`, color: theme.accent,
                    border: `1px solid ${theme.accent}28`,
                  }}>
                    {user.role}
                  </span>
                )}
                {user?.personalityVibe && (
                  <span style={{
                    fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 999,
                    backgroundColor: isBold ? 'rgba(192,132,252,0.15)' : '#F3E8FF',
                    color: isBold ? '#C084FC' : '#744D83',
                    border: `1px solid ${isBold ? 'rgba(192,132,252,0.25)' : '#E9D5FF'}`,
                  }}>
                    {user.personalityVibe === 'Soft' ? '🌸 Soft' : '⚡ Bold'}
                  </span>
                )}
              </div>
            </div>
          </Card>

          {/* ── Cognitive Profile ───────────────────────────────────────── */}
          {(user?.temperament || user?.iqScore !== undefined) && (
            <Card>
              <SectionLabel text="Cognitive Profile" />

              {user?.temperament && temperament && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px',
                  borderBottom: `1px solid ${rowDivider}`,
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    backgroundColor: `${temperament.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {temperament.emoji}
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 700, color: textPrimary, margin: '0 0 2px' }}>
                      {user.temperament}
                    </p>
                    <p style={{ fontSize: 12, color: textSub, margin: 0 }}>
                      {temperament.desc}
                    </p>
                  </div>
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, padding: '16px 20px' }}>
                {[
                  { label: 'IQ', value: user?.iqScore, color: '#744D83', desc: 'Intelligence' },
                  { label: 'EQ', value: user?.eqScore, color: '#23BBB7', desc: 'Emotional'   },
                  { label: 'SQ', value: user?.sqScore, color: '#23627C', desc: 'Social'       },
                ].map(({ label, value, color, desc }) => (
                  <div key={label} style={{
                    borderRadius: 14, padding: '16px 10px', textAlign: 'center',
                    backgroundColor: isBold ? `${color}18` : `${color}0D`,
                    border: `1px solid ${color}22`,
                  }}>
                    <p style={{ fontSize: 28, fontWeight: 800, color, margin: '0 0 2px', lineHeight: 1 }}>
                      {value ?? '—'}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 700, color, margin: '0 0 3px' }}>
                      {label}
                    </p>
                    <p style={{ fontSize: 10, color: textSub, margin: 0, letterSpacing: '0.03em' }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* ── Preferences ─────────────────────────────────────────────── */}
          <Card>
            <SectionLabel text="Preferences" />
            <PrefRow icon="ti-target"  label="Focus Time" value={user?.focusTime    || 'Not set'} onClick={() => {}} />
            <PrefRow icon="ti-world"   label="Timezone"   value={user?.timezone     || 'UTC'}     onClick={() => {}} />
            <PrefRow icon="ti-palette" label="Theme"      value={user?.personalityVibe || 'Soft'}  onClick={() => {}} divider={false} />
          </Card>

          {/* ── Account ─────────────────────────────────────────────────── */}
          <Card>
            <SectionLabel text="Account" />
            <PrefRow
              icon="ti-chart-bar" label="Weekly Report"
              onClick={() => navigate('/reports/weekly')}
            />
            <DangerRow icon="ti-logout" label="Sign Out"        onClick={handleLogout} divider />
            <DangerRow icon="ti-trash"  label="Delete Account"  onClick={handleDelete} />
          </Card>

          <p style={{ textAlign: 'center', fontSize: 12, color: textLabel, marginTop: 8 }}>
            Nudgely v1.0 · Your focus, aligned.
          </p>
        </div>
      </div>
    </AppShell>
  )
}