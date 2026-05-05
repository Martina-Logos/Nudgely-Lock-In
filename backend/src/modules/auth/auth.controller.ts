import { Request, Response, NextFunction } from 'express'
import * as authService from './auth.service'

// ─── Register ─────────────────────────────────────────────────────────────────

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body
    const result = await authService.register(email, password)
    res.status(201).json(result)
  } catch (err) {
    next(err)
  }
}

// ─── Verify OTP ───────────────────────────────────────────────────────────────

export async function verifyOtp(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, otp } = req.body
    const result = await authService.verifyOtp(email, otp)

    // Set refresh token as httpOnly cookie
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge:   7 * 24 * 60 * 60 * 1000, // 7 days
    })

    res.json({
      accessToken: result.accessToken,
      user:        result.user,
    })
  } catch (err) {
    next(err)
  }
}

// ─── Resend OTP ───────────────────────────────────────────────────────────────

export async function resendOtp(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.body
    const result = await authService.resendOtp(email)
    res.json(result)
  } catch (err) {
    next(err)
  }
}

// ─── Login ────────────────────────────────────────────────────────────────────

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body
    const result = await authService.login(email, password)

    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge:   7 * 24 * 60 * 60 * 1000,
    })

    res.json({
      accessToken: result.accessToken,
      user:        result.user,
    })
  } catch (err) {
    next(err)
  }
}

// ─── Refresh ──────────────────────────────────────────────────────────────────

export async function refresh(req: Request, res: Response, next: NextFunction) {
  try {
    // Accept token from cookie OR Authorization header (for mobile clients)
    const token =
      req.cookies?.refreshToken ||
      req.body?.refreshToken

    if (!token) {
      res.status(401).json({ message: 'No refresh token provided.' })
      return
    }

    const result = await authService.refresh(token)

    // Rotate cookie
    res.cookie('refreshToken', result.refreshToken, {
      httpOnly: true,
      secure:   process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge:   7 * 24 * 60 * 60 * 1000,
    })

    res.json({ accessToken: result.accessToken })
  } catch (err) {
    next(err)
  }
}

// ─── Logout ───────────────────────────────────────────────────────────────────

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies?.refreshToken || req.body?.refreshToken

    if (token) {
      await authService.logout(token)
    }

    // Clear cookie regardless
    res.clearCookie('refreshToken')
    res.json({ message: 'Logged out successfully.' })
  } catch (err) {
    next(err)
  }
}