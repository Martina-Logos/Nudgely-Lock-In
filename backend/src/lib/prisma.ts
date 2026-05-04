import { PrismaClient } from '../../prisma/generated'
import { env } from '../config/env'

declare global {
  var __prisma: PrismaClient | undefined
}

export const prisma = global.__prisma || new PrismaClient({
  log: env.isProduction ? ['error'] : ['warn', 'error'],
})

if (!env.isProduction) global.__prisma = prisma