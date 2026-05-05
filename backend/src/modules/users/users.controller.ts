import { Request, Response, NextFunction } from 'express'
import * as usersService from './users.service'

export async function getMe(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await usersService.getMe(req.user!.userId)
    res.json(user)
  } catch (err) { next(err) }
}

export async function updateMe(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await usersService.updateMe(req.user!.userId, req.body)
    res.json(user)
  } catch (err) { next(err) }
}

export async function deleteMe(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await usersService.deleteMe(req.user!.userId)
    res.clearCookie('refreshToken')
    res.json(result)
  } catch (err) { next(err) }
}
