import { Request, Response, NextFunction } from 'express'
import * as habitsService from './habits.service'

export async function getAllHabits(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await habitsService.getAllHabits(req.user!.userId))
  } catch (err) { next(err) }
}

export async function createHabit(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(201).json(await habitsService.createHabit(req.user!.userId, req.body))
  } catch (err) { next(err) }
}

export async function completeHabit(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await habitsService.completeHabit(req.user!.userId, req.params.id))
  } catch (err) { next(err) }
}

export async function deleteHabit(req: Request, res: Response, next: NextFunction) {
  try {
    res.json(await habitsService.deleteHabit(req.user!.userId, req.params.id))
  } catch (err) { next(err) }
}