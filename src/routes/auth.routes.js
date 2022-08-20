import { loginController, registerController } from '../controllers/auth.controller.js'
import { Router } from 'express'

const router = Router()

router.get('/login', loginController)
router.post('/register', registerController)

export default router
