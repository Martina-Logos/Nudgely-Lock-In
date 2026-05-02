import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import { env } from '../config/env'

declare global {
  var __prisma: PrismaClient | undefined
}

export const prisma = global.__prisma || new PrismaClient({
  adapter: new PrismaPg(new Pool({
    connectionString: env.DATABASE_URL,
  })),
  log: env.isProduction ? ['error'] : ['warn', 'error'],
})

if (!env.isProduction) global.__prisma = prisma