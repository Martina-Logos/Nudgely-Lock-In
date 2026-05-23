import OpenAI from 'openai'
import { env } from '../config/env'

export const openai = new OpenAI({
  apiKey: env.OPENAI_API_KEY,
})

export const AI_MODEL = 'gpt-5-mini'