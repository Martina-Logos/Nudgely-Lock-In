import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Aurora from '../../components/layout/AppShell'
import { useTheme } from '../../lib/theme'
import { useAuthStore } from '../../stores/authStore'
import { userApi, authApi } from '../../lib/api'

// ── Constants ──────────────────────────────────────────────────────────────────
const TEMPERAMENT_INFO = {
  Sanguine:    { emoji: '☀️', desc: 'The Optimist',   color: '#F59E0B' },
  Choleric:    { emoji: '🔥', desc: 'The Driver',     color: '#EF4444' },
  Melancholic: { emoji: '🌊', desc: 'The Analyst',    color: '#3B82F6' },
  Phlegmatic:  { emoji: '🌿', desc: 'The Peacemaker', color: '#10B981' },
}

const FOCUS_TIME_OPTIONS = [
  { value: 'early-morning', label: 'Early Morning', sub: '5 – 8 am'    },
  { value: 'morning',       label: 'Morning',       sub: '8 – 12 pm'   },
  { value: 'afternoon',     label: 'Afternoon',     sub: '12 – 5 pm'   },
  { value: 'evening',       label: 'Evening',       sub: '5 – 9 pm'    },
  { value: 'night',         label: 'Night',         sub: '9 pm – late' },
]

const TIMEZONE_OPTIONS = [
  { value: 'Africa/Nairobi',      label: 'EAT',     sub: 'East Africa Time  UTC+3'     },
  { value: 'Africa/Lagos',        label: 'WAT',     sub: 'West Africa Time  UTC+1'     },
  { value: 'Africa/Cairo',        label: 'EET',     sub: 'Eastern Europe / Cairo  UTC+2'},
  { value: 'Africa/Accra',        label: 'GMT',     sub: 'Greenwich Mean Time  UTC+0'  },
  { value: 'Africa/Johannesburg', label: 'SAST',    sub: 'South Africa Time  UTC+2'    },
  { value: 'Europe/London',       label: 'GMT/BST', sub: 'United Kingdom  UTC+0/+1'    },
  { value: 'Europe/Paris',        label: 'CET',     sub: 'Central Europe  UTC+1/+2'    },
  { value: 'America/New_York',    label: 'EST',     sub: 'Eastern US  UTC-5/-4'        },
  { value: 'America/Chicago',     label: 'CST',     sub: 'Central US  UTC-6/-5'        },
  { value: 'America/Los_Angeles', label: 'PST',     sub: 'Pacific US  UTC-8/-7'        },
  { value: 'Asia/Dubai',          label: 'GST',     sub: 'Gulf Standard Time  UTC+4'   },
  { value: 'Asia/Kolkata',        label: 'IST',     sub: 'India  UTC+5:30'             },
  { value: 'Asia/Singapore',      label: 'SGT',     sub: 'Singapore  UTC+8'            },
  { value: 'Australia/Sydney',    label: 'AEST',    sub: 'Eastern Australia  UTC+10/+11'},
]

const ROLE_OPTIONS = [
  { value: 'student',      label: 'Student',      emoji: '🎓' },
  { value: 'freelancer',   label: 'Freelancer',   emoji: '💼' },
  { value: 'professional', label: 'Professional', emoji: '🏢' },
  { value: 'entrepreneur', label: 'Entrepreneur', emoji: '🚀' },
  { value: 'other',        label: 'Other',        emoji: '✨' },
]

type ActivePicker = 'name' | 'role' | 'focusTime' | 'timezone' | 'theme' | null

function getFocusLabel(val: string) {
  return FOCUS_TIME_OPTIONS.find(o => o.value === val)?.label || val || 'Not set'
}
function getTimezoneLabel(val: string) {
  return TIMEZONE_OPTIONS.find(o => o.value === val)?.label || val || 'UTC'
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ProfilePage() {
  const navigate        = useNavigate()
  const { theme, isBold } = useTheme()
  const user            = useAuthStore(s => s.user)
  const logout          = useAuthStore(s => s.logout)
  const setUser         = useAuthStore(s => s.setUser)

  // Local editable copies — initialised from store
  const [displayName, setDisplayName]   = useState(user?.displayName || '')
  const [nameInput, setNameInput]       = useState(user?.displayName || '')
  const [focusTime, setFocusTime]       = useState(user?.focusTime || 'morning')
  const [timezone, setTimezone]         = useState(user?.timezone || 'Africa/Nairobi')
  const [role, setRole]                 = useState(user?.role || 'student')
  const [vibe, setVibe]                 = useState<'Soft' | 'Bold'>(
    (user?.personalityVibe as 'Soft' | 'Bold') || 'Soft'
  )

  // UI
  const [activePicker, setActivePicker] = useState<ActivePicker>(null)
  const [saving, setSaving]             = useState(false)
  const [savedField, setSavedField]     = useState<string | null>(null)
  const [avatarLoading, setAvatarLoading] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState(false)
  const [error, setError]               = useState<string | null>(null)
  const fileRef                         = useRef<HTMLInputElement>(null)

  // ── Theme-aware tokens (same pattern as original) ─────────────────────────
  const textPrimary = isBold ? '#FFFFFF'                    : theme.textPrimary
  const textSub     = isBold ? 'rgba(255,255,255,0.50)'     : theme.textSecondary
  const textLabel   = isBold ? 'rgba(255,255,255,0.32)'     : '#A9BBB1'
  const cardBg      = isBold ? 'rgba(255,255,255,0.06)'     : '#FFFFFF'
  const cardBorder  = isBold ? 'rgba(255,255,255,0.08)'     : 'rgba(0,0,0,0.06)'
  const rowDiv      = isBold ? 'rgba(255,255,255,0.06)'     : '#F3EEF8'
  const cardShadow  = isBold ? '0 4px 28px rgba(0,0,0,0.30)' : '0 2px 20px rgba(116,77,131,0.07)'
  const hoverBg     = isBold ? 'rgba(255,255,255,0.04)'     : '#F8F4FF'
  const pickerBg    = isBold ? 'rgba(255,255,255,0.04)'     : '#FAFAFA'

  const temperament = user?.temperament
    ? TEMPERAMENT_INFO[user.temperament as keyof typeof TEMPERAMENT_INFO]
    : null

  // ── Save helper ───────────────────────────────────────────────────────────
  const saveField = async (patch: Record<string, any>, fieldKey: string) => {
    setSaving(true); setError(null)
    try {
      const { data } = await userApi.update(patch)
      setUser(data)
      setSavedField(fieldKey)
      setTimeout(() => setSavedField(null), 2000)
    } catch (e: any) {
      setError(e.response?.data?.message || 'Could not save. Try again.')
    } finally {
      setSaving(false)
    }
  }

  // ── Handlers ──────────────────────────────────────────────────────────────
  const commitName = async () => {
    const trimmed = nameInput.trim()
    if (!trimmed || trimmed === displayName) { setActivePicker(null); return }
    setDisplayName(trimmed)
    setActivePicker(null)
    await saveField({ displayName: trimmed }, 'displayName')
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 2 * 1024 * 1024) { setError('Image must be under 2 MB'); return }
    setAvatarLoading(true)
    const reader = new FileReader()
    reader.onload = async () => {
      await saveField({ avatarUrl: reader.result as string }, 'avatarUrl')
      setAvatarLoading(false)
    }
    reader.readAsDataURL(file)
  }

  const handleFocusTime = async (val: string) => {
    setFocusTime(val); setActivePicker(null)
    await saveField({ focusTime: val }, 'focusTime')
  }

  const handleTimezone = async (val: string) => {
    setTimezone(val); setActivePicker(null)
    await saveField({ timezone: val }, 'timezone')
  }

  const handleRole = async (val: string) => {
    setRole(val); setActivePicker(null)
    await saveField({ role: val }, 'role')
  }

  const handleTheme = async (val: 'Soft' | 'Bold') => {
    setVibe(val); setActivePicker(null)
    await saveField({ personalityVibe: val }, 'personalityVibe')
  }

  const handleLogout = async () => {
    try { await authApi.logout() } catch {}
    logout(); navigate('/')
  }

  const handleDelete = async () => {
    if (!deleteConfirm) { setDeleteConfirm(true); return }
    try { await userApi.delete(); logout(); navigate('/') } catch {
      setError('Could not delete account. Try again.')
      setDeleteConfirm(false)
    }
  }

  // ── Sub-components (scoped) ───────────────────────────────────────────────
  const Card = ({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{
      backgroundColor: cardBg, border: `1px solid ${cardBorder}`,
      borderRadius: 20, overflow: 'hidden', marginBottom: 14,
      boxShadow: cardShadow, ...style,
    }}>
      {children}
    </div>
  )

  const SectionLabel = ({ text }: { text: string }) => (
    <p style={{
      fontSize: 11, fontWeight: 700, letterSpacing: '0.09em',
      textTransform: 'uppercase', color: textLabel,
      padding: '16px 20px 12px', margin: 0,
      borderBottom: `1px solid ${rowDiv}`,
    }}>
      {text}
    </p>
  )

  // Pref row — now fully interactive
  const PrefRow = ({
    icon, label, value, open, onToggle, children, divider = true,
  }: {
    icon: string; label: string; value: string
    open?: boolean; onToggle: () => void
    children?: React.ReactNode; divider?: boolean
  }) => (
    <div>
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 20px', cursor: 'pointer',
          transition: 'background 0.15s',
          borderBottom: (open || divider) ? `1px solid ${rowDiv}` : 'none',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = hoverBg)}
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
          {savedField === label.toLowerCase().replace(' ', '') && (
            <span style={{ fontSize: 11, fontWeight: 700, color: '#43e8d8' }}>Saved ✓</span>
          )}
          <span style={{ fontSize: 13, color: textSub }}>{value}</span>
          <i
            className="ti ti-chevron-right"
            style={{
              fontSize: 14, color: textSub,
              transform: open ? 'rotate(90deg)' : 'none',
              transition: 'transform 0.2s ease',
            }}
          />
        </div>
      </div>

      {/* Inline picker panel */}
      {open && children && (
        <div style={{
          padding: '6px 14px 12px',
          backgroundColor: pickerBg,
          borderBottom: divider ? `1px solid ${rowDiv}` : 'none',
          animation: 'pref-drop 0.18s ease',
        }}>
          {children}
        </div>
      )}
    </div>
  )

  const PickerOption = ({
    label, sub, selected, onSelect,
  }: { label: string; sub?: string; selected: boolean; onSelect: () => void }) => (
    <button
      onClick={onSelect}
      style={{
        width: '100%', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 12px', borderRadius: 10, marginBottom: 4,
        border: `1px solid ${selected ? `${theme.accent}40` : cardBorder}`,
        background: selected ? `${theme.accent}10` : 'transparent',
        cursor: 'pointer', fontFamily: 'inherit',
        transition: 'all 0.15s ease',
      }}
    >
      <span style={{ fontSize: 13.5, fontWeight: 600, color: selected ? theme.accent : textPrimary }}>
        {label}
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {sub && <span style={{ fontSize: 12, color: textSub }}>{sub}</span>}
        {selected && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
    </button>
  )

  const DangerRow = ({ icon, label, onClick, divider = false }: {
    icon: string; label: string; onClick: () => void; divider?: boolean
  }) => (
    <div
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '14px 20px',
        cursor: 'pointer', transition: 'background 0.15s',
        borderBottom: divider ? `1px solid ${rowDiv}` : 'none',
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
      <div>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#EF4444' }}>{label}</span>
        {icon === 'ti-trash' && deleteConfirm && (
          <p style={{ fontSize: 11.5, color: '#EF4444', opacity: 0.7, margin: '2px 0 0' }}>
            Tap again to confirm — this cannot be undone.
          </p>
        )}
      </div>
    </div>
  )

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <Aurora>
      <div style={{ backgroundColor: theme.bgPrimary, minHeight: '100vh', padding: '32px 24px 80px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <button
              onClick={() => navigate('/dashboard')}
              style={{
                width: 38, height: 38, borderRadius: '50%',
                border: `1px solid ${cardBorder}`, backgroundColor: cardBg,
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: cardShadow, flexShrink: 0,
              }}
            >
              <i className="ti ti-arrow-left" style={{ fontSize: 17, color: textPrimary }} />
            </button>
            <h1 style={{
              fontSize: 22, fontWeight: 700, margin: 0, color: textPrimary,
              fontFamily: '"DM Serif Display", serif',
            }}>
              Profile
            </h1>
          </div>

          {/* Error banner */}
          {error && (
            <div style={{
              background: '#fef2f2', border: '1px solid #fecaca',
              borderRadius: 12, padding: '10px 14px', marginBottom: 14,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <p style={{ fontSize: 13, color: '#dc2626', margin: 0 }}>{error}</p>
              <button onClick={() => setError(null)}
                style={{ background: 'none', border: 'none', color: '#dc2626', cursor: 'pointer', fontSize: 18, lineHeight: 1 }}>
                ×
              </button>
            </div>
          )}

          {/* ── Identity card ── */}
          <Card style={{ overflow: 'visible' }}>
            <div style={{ padding: '36px 24px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

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
                      {displayName?.[0]?.toUpperCase() || '?'}
                    </span>
                  )}
                  {avatarLoading && (
                    <div style={{
                      position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <i className="ti ti-loader animate-spin" style={{ color: '#fff', fontSize: 22 }} />
                    </div>
                  )}
                </div>
                <button
                  onClick={() => fileRef.current?.click()}
                  style={{
                    position: 'absolute', bottom: 2, right: 0,
                    width: 28, height: 28, borderRadius: '50%', border: 'none',
                    backgroundColor: theme.accent,
                    boxShadow: `0 2px 8px ${theme.accent}55`,
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <i className="ti ti-camera" style={{ fontSize: 13, color: '#fff' }} />
                </button>
                <input ref={fileRef} type="file" accept="image/*"
                  onChange={handleAvatarChange} style={{ display: 'none' }} />
              </div>

              {/* Name — tap pencil to edit */}
              <button
                onClick={() => { setNameInput(displayName); setActivePicker('name') }}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8,
                }}
              >
                <span style={{ fontSize: 22, fontWeight: 700, color: textPrimary, fontFamily: '"DM Serif Display", serif' }}>
                  {displayName || 'Your Name'}
                </span>
                <i className="ti ti-pencil" style={{ fontSize: 14, color: textSub }} />
              </button>

              <p style={{ fontSize: 14, color: textSub, margin: '0 0 14px' }}>
                {user?.email}
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
                {/* Role badge — tappable */}
                <button
                  onClick={() => setActivePicker(activePicker === 'role' ? null : 'role')}
                  style={{
                    fontSize: 12, fontWeight: 600, padding: '4px 14px',
                    borderRadius: 999, border: `1px solid ${theme.accent}28`,
                    backgroundColor: `${theme.accent}18`, color: theme.accent,
                    cursor: 'pointer', fontFamily: 'inherit',
                    display: 'flex', alignItems: 'center', gap: 5,
                  }}
                >
                  {ROLE_OPTIONS.find(r => r.value === role)?.emoji || '✨'}
                  {ROLE_OPTIONS.find(r => r.value === role)?.label || role}
                </button>

                <span style={{
                  fontSize: 12, fontWeight: 600, padding: '4px 14px', borderRadius: 999,
                  backgroundColor: isBold ? 'rgba(192,132,252,0.15)' : '#F3E8FF',
                  color: isBold ? '#C084FC' : '#744D83',
                  border: `1px solid ${isBold ? 'rgba(192,132,252,0.25)' : '#E9D5FF'}`,
                }}>
                  {vibe === 'Soft' ? '🌸 Soft' : '⚡ Bold'}
                </span>
              </div>

              {/* Role picker — appears inline below badges */}
              {activePicker === 'role' && (
                <div style={{
                  width: '100%', marginTop: 14, padding: '8px 0',
                  animation: 'pref-drop 0.18s ease',
                }}>
                  {ROLE_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      onClick={() => handleRole(opt.value)}
                      style={{
                        width: '100%', display: 'flex', alignItems: 'center', gap: 10,
                        padding: '10px 14px', borderRadius: 12, marginBottom: 5,
                        border: `1.5px solid ${role === opt.value ? `${theme.accent}40` : cardBorder}`,
                        background: role === opt.value ? `${theme.accent}10` : 'transparent',
                        cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                        transition: 'all 0.15s ease',
                      }}
                    >
                      <span style={{ fontSize: 18 }}>{opt.emoji}</span>
                      <span style={{ fontSize: 14, fontWeight: 600, color: role === opt.value ? theme.accent : textPrimary }}>
                        {opt.label}
                      </span>
                      {role === opt.value && (
                        <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <path d="M20 6L9 17l-5-5" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Card>

          {/* ── Cognitive Profile — READ ONLY ── */}
          {(user?.temperament || user?.iqScore !== undefined) && (
            <Card>
              <SectionLabel text="Cognitive Profile" />

              {user?.temperament && temperament && (
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '16px 20px', borderBottom: `1px solid ${rowDiv}`,
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 14,
                    backgroundColor: `${temperament.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 22, flexShrink: 0,
                  }}>
                    {temperament.emoji}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: textPrimary, margin: '0 0 2px' }}>
                      {user.temperament}
                    </p>
                    <p style={{ fontSize: 12, color: textSub, margin: 0 }}>{temperament.desc}</p>
                  </div>
                  {/* Lock icon = read-only signal */}
                  <i className="ti ti-lock" style={{ fontSize: 14, color: textLabel }} />
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
                    <p style={{ fontSize: 13, fontWeight: 700, color, margin: '0 0 3px' }}>{label}</p>
                    <p style={{ fontSize: 10, color: textSub, margin: 0, letterSpacing: '0.03em' }}>{desc}</p>
                  </div>
                ))}
              </div>

              <div style={{ padding: '0 20px 14px' }}>
                <p style={{ fontSize: 11.5, color: textLabel, fontStyle: 'italic', margin: 0 }}>
                  Cognitive scores are set during onboarding and cannot be changed.
                </p>
              </div>
            </Card>
          )}

          {/* ── Preferences — FULLY EDITABLE ── */}
          <Card>
            <SectionLabel text="Preferences" />

            {/* Focus Time */}
            <PrefRow
              icon="ti-target"
              label="Focus Time"
              value={getFocusLabel(focusTime)}
              open={activePicker === 'focusTime'}
              onToggle={() => setActivePicker(activePicker === 'focusTime' ? null : 'focusTime')}
              divider
            >
              {FOCUS_TIME_OPTIONS.map(opt => (
                <PickerOption
                  key={opt.value}
                  label={opt.label}
                  sub={opt.sub}
                  selected={focusTime === opt.value}
                  onSelect={() => handleFocusTime(opt.value)}
                />
              ))}
            </PrefRow>

            {/* Timezone */}
            <PrefRow
              icon="ti-world"
              label="Timezone"
              value={getTimezoneLabel(timezone)}
              open={activePicker === 'timezone'}
              onToggle={() => setActivePicker(activePicker === 'timezone' ? null : 'timezone')}
              divider
            >
              <div style={{ maxHeight: 220, overflowY: 'auto' }} className="no-scrollbar">
                {TIMEZONE_OPTIONS.map(opt => (
                  <PickerOption
                    key={opt.value}
                    label={opt.label}
                    sub={opt.sub}
                    selected={timezone === opt.value}
                    onSelect={() => handleTimezone(opt.value)}
                  />
                ))}
              </div>
            </PrefRow>

            {/* Theme */}
            <PrefRow
              icon="ti-palette"
              label="Theme"
              value={vibe}
              open={activePicker === 'theme'}
              onToggle={() => setActivePicker(activePicker === 'theme' ? null : 'theme')}
              divider={false}
            >
              {(['Soft', 'Bold'] as const).map(t => (
                <button
                  key={t}
                  onClick={() => handleTheme(t)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                    padding: '12px 14px', borderRadius: 12, marginBottom: 5,
                    border: `1.5px solid ${vibe === t ? `${theme.accent}40` : cardBorder}`,
                    background: vibe === t ? `${theme.accent}10` : 'transparent',
                    cursor: 'pointer', fontFamily: 'inherit', textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span style={{ fontSize: 18 }}>{t === 'Soft' ? '🌸' : '⚡'}</span>
                  <div>
                    <p style={{ fontSize: 13.5, fontWeight: 700, margin: 0, color: vibe === t ? theme.accent : textPrimary }}>
                      {t}
                    </p>
                    <p style={{ fontSize: 11.5, color: textSub, margin: 0 }}>
                      {t === 'Soft' ? 'Calm, Warm, Light tones' : 'Bold, Focused, Dark tones'}
                    </p>
                  </div>
                  {vibe === t && (
                    <svg style={{ marginLeft: 'auto' }} width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke={theme.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              ))}
            </PrefRow>
          </Card>

          {/* ── Account ── */}
          <Card>
            <SectionLabel text="Account" />
            <div
              onClick={() => navigate('/reports/weekly')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 20px', cursor: 'pointer', transition: 'background 0.15s',
                borderBottom: `1px solid ${rowDiv}`,
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = hoverBg)}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 10,
                  backgroundColor: `${theme.accent}14`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <i className="ti ti-chart-bar" style={{ fontSize: 16, color: theme.accent }} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color: textPrimary }}>Weekly Report</span>
              </div>
              <i className="ti ti-chevron-right" style={{ fontSize: 14, color: textSub }} />
            </div>
            <DangerRow icon="ti-logout" label="Sign Out"       onClick={handleLogout} divider />
            <DangerRow icon="ti-trash"  label="Delete Account" onClick={handleDelete} />
          </Card>

          <p style={{ textAlign: 'center', fontSize: 12, color: textLabel, marginTop: 8 }}>
            Nudgely Lock-In · Your focus, aligned.
          </p>
        </div>
      </div>

      {/* ── Name edit bottom sheet ── */}
      {activePicker === 'name' && (
        <div
          onClick={() => setActivePicker(null)}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(26,15,46,0.45)',
            backdropFilter: 'blur(4px)',
            zIndex: 300,
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            animation: 'pref-fade 0.2s ease',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: isBold ? theme.bgPrimary : '#FFFFFF',
              borderRadius: '22px 22px 0 0',
              padding: '20px 20px 40px',
              width: '100%', maxWidth: 480,
              animation: 'pref-slide-up 0.28s cubic-bezier(0.4,0,0.2,1)',
              border: `1px solid ${cardBorder}`,
              borderBottom: 'none',
            }}
          >
            <div style={{
              width: 36, height: 4, borderRadius: 9999,
              background: cardBorder, margin: '0 auto 18px',
            }} />
            <p style={{
              fontSize: 16, fontWeight: 700, color: textPrimary,
              fontFamily: '"DM Serif Display", serif', marginBottom: 14,
            }}>
              Edit name
            </p>
            <input
              autoFocus
              value={nameInput}
              onChange={e => setNameInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && commitName()}
              maxLength={40}
              placeholder="Your display name"
              style={{
                width: '100%',
                background: isBold ? 'rgba(255,255,255,0.06)' : '#F8F4FF',
                border: `1.5px solid ${cardBorder}`,
                borderRadius: 12, padding: '13px 16px',
                fontSize: 15, fontFamily: 'inherit',
                color: textPrimary, outline: 'none',
                marginBottom: 12,
                transition: 'border-color 0.18s ease',
              }}
            />
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => setActivePicker(null)}
                className="btn-secondary"
                style={{ flex: 1 }}
              >
                Cancel
              </button>
              <button
                onClick={commitName}
                disabled={saving}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pref-drop {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pref-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes pref-slide-up {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
      `}</style>
    </Aurora>
  )
}