import { Router } from 'express'
import * as usersController from './users.controller'
import { authenticate } from '../../middleware/auth'

const router = Router()

router.use(authenticate)

router.get('/me',    usersController.getMe)
router.patch('/me',  usersController.updateMe)
router.delete('/me', usersController.deleteMe)

export default router