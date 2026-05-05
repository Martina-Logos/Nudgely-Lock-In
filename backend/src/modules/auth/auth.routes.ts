import { Router } from 'express'
import * as authController from './auth.controller'
import { validate } from '../../middleware/validate'

const router = Router()

// ─── POST /api/auth/register ──────────────────────────────────────────────────
router.post(
  '/register',
  validate({
    email:    { required: true, type: 'string', isEmail: true },
    password: { required: true, type: 'string', minLength: 8 },
  }),
  authController.register
)

// ─── POST /api/auth/verify-otp ────────────────────────────────────────────────
router.post(
  '/verify-otp',
  validate({
    email: { required: true, type: 'string', isEmail: true },
    otp:   { required: true, type: 'string', minLength: 6, maxLength: 6 },
  }),
  authController.verifyOtp
)

// ─── POST /api/auth/resend-otp ────────────────────────────────────────────────
router.post(
  '/resend-otp',
  validate({
    email: { required: true, type: 'string', isEmail: true },
  }),
  authController.resendOtp
)

// ─── POST /api/auth/login ─────────────────────────────────────────────────────
router.post(
  '/login',
  validate({
    email:    { required: true, type: 'string', isEmail: true },
    password: { required: true, type: 'string', minLength: 1 },
  }),
  authController.login
)

// ─── POST /api/auth/refresh ───────────────────────────────────────────────────
router.post('/refresh', authController.refresh)

// ─── POST /api/auth/logout ────────────────────────────────────────────────────
router.post('/logout', authController.logout)

export default router