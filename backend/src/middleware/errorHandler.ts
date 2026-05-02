import { Request, Response, NextFunction } from 'express'
import { env } from '../config/env'

export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public code?: string
  ) {
    super(message)
    this.name = 'AppError'
  }
}

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
): void {
  // Known app error
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      code:    err.code || null,
    })
    return
  }

  // Prisma errors
  if (err.constructor.name === 'PrismaClientKnownRequestError') {
    const prismaErr = err as any
    if (prismaErr.code === 'P2002') {
      res.status(409).json({ message: 'A record with that value already exists.' })
      return
    }
    if (prismaErr.code === 'P2025') {
      res.status(404).json({ message: 'Record not found.' })
      return
    }
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    res.status(401).json({ message: 'Invalid token' })
    return
  }
  if (err.name === 'TokenExpiredError') {
    res.status(401).json({ message: 'Token expired' })
    return
  }

  // Unknown error — don't leak stack in production
  console.error('Unhandled error:', err)
  res.status(500).json({
    message: env.isProduction ? 'Something went wrong' : err.message,
    ...(env.isProduction ? {} : { stack: err.stack }),
  })
}