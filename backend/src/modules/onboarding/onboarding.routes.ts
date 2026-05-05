import { Router } from 'express'
import * as onboardingController from './onboarding.controller'
import { authenticate } from '../../middleware/auth'
import { validate } from '../../middleware/validate'

const router = Router()

router.use(authenticate)

router.post('/profile',
  validate({
    displayName: { required: true, type: 'string', minLength: 1 },
    timezone:    { required: true, type: 'string' },
    role:        { required: true, type: 'string', isIn: ['Student','Professional','Creator','Entrepreneur'] },
  }),
  onboardingController.saveProfile
)

router.post('/preferences',
  validate({
    focusTime:       { required: true, type: 'string', isIn: ['Morning','Afternoon','Evening','Night'] },
    emotionalState:  { required: true, type: 'string', isIn: ['Anxious','Energetic','Calm','Overwhelmed'] },
    distractions:    { required: true, type: 'array' },
    mainGoal:        { required: true, type: 'string' },
    weeklyGoal:      { required: false, type: 'string' },
    personalityVibe: { required: true, type: 'string', isIn: ['Soft','Bold'] },
  }),
  onboardingController.savePreferences
)

router.post('/temperament',
  validate({ answers: { required: true, type: 'array' } }),
  onboardingController.saveTemperament
)

router.post('/cognitive',
  validate({
    iqAnswers: { required: true, type: 'array' },
    eqAnswers: { required: true, type: 'array' },
    sqAnswers: { required: true, type: 'array' },
  }),
  onboardingController.saveCognitive
)

export default router