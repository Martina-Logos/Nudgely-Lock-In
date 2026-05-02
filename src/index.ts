import app from './app'
import { env } from './config/env'
import { prisma } from './lib/prisma'

async function main() {
  // Test DB connection before starting
  try {
    await prisma.$connect()
    console.log('🗄️  Database connected')
  } catch (err) {
    console.error('❌ Database connection failed:', err)
    process.exit(1)
  }

  const server = app.listen(env.PORT, () => {
    console.log(`🚀 Nudgely API running on http://localhost:${env.PORT}`)
    console.log(`📦 Environment: ${env.NODE_ENV}`)
    console.log(`🔗 Client: ${env.CLIENT_URL}`)
  })

  // ─── Graceful shutdown ───────────────────────────────────────────────────────
  async function shutdown(signal: string) {
    console.log(`\n${signal} received — shutting down gracefully...`)
    server.close(async () => {
      await prisma.$disconnect()
      console.log('🗄️  Database disconnected')
      console.log('✅ Server closed')
      process.exit(0)
    })
  }

  process.on('SIGTERM', () => shutdown('SIGTERM'))
  process.on('SIGINT',  () => shutdown('SIGINT'))

  // Unhandled promise rejections
  process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason)
  })
}

main()