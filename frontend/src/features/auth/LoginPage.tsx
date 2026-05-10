import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { authApi } from '../../lib/api'
import { useAuthStore } from '../../stores/authStore'

export default function LoginPage() {
  const navigate      = useNavigate()
  const setToken      = useAuthStore((s) => s.setToken)
  const setUser       = useAuthStore((s) => s.setUser)
  const setOnboarded  = useAuthStore((s) => s.setOnboarded)

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const isValid = email.includes('@') && password.length >= 1

  const handleLogin = async () => {
    if (!isValid) return
    setLoading(true); setError('')
    try {
      const { data } = await authApi.login(email, password)
      setToken(data.accessToken)
      setUser(data.user)
      if (data.user.isOnboarded) {
        setOnboarded(true)
        navigate('/dashboard')
      } else {
        navigate('/onboarding/profile')
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="page-auth">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-xl font-bold"
          style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
          Nudgely
        </span>
      </div>

      {/* Title */}
      <div className="mb-8 animate-slide-up">
        <h1 className="text-3xl font-bold mb-2"
          style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
          Welcome back
        </h1>
        <p className="text-sm" style={{ color: '#6B5878' }}>
          Sign in to continue your focus journey
        </p>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 mb-6 animate-slide-up"
        style={{ animationDelay: '0.1s' }}>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: '#6B5878' }}>
            Email address
          </label>
          <input className="input" type="email" placeholder="you@example.com"
            value={email} onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown} autoComplete="email" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: '#6B5878' }}>
            Password
          </label>
          <input className="input" type="password" placeholder="Your password"
            value={password} onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown} autoComplete="current-password" />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="rounded-xl p-3 mb-4 animate-fade-in"
          style={{ backgroundColor: '#FEE2E2', border: '1px solid #FECACA' }}>
          <p className="text-sm" style={{ color: '#EF4444' }}>{error}</p>
        </div>
      )}

      {/* CTA */}
      <div className="mt-auto flex flex-col gap-3 animate-slide-up"
        style={{ animationDelay: '0.2s' }}>
        <button className="btn-primary" onClick={handleLogin}
          disabled={!isValid || loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>

        <p className="text-center text-sm" style={{ color: '#9B8EA5' }}>
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold hover:underline"
            style={{ color: '#744D83' }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}