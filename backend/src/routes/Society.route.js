import {Router} from 'express'
import { SocietyRegister } from '../controllers/Society.controller.js'

const router = Router()

router.post('/society-register', SocietyRegister)

export default router