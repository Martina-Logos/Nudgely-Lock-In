import { Request, Response, NextFunction } from 'express'
import * as onboardingService from './onboarding.service'

export async function saveProfile(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await onboardingService.saveProfile(req.user!.userId, req.body)
    res.json(user)
  } catch (err) { next(err) }
}

export async function savePreferences(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await onboardingService.savePreferences(req.user!.userId, req.body)
    res.json(user)
  } catch (err) { next(err) }
}

export async function saveTemperament(req: Request, res: Response, next: NextFunction) {
  try {
    const { answers } = req.body
    const result = await onboardingService.saveTemperament(req.user!.userId, answers)
    res.json(result)
  } catch (err) { next(err) }
}

export async function saveCognitive(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await onboardingService.saveCognitive(req.user!.userId, req.body)
    res.json(result)
  } catch (err) { next(err) }
}