import { Request, Response, NextFunction } from 'express'

type Rule = {
  type?:     'string' | 'number' | 'boolean' | 'array'
  required?: boolean
  minLength?: number
  maxLength?: number
  isEmail?:  boolean
  isIn?:     string[]
}

type Schema = Record<string, Rule>

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validate(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const errors: string[] = []
    const body = req.body

    for (const [field, rule] of Object.entries(schema)) {
      const value = body[field]
      const missing = value === undefined || value === null || value === ''

      if (rule.required && missing) {
        errors.push(`${field} is required`)
        continue
      }

      if (missing) continue // optional field not provided — skip

      if (rule.type && rule.type !== 'array' && typeof value !== rule.type) {
        errors.push(`${field} must be a ${rule.type}`)
        continue
      }

      if (rule.type === 'array' && !Array.isArray(value)) {
        errors.push(`${field} must be an array`)
        continue
      }

      if (rule.isEmail && typeof value === 'string' && !isValidEmail(value)) {
        errors.push(`${field} must be a valid email address`)
      }

      if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
        errors.push(`${field} must be at least ${rule.minLength} characters`)
      }

      if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
        errors.push(`${field} must be at most ${rule.maxLength} characters`)
      }

      if (rule.isIn && !rule.isIn.includes(value)) {
        errors.push(`${field} must be one of: ${rule.isIn.join(', ')}`)
      }
    }

    if (errors.length > 0) {
      res.status(400).json({ message: 'Validation failed', errors })
      return
    }

    next()
  }
}