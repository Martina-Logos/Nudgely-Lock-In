import dotenv from 'dotenv'
dotenv.config()

function requireEnv(key: string): string {
  const value = process.env[key]
  if (!value) throw new Error(`Missing required environment variable: ${key}`)
  return value
}

function optionalEnv(key: string, fallback: string): string {
  return process.env[key] || fallback
}

export const env = {
  // Server
  PORT:         parseInt(optionalEnv('PORT', '3000'), 10),
  NODE_ENV:     optionalEnv('NODE_ENV', 'development'),
  isProduction: process.env.NODE_ENV === 'production',

  // Database
  DATABASE_URL: requireEnv('DATABASE_URL'),

  // JWT
  JWT_ACCESS_SECRET:      requireEnv('JWT_ACCESS_SECRET'),
  JWT_REFRESH_SECRET:     requireEnv('JWT_REFRESH_SECRET'),
  JWT_ACCESS_EXPIRES_IN:  optionalEnv('JWT_ACCESS_EXPIRES_IN', '15m'),
  JWT_REFRESH_EXPIRES_IN: optionalEnv('JWT_REFRESH_EXPIRES_IN', '7d'),

  // Email
  SMTP_HOST: optionalEnv('SMTP_HOST', 'sandbox.smtp.mailtrap.io'),
  SMTP_PORT: parseInt(optionalEnv('SMTP_PORT', '2525'), 10),
  SMTP_USER: optionalEnv('SMTP_USER', ''),
  SMTP_PASS: optionalEnv('SMTP_PASS', ''),
  SMTP_FROM: optionalEnv('SMTP_FROM', 'noreply@nudgely.app'),

  // Client
  CLIENT_URL: optionalEnv('CLIENT_URL', 'http://localhost:5173'),

  // Anthropic
  ANTHROPIC_API_KEY: optionalEnv('ANTHROPIC_API_KEY', ''),
}