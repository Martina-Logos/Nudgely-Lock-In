import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

import { prisma } from '../../lib/prisma'
import { env } from '../../config/env'

passport.use(
  new GoogleStrategy(
    {
      clientID: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
      callbackURL: env.GOOGLE_CALLBACK_URL,
    },

    async (_accessToken, _refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0]?.value

        if (!email) {
          return done(new Error('Google account has no email'))
        }

        let user = await prisma.user.findUnique({
          where: { email },
        })

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              displayName: profile.displayName || email,
              isEmailVerified: true,
            },
          })
        }

        return done(null, user)
      } catch (err) {
        return done(err as Error)
      }
    }
  )
)

export default passport