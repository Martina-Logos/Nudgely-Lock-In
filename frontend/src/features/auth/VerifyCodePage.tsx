import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authApi } from '../../lib/api'
import { useOnboardingStore } from '../../stores/onboardingStore'
import { useAuthStore } from '../../stores/authStore'

function StepDots({ active }: { active: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-2.5 h-2.5 rounded-full transition-colors duration-300"
          style={{ backgroundColor: i <= active ? '#23BBB7' : '#C4B8CC', opacity: i > active ? 0.4 : 1 }} />
      ))}
    </div>
  )
}

export default function VerifyCodePage() {
  const navigate     = useNavigate()
  const email        = useOnboardingStore((s) => s.email)
  const setToken     = useAuthStore((s) => s.setToken)
  const setUser      = useAuthStore((s) => s.setUser)
  const setOnboarded = useAuthStore((s) => s.setOnboarded)

  const [digits, setDigits]       = useState(['', '', '', '', '', ''])
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState('')
  const [resent, setResent]       = useState(false)
  const [countdown, setCountdown] = useState(0)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => { inputRefs.current[0]?.focus() }, [])

  useEffect(() => {
    if (countdown > 0) {
      const t = setTimeout(() => setCountdown(c => c - 1), 1000)
      return () => clearTimeout(t)
    }
  }, [countdown])

  const handleChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    const newDigits = [...digits]
    newDigits[index] = digit
    setDigits(newDigits)
    if (digit && index < 5) inputRefs.current[index + 1]?.focus()
    if (digit && index === 5) {
      const code = [...newDigits.slice(0, 5), digit].join('')
      if (code.length === 6) handleVerify(code)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) inputRefs.current[index - 1]?.focus()
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted.length === 6) {
      setDigits(pasted.split(''))
      handleVerify(pasted)
    }
  }

  const handleVerify = async (code?: string) => {
    const otp = code || digits.join('')
    if (otp.length < 6) return
    setLoading(true); setError('')
    try {
      const { data } = await authApi.verifyOtp(email, otp)
      setToken(data.accessToken)
      setUser(data.user)
      setOnboarded(data.user.isOnboarded)
      navigate(data.user.isOnboarded ? '/dashboard' : '/onboarding/profile')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid or expired code.')
      setDigits(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    } finally {
      setLoading(false)
    }
  }

  const handleResend = async () => {
    if (countdown > 0) return
    try {
      await authApi.resendOtp(email)
      setResent(true); setCountdown(60)
      setTimeout(() => setResent(false), 3000)
    } catch {
      setError('Failed to resend code.')
    }
  }

  const allFilled = digits.every(d => d !== '')

  return (
    <div className="page-auth auth-page">
      <div className="auth-card verify-card">
        <div className="auth-card-header">
          <span className="text-xl font-bold" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>Nudgely</span>
          <StepDots active={1} />
        </div>

        <div className="auth-copy animate-slide-up">
          <h1 className="auth-title" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
            Verify your code
          </h1>
          <p className="auth-subtitle">
            We've sent a code to your email
            {email && <span className="verify-email"> {email}</span>}
          </p>
        </div>

        <div className="verify-code-panel animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="verify-code-inputs" onPaste={handlePaste}>
            {digits.map((digit, i) => (
              <input key={i} ref={(el) => { inputRefs.current[i] = el }}
                className={`otp-box ${digit ? 'filled' : ''} ${error ? 'error' : ''}`}
                type="text" inputMode="numeric" maxLength={1}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                disabled={loading} />
            ))}
          </div>
          <p className="verify-helper">We'll keep you signed in on this device.</p>
        </div>

        {error && (
          <div className="auth-error animate-fade-in">
            <p>{error}</p>
          </div>
        )}

        {resent && (
          <div className="verify-success animate-fade-in">
            <p>Code resent successfully!</p>
          </div>
        )}

        <div className="auth-actions animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary auth-primary-button" onClick={() => handleVerify()} disabled={!allFilled || loading}>
            {loading ? 'Verifying...' : 'Continue'}
          </button>
          <button className="verify-resend-button" onClick={handleResend} disabled={countdown > 0}>
            {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend code'}
          </button>
        </div>
      </div>
    </div>
  )
}
