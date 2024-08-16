import express from 'express';
import ReportsController from '../controller/client-admin-api/car.controller';
import VaultsController from '../controller/client-admin-api/vaults.controller';
import MutationsController from '../controller/client-admin-api/mutations.controller';
import CarController from '../controller/client-admin-api/car.controller';


const router = express.Router()

router.get('/ping', (req: express.Request, res: express.Response) => {
    res.send("PONG")
})

router.post('/crypto-asset-report/reports', new CarController().index)
router.post('/crypto-asset-report/create', new CarController().create)
router.post('/crypto-asset-report/import', new CarController().import)
router.delete('/crypto-asset-report/delete', new CarController().delete)
router.post('/crypto-asset-report/bulk_delete', new CarController().bulk_delete)

router.post('/vaults/index', new VaultsController().index)
router.post('/vaults/show', new VaultsController().show)

router.post('/vaults/index', new MutationsController().index)
router.post('/vaults/show', new MutationsController().show)

router.post('/settings/index', new MutationsController().index)
router.post('/settings/show', new MutationsController().show)


export default router