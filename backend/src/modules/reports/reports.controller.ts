import { Request, Response, NextFunction } from 'express'
import * as reportsService from './reports.service'

export async function getWeeklyReport(req: Request, res: Response, next: NextFunction) {
  try {
    const weekStart = req.query.weekStart as string | undefined
    const report    = await reportsService.getWeeklyReport(req.user!.userId, weekStart)
    res.json(report)
  } catch (err) { next(err) }
}