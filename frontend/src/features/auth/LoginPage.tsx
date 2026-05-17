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
      const status = err.response?.status
      if (status === 401 || status === 403) {
        setError('Incorrect email or password. Please try again.')
      } else if (status === 404) {
        setError('No account found with that email.')
      } else {
        setError('Hang in there — something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <div className="page-auth auth-page">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-card-header">
          <span className="text-xl font-bold"
            style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
            Nudgely
          </span>
        </div>

        {/* Title */}
        <div className="auth-copy animate-slide-up">
          <h1 className="auth-title"
            style={{ color: '#744D83', fontFamily: '"DM Serif Display", serif' }}>
            Welcome back
          </h1>
          <p className="auth-subtitle">
            Sign in to continue your focus journey
          </p>
        </div>

        {/* Form */}
        <div className="auth-form animate-slide-up"
          style={{ animationDelay: '0.1s' }}>
          <div>
            <label className="auth-label">
              Email address
            </label>
            <input className="input" type="email" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown} autoComplete="email" />
          </div>

          <div>
            <label className="auth-label">
              Password
            </label>
            <input className="input" type="password" placeholder="Your password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown} autoComplete="current-password" />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="auth-error animate-fade-in">
            <p>{error}</p>
          </div>
        )}

        {/* CTA */}
        <div className="auth-actions animate-slide-up"
          style={{ animationDelay: '0.2s' }}>
          <button className="btn-primary auth-primary-button" onClick={handleLogin}
            disabled={!isValid || loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <p className="auth-switch">
            Don't have an account?{' '}
            <Link to="/signup">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
