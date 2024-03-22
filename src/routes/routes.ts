import express from 'express';
import InfoResponse from '../util/response/info_response';
import WalletController from '../controller/wallet.controller';
import AuthController from '../controller/auth.controller';


const router = express.Router()
const auth = new AuthController()
const wallet = new WalletController()


router.get('/ping', (req:any, res:express.Response)=>{InfoResponse.ping(res)});


router.get('/auth/create', auth.oauth2)


router.get('/wallet/index', wallet.index)
router.post('/wallet/create', wallet.create)
router.post('/wallet/show', wallet.show)
router.delete('/wallet/delete/:id', wallet.delete)

export default router

