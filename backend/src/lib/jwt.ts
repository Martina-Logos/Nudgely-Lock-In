import jwt from 'jsonwebtoken'
import { env } from '../config/env'

export interface AccessTokenPayload {
  userId: string
  email:  string
}

export interface RefreshTokenPayload {
  userId:   string
  tokenId:  string  // matches RefreshToken.id in DB — allows single-token revocation
}

// ─── Sign ─────────────────────────────────────────────────────────────────────

export function signAccessToken(payload: AccessTokenPayload): string {
  return jwt.sign(payload, env.JWT_ACCESS_SECRET, {
    expiresIn: env.JWT_ACCESS_EXPIRES_IN,
  } as jwt.SignOptions)
}

export function signRefreshToken(payload: RefreshTokenPayload): string {
  return jwt.sign(payload, env.JWT_REFRESH_SECRET, {
    expiresIn: env.JWT_REFRESH_EXPIRES_IN,
  } as jwt.SignOptions)
}

// ─── Verify ───────────────────────────────────────────────────────────────────

export function verifyAccessToken(token: string): AccessTokenPayload {
  return jwt.verify(token, env.JWT_ACCESS_SECRET) as AccessTokenPayload
}

export function verifyRefreshToken(token: string): RefreshTokenPayload {
  return jwt.verify(token, env.JWT_REFRESH_SECRET) as RefreshTokenPayload
}

// ─── Decode without verifying (for debugging only) ────────────────────────────

export function decodeToken(token: string) {
  return jwt.decode(token)
}

// ─── Helper: ms from expiry string ───────────────────────────────────────────
// Converts "7d" → milliseconds for DB expiresAt calculation

export function expiryToMs(expiry: string): number {
  const unit  = expiry.slice(-1)
  const value = parseInt(expiry.slice(0, -1), 10)
  const map: Record<string, number> = {
    s: 1000,
    m: 60 * 1000,
    h: 60 * 60 * 1000,
    d: 24 * 60 * 60 * 1000,
  }
  return value * (map[unit] || 1000)
}