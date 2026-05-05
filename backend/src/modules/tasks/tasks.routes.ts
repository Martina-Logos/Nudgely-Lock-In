import { Router } from 'express'
import * as tasksController from './tasks.controller'
import { authenticate } from '../../middleware/auth'
import { validate } from '../../middleware/validate'

const router = Router()
router.use(authenticate)

router.get('/',                              tasksController.getAllTasks)
router.post('/ai', validate({ input: { required: true, type: 'string', minLength: 1 } }), tasksController.createTaskFromAI)
router.patch('/:id',                         tasksController.updateTask)
router.post('/:id/complete',                 tasksController.completeTask)
router.post('/:id/breakdown',                tasksController.breakdownTask)
router.post('/subtasks/:subtaskId/complete', tasksController.completeSubtask)
router.delete('/:id',                        tasksController.deleteTask)

export default router