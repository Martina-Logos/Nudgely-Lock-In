import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'
import { prisma } from '../../lib/prisma'
import { signAccessToken, signRefreshToken, verifyRefreshToken, expiryToMs } from '../../lib/jwt'
import { sendOtpEmail } from '../../lib/mailer'
import { env } from '../../config/env'
import { AppError } from '../../middleware/errorHandler'

// ─── Helpers ──────────────────────────────────────────────────────────────────

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

// ─── Register ─────────────────────────────────────────────────────────────────

export async function register(email: string, password: string) {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    throw new AppError(409, 'An account with this email already exists.', 'EMAIL_TAKEN')
  }

  const passwordHash = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      displayName: email.split('@')[0],
    },
  })

  const code      = generateOtp()
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

  await prisma.otpCode.create({
    data: { code, userId: user.id, purpose: 'EmailVerification', expiresAt },
  })

  await sendOtpEmail(email, code)

  return { message: 'Account created. Check your email for the verification code.' }
}

// ─── Verify OTP ───────────────────────────────────────────────────────────────

export async function verifyOtp(email: string, code: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    throw new AppError(404, 'No account found with this email.', 'USER_NOT_FOUND')
  }

  const otp = await prisma.otpCode.findFirst({
    where: {
      userId:  user.id,
      code,
      purpose: 'EmailVerification',
      usedAt:  null,
      expiresAt: { gt: new Date() },
    },
    orderBy: { createdAt: 'desc' },
  })

  if (!otp) {
    throw new AppError(400, 'Invalid or expired verification code.', 'INVALID_OTP')
  }

  await prisma.$transaction([
    prisma.otpCode.update({
      where: { id: otp.id },
      data:  { usedAt: new Date() },
    }),
    prisma.user.update({
      where: { id: user.id },
      data:  { isEmailVerified: true },
    }),
  ])

  const { accessToken, refreshToken } = await issueTokens(user.id, user.email)

  return {
    accessToken,
    refreshToken,
    user: sanitizeUser(user),
  }
}

// ─── Resend OTP ───────────────────────────────────────────────────────────────

export async function resendOtp(email: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return { message: 'If that email exists, a new code has been sent.' }
  }

  if (user.isEmailVerified) {
    throw new AppError(400, 'This email is already verified.', 'ALREADY_VERIFIED')
  }

  await prisma.otpCode.updateMany({
    where: { userId: user.id, purpose: 'EmailVerification', usedAt: null },
    data:  { usedAt: new Date() },
  })

  const code      = generateOtp()
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000)

  await prisma.otpCode.create({
    data: { code, userId: user.id, purpose: 'EmailVerification', expiresAt },
  })

  await sendOtpEmail(email, code)

  return { message: 'If that email exists, a new code has been sent.' }
}

// ─── Login ────────────────────────────────────────────────────────────────────

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user || !user.passwordHash) {
    throw new AppError(401, 'Invalid email or password.', 'INVALID_CREDENTIALS')
  }

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) {
    throw new AppError(401, 'Invalid email or password.', 'INVALID_CREDENTIALS')
  }

  if (!user.isEmailVerified) {
    throw new AppError(403, 'Please verify your email before logging in.', 'EMAIL_NOT_VERIFIED')
  }

  const { accessToken, refreshToken } = await issueTokens(user.id, user.email)

  return {
    accessToken,
    refreshToken,
    user: sanitizeUser(user),
  }
}

// ─── Refresh ──────────────────────────────────────────────────────────────────

export async function refresh(token: string) {
  let payload: { userId: string; tokenId: string }
  try {
    payload = verifyRefreshToken(token) as { userId: string; tokenId: string }
  } catch {
    throw new AppError(401, 'Invalid or expired refresh token.', 'INVALID_REFRESH_TOKEN')
  }

  const stored = await prisma.refreshToken.findUnique({ where: { token } })

  if (!stored || stored.expiresAt < new Date()) {
    throw new AppError(401, 'Refresh token not found or expired.', 'INVALID_REFRESH_TOKEN')
  }

  await prisma.refreshToken.delete({ where: { id: stored.id } })

  const user = await prisma.user.findUnique({ where: { id: payload.userId } })
  if (!user) {
    throw new AppError(401, 'User not found.', 'USER_NOT_FOUND')
  }

  const { accessToken, refreshToken: newRefreshToken } = await issueTokens(user.id, user.email)

  return { accessToken, refreshToken: newRefreshToken }
}

// ─── Logout ───────────────────────────────────────────────────────────────────

export async function logout(token: string) {
  await prisma.refreshToken.deleteMany({ where: { token } })
  return { message: 'Logged out successfully.' }
}

// ─── Internal helpers ─────────────────────────────────────────────────────────

async function issueTokens(userId: string, email: string) {
  const tokenId = uuidv4()

  const accessToken  = signAccessToken({ userId, email })
  const refreshToken = signRefreshToken({ userId, tokenId })

  const expiresAt = new Date(Date.now() + expiryToMs(env.JWT_REFRESH_EXPIRES_IN))
  await prisma.refreshToken.create({
    data: { id: tokenId, token: refreshToken, userId, expiresAt },
  })

  return { accessToken, refreshToken }
}

function sanitizeUser(user: any) {
  const { passwordHash, ...safe } = user
  return safe
}