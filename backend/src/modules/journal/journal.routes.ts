import { Router } from 'express'
import * as journalController from './journal.controller'
import { authenticate } from '../../middleware/auth'
import { validate } from '../../middleware/validate'

const router = Router()
router.use(authenticate)

router.get('/',        journalController.getAllEntries)
router.get('/today',   journalController.getTodayEntry)
router.get('/prompt',  journalController.getAiPrompt)
router.post('/',
  validate({ moodScore: { required: true, type: 'number' } }),
  journalController.saveEntry
)

export default router