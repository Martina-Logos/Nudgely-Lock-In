import dotenv from 'dotenv'
dotenv.config()

function require(key: string): string {
  const value = process.env[key]
  if (!value) throw new Error(`Missing required environment variable: ${key}`)
  return value
}

function optional(key: string, fallback: string): string {
  return process.env[key] || fallback
}

export const env = {
  // Server
  PORT:         parseInt(optional('PORT', '3000'), 10),
  NODE_ENV:     optional('NODE_ENV', 'development'),
  isProduction: process.env.NODE_ENV === 'production',

  // Database
  DATABASE_URL: require('DATABASE_URL'),

  // JWT
  JWT_ACCESS_SECRET:     require('JWT_ACCESS_SECRET'),
  JWT_REFRESH_SECRET:    require('JWT_REFRESH_SECRET'),
  JWT_ACCESS_EXPIRES_IN: optional('JWT_ACCESS_EXPIRES_IN', '15m'),
  JWT_REFRESH_EXPIRES_IN:optional('JWT_REFRESH_EXPIRES_IN', '7d'),

  // Email
  SMTP_HOST: optional('SMTP_HOST', 'sandbox.smtp.mailtrap.io'),
  SMTP_PORT: parseInt(optional('SMTP_PORT', '2525'), 10),
  SMTP_USER: optional('SMTP_USER', ''),
  SMTP_PASS: optional('SMTP_PASS', ''),
  SMTP_FROM: optional('SMTP_FROM', 'noreply@nudgely.app'),

  // Client
  CLIENT_URL: optional('CLIENT_URL', 'http://localhost:5173'),

  // Anthropic (for AI features)
  ANTHROPIC_API_KEY: optional('ANTHROPIC_API_KEY', ''),
}