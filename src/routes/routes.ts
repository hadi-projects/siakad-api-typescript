import express from 'express';
import client_admin_api from './client-admin-api.routes'
import auth_api from './client-admin-api.routes'

const router = express()

router.use('/client-admin-api', client_admin_api)
router.use('/auth-api', auth_api)

export default router





