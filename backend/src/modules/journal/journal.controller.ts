import { Request, Response, NextFunction } from 'express'
import * as journalService from './journal.service'

export async function getAllEntries(req: Request, res: Response, next: NextFunction) {
  try { res.json(await journalService.getAllEntries(req.user!.userId)) }
  catch (err) { next(err) }
}

export async function getTodayEntry(req: Request, res: Response, next: NextFunction) {
  try {
    const entry = await journalService.getTodayEntry(req.user!.userId)
    res.json(entry || null)
  } catch (err) { next(err) }
}

export async function saveEntry(req: Request, res: Response, next: NextFunction) {
  try { res.json(await journalService.saveEntry(req.user!.userId, req.body)) }
  catch (err) { next(err) }
}

export async function getAiPrompt(req: Request, res: Response, next: NextFunction) {
  try { res.json(await journalService.getAiPrompt(req.user!.userId)) }
  catch (err) { next(err) }
}