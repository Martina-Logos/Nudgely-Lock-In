import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi } from '../../lib/api'
import { useOnboardingStore } from '../../stores/onboardingStore'

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

export default function SignUpPage() {
  const navigate          = useNavigate()
  const setProfileBasics  = useOnboardingStore((s) => s.setProfileBasics)

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const isValid = email.includes('@') && password.length >= 8 && password === confirm

  const handleSubmit = async () => {
    if (!isValid) return
    setLoading(true); setError('')
    try {
      await authApi.register(email, password)
      setProfileBasics({ name: '', username: '', email })
      navigate('/verify')
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-auth">
      <div className="flex items-center justify-between mb-8">
        <span className="text-xl font-bold" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>Nudgely</span>
        <StepDots active={0} />
      </div>

      <div className="mb-8 animate-slide-up">
        <h1 className="text-3xl font-bold mb-2" style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
          Create your account
        </h1>
        <p className="text-[#6B5878] text-sm">Start building better focus habits today</p>
      </div>

      <div className="flex flex-col gap-4 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div>
          <label className="block text-sm font-medium text-[#6B5878] mb-1.5">Email address</label>
          <input className="input" type="email" placeholder="you@example.com"
            value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6B5878] mb-1.5">Password</label>
          <input className="input" type="password" placeholder="Min. 8 characters"
            value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#6B5878] mb-1.5">Confirm password</label>
          <input className="input" type="password" placeholder="Repeat your password"
            value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" />
          {confirm && password !== confirm && (
            <p className="text-xs text-red-400 mt-1">Passwords don't match</p>
          )}
        </div>

        <div className="flex items-center gap-3 my-1">
          <div className="flex-1 h-px bg-[#E3DBE6]" />
          <span className="text-xs text-[#9B8EA5]">or continue with</span>
          <div className="flex-1 h-px bg-[#E3DBE6]" />
        </div>

        <button 
          className="w-full flex items-center justify-center gap-3 bg-white border border-[#E3DBE6] rounded-xl py-3.5 text-sm font-medium text-[#2D1F35] hover:border-[#23BBB7] transition-colors duration-200 max-h-12"
          onClick={() => window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`}>
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}

      <div className="mt-auto flex flex-col gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <button className="btn-primary" onClick={handleSubmit} disabled={!isValid || loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
        <p className="text-center text-sm text-[#9B8EA5]">
          Already have an account?{' '}
          <Link to="/login" className="text-[#744D83] font-semibold hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  )
}