import { Router } from 'express'
import * as sessionsController from './sessions.controller'
import { authenticate } from '../../middleware/auth'
import { validate } from '../../middleware/validate'

const router = Router()
router.use(authenticate)

router.get('/focus/today',    sessionsController.getTodayFocus)
router.post('/focus',
  validate({
    durationMinutes: { required: true, type: 'number' },
    startedAt:       { required: true, type: 'string' },
  }),
  sessionsController.logFocus
)
router.post('/meditation',
  validate({
    mode:            { required: true, type: 'string', isIn: ['Focus','Calm','Sleep','Energy'] },
    durationMinutes: { required: true, type: 'number' },
    startedAt:       { required: true, type: 'string' },
  }),
  sessionsController.logMeditation
)

export default router