import { Request, Response, NextFunction } from 'express'
import * as tasksService from './tasks.service'

export async function getAllTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const tasks = await tasksService.getAllTasks(req.user!.userId)
    res.json(tasks)
  } catch (err) { next(err) }
}

export async function createTaskFromAI(req: Request, res: Response, next: NextFunction) {
  try {
    const { input } = req.body
    const task = await tasksService.createTaskFromAI(req.user!.userId, input)
    res.status(201).json(task)
  } catch (err) { next(err) }
}

export async function updateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const task = await tasksService.updateTask(req.user!.userId, req.params.id, req.body)
    res.json(task)
  } catch (err) { next(err) }
}

export async function completeTask(req: Request, res: Response, next: NextFunction) {
  try {
    const task = await tasksService.completeTask(req.user!.userId, req.params.id)
    res.json(task)
  } catch (err) { next(err) }
}

export async function breakdownTask(req: Request, res: Response, next: NextFunction) {
  try {
    const task = await tasksService.breakdownTask(req.user!.userId, req.params.id)
    res.json(task)
  } catch (err) { next(err) }
}

export async function completeSubtask(req: Request, res: Response, next: NextFunction) {
  try {
    const subtask = await tasksService.completeSubtask(req.user!.userId, req.params.subtaskId)
    res.json(subtask)
  } catch (err) { next(err) }
}

export async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await tasksService.deleteTask(req.user!.userId, req.params.id)
    res.json(result)
  } catch (err) { next(err) }
}