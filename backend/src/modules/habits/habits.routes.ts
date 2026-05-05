import { Router } from 'express'
import * as habitsController from './habits.controller'
import { authenticate } from '../../middleware/auth'
import { validate } from '../../middleware/validate'

const router = Router()
router.use(authenticate)

router.get('/',              habitsController.getAllHabits)
router.post('/',
  validate({ name: { required: true, type: 'string', minLength: 1 } }),
  habitsController.createHabit
)
router.post('/:id/complete', habitsController.completeHabit)
router.delete('/:id',        habitsController.deleteHabit)

export default router