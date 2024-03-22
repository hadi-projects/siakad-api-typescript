import express from 'express';
import NotificationController from '../controller/system/notifikasi.controller';
import UserController from '../controller/system/user.controller';
import AuthController from '../auth.controller';
import KeuanganController from '../controller/administrator/keuangan.controller';
import KurikulumController from '../controller/administrator/kurikulum.controller';
import LaporanController from '../controller/administrator/laporan.controller';
import CutiController from '../controller/mahasiswa/cuti.controller';
import WisudaController from '../controller/mahasiswa/wisuda.controller';
import TugasController from '../controller/mahasiswa/tugas.controller';
import PembayaranController from '../controller/mahasiswa/pembayaran.controller';
import NilaiController from '../controller/mahasiswa/nilai.controller';
import KRSController from '../controller/mahasiswa/krs.controller';
import KHSController from '../controller/mahasiswa/khs.controller';
import JadwalController from '../controller/mahasiswa/jadwal.controller';
import UtilController from '../controller/system/util.controller';

const router = express()
const notification = new NotificationController()
const user = new UserController()
const auth = new AuthController()
const keuangan = new KeuanganController()
const kurikulum = new KurikulumController()
const laporan = new LaporanController()
const cuti = new CutiController()
const jadwal = new JadwalController()
const khs = new KHSController()
const krs = new KRSController()
const nilai = new NilaiController()
const pembayaran = new PembayaranController()
const tugas = new TugasController()
const wisuda = new WisudaController()
const util = new UtilController()

router.get('/util/ping', util.ping)

router.get('/notification/index', notification.index)
router.post('/notification/create', notification.create)
router.post('/notification/show', notification.show)
router.put('/notification/edit', notification.edit)
router.delete('/notification/delete/:{id}', notification.delete)

router.get('/user/index', user.index)
router.post('/user/create', user.create)
router.post('/user/show', user.show)
router.put('/user/edit', user.edit)
router.delete('/user/delete/:{id}', user.delete)

router.post('/auth/login', auth.login)
router.post('/auth/logout', auth.logout)

router.get('/keuangan/index', keuangan.index)
router.post('/keuangan/create', keuangan.create)
router.post('/keuangan/show', keuangan.show)
router.put('/keuangan/edit', keuangan.edit)
router.delete('/keuangan/delete/:{id}', keuangan.delete)

router.get('/kurikulum/index', kurikulum.index)
router.post('/kurikulum/create', kurikulum.create)
router.post('/kurikulum/show', kurikulum.show)
router.put('/kurikulum/edit', kurikulum.edit)
router.delete('/kurikulum/delete/:{id}', kurikulum.delete)

router.get('/laporan/index', laporan.index)
router.post('/laporan/create', laporan.create)
router.post('/laporan/show', laporan.show)
router.put('/laporan/edit', laporan.edit)
router.delete('/laporan/delete/:{id}', laporan.delete)

router.get('/cuti/index', cuti.index)
router.post('/cuti/create', cuti.create)
router.post('/cuti/show', cuti.show)
router.put('/cuti/edit', cuti.edit)
router.delete('/cuti/delete/:{id}', cuti.delete)

router.get('/jadwal/index', jadwal.index)
router.post('/jadwal/create', jadwal.create)
router.post('/jadwal/show', jadwal.show)
router.put('/jadwal/edit', jadwal.edit)
router.delete('/jadwal/delete/:{id}', jadwal.delete)

router.get('/khs/index', khs.index)
router.post('/khs/create', khs.create)
router.post('/khs/show', khs.show)
router.put('/khs/edit', khs.edit)
router.delete('/khs/delete/:{id}', khs.delete)

router.get('/krs/index', krs.index)
router.post('/krs/create', krs.create)
router.post('/krs/show', krs.show)
router.put('/krs/edit', krs.edit)
router.delete('/krs/delete/:{id}', krs.delete)

router.get('/nilai/index', nilai.index)
router.post('/nilai/create', nilai.create)
router.post('/nilai/show', nilai.show)
router.put('/nilai/edit', nilai.edit)
router.delete('/nilai/delete/:{id}', nilai.delete)

router.get('/pembayaran/index', pembayaran.index)
router.post('/pembayaran/create', pembayaran.create)
router.post('/pembayaran/show', pembayaran.show)
router.put('/pembayaran/edit', pembayaran.edit)
router.delete('/pembayaran/delete/:{id}', pembayaran.delete)

router.get('/tugas/index', tugas.index)
router.post('/tugas/create', tugas.create)
router.post('/tugas/show', tugas.show)
router.put('/tugas/edit', tugas.edit)
router.delete('/tugas/delete/:{id}', tugas.delete)

router.get('/wisuda/index', wisuda.index)
router.post('/wisuda/create', wisuda.create)
router.post('/wisuda/show', wisuda.show)
router.put('/wisuda/edit', wisuda.edit)
router.delete('/wisuda/delete/:{id}', wisuda.delete)

export default router





