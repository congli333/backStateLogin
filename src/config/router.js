// 应用级路由
import express from 'express'
import login from '../routers/login'
import register from '../routers/register'
const router = express.Router()

router.post('/login', login)
router.post('/register', register)

export default router