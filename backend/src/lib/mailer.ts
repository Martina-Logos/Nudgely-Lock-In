import nodemailer from 'nodemailer'
import { env } from '../config/env'

// ─── Transporter ──────────────────────────────────────────────────────────────

export const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
  },
})

// Verify connection on startup (non-blocking)
transporter.verify().then(() => {
  console.log('✉️  Mailer ready')
}).catch((err) => {
  console.warn('⚠️  Mailer not connected:', err.message)
})

// ─── Email templates ──────────────────────────────────────────────────────────

function baseTemplate(content: string): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <style>
        body { margin: 0; padding: 0; background: #F0EADF; font-family: 'Helvetica Neue', Arial, sans-serif; }
        .wrapper { max-width: 480px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; }
        .header { background: #744D83; padding: 28px 32px; }
        .header h1 { margin: 0; color: #fff; font-size: 22px; font-weight: 700; letter-spacing: -0.3px; }
        .header p  { margin: 4px 0 0; color: rgba(255,255,255,0.7); font-size: 13px; }
        .body   { padding: 32px; }
        .code-box {
          background: #F0EADF; border-radius: 12px;
          padding: 20px; text-align: center; margin: 24px 0;
          border: 2px dashed #23BBB7;
        }
        .code { font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #744D83; }
        .expiry { font-size: 12px; color: #9B8EA5; margin-top: 8px; }
        p  { color: #2D1F35; font-size: 15px; line-height: 1.6; }
        .footer { padding: 20px 32px; border-top: 1px solid #E3DBE6; }
        .footer p { font-size: 12px; color: #9B8EA5; margin: 0; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <h1>Nudgely</h1>
          <p>Your focus, aligned.</p>
        </div>
        <div class="body">${content}</div>
        <div class="footer">
          <p>If you didn't request this, you can safely ignore this email.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// ─── Send OTP ─────────────────────────────────────────────────────────────────

export async function sendOtpEmail(email: string, code: string): Promise<void> {
  const html = baseTemplate(`
    <p>Hey there 👋</p>
    <p>Here's your verification code for Nudgely. Enter it in the app to continue:</p>
    <div class="code-box">
      <div class="code">${code}</div>
      <div class="expiry">Expires in 10 minutes</div>
    </div>
    <p>This code is single-use. Once verified, you're in.</p>
  `)

  await transporter.sendMail({
    from:    `"Nudgely" <${env.SMTP_FROM}>`,
    to:      email,
    subject: `${code} is your Nudgely verification code`,
    html,
  })
}

// ─── Send password reset OTP ──────────────────────────────────────────────────

export async function sendPasswordResetEmail(email: string, code: string): Promise<void> {
  const html = baseTemplate(`
    <p>You requested a password reset for your Nudgely account.</p>
    <p>Use this code to reset your password:</p>
    <div class="code-box">
      <div class="code">${code}</div>
      <div class="expiry">Expires in 10 minutes</div>
    </div>
    <p>If you didn't request this, please ignore this email. Your account is safe.</p>
  `)

  await transporter.sendMail({
    from:    `"Nudgely" <${env.SMTP_FROM}>`,
    to:      email,
    subject: 'Reset your Nudgely password',
    html,
  })
}