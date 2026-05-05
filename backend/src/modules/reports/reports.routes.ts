import { Router } from 'express'
import * as reportsController from './reports.controller'
import { authenticate } from '../../middleware/auth'

const router = Router()
router.use(authenticate)

router.get('/weekly', reportsController.getWeeklyReport)

export default router