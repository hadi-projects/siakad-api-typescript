import express from 'express';
import AuthController from '../controller/auth/register.controller';


const router = express.Router()

router.post('/auth/register', new AuthController().register)
router.post('/auth/login', new AuthController().login)


export default router