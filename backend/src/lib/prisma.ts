import { PrismaClient } from '@prisma/client'
import { env } from '../config/env'

// Prevent multiple Prisma instances in development (hot reload issue)
declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

export const prisma =
  global.__prisma ||
  new PrismaClient({
    log: env.isProduction
      ? ['error']
      : ['query', 'warn', 'error'],
  })

if (!env.isProduction) {
  global.__prisma = prisma
}