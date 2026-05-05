import { Request, Response, NextFunction } from 'express'
import * as sessionsService from './sessions.service'

export async function logFocus(req: Request, res: Response, next: NextFunction) {
  try { res.status(201).json(await sessionsService.logFocusSession(req.user!.userId, req.body)) }
  catch (err) { next(err) }
}

export async function logMeditation(req: Request, res: Response, next: NextFunction) {
  try { res.status(201).json(await sessionsService.logMeditationSession(req.user!.userId, req.body)) }
  catch (err) { next(err) }
}

export async function getTodayFocus(req: Request, res: Response, next: NextFunction) {
  try { res.json({ minutes: await sessionsService.getTodayFocusMinutes(req.user!.userId) }) }
  catch (err) { next(err) }
}