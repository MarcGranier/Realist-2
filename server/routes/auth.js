import express from 'express'
import { welcome } from '../controllers/auth.js'

const router = express.Router()

import * as auth from '../controllers/auth.js'

router.get('/', auth.welcome)

export default router
