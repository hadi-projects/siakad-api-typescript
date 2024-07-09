import express from 'express';
import NotificationController from '../controller/system/notifikasi.controller';
import UserController from '../controller/system/user.controller';
import AuthController from '../controller/system/auth.controller';
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
import OtpController from '../controller/system/otp.controller';

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
const otp = new OtpController()

router.get('/v1/util/ping', util.ping)

router.post('/v1/otp/generate', otp.generate2fa)
router.post('/v1/otp/verify', otp.verify)
router.post('/v1/otp/reset', otp.reset)

router.get('/v1/notification/index', notification.index)
router.post('/v1/notification/create', notification.create)
router.post('/v1/notification/show', notification.show)
router.put('/v1/notification/edit', notification.edit)
router.delete('/v1/notification/delete/:{id}', notification.delete)

router.get('/v1/user/index', user.index)
router.post('/v1/user/create', user.create)
router.post('/v1/user/show', user.show)
router.put('/v1/user/edit', user.edit)
router.delete('/v1/user/delete', user.delete)

router.post('/v1/auth/login', auth.login)
router.post('/v1/auth/logout', auth.logout)

router.get('/v1/keuangan/index', keuangan.index)
router.post('/v1/keuangan/create', keuangan.create)
router.post('/v1/keuangan/show', keuangan.show)
router.put('/v1/keuangan/edit', keuangan.edit)
router.delete('/v1/keuangan/delete/:{id}', keuangan.delete)

router.get('/v1/kurikulum/index', kurikulum.index)
router.post('/v1/kurikulum/create', kurikulum.create)
router.post('/v1/kurikulum/show', kurikulum.show)
router.put('/v1/kurikulum/edit', kurikulum.edit)
router.delete('/v1/kurikulum/delete/:{id}', kurikulum.delete)

router.get('/v1/laporan/index', laporan.index)
router.post('/v1/laporan/create', laporan.create)
router.post('/v1/laporan/show', laporan.show)
router.put('/v1/laporan/edit', laporan.edit)
router.delete('/v1/laporan/delete/:{id}', laporan.delete)

router.get('/v1/cuti/index', cuti.index)
router.post('/v1/cuti/create', cuti.create)
router.post('/v1/cuti/show', cuti.show)
router.put('/v1/cuti/edit', cuti.edit)
router.delete('/v1/cuti/delete/:{id}', cuti.delete)

router.get('/v1/jadwal/index', jadwal.index)
router.post('/v1/jadwal/create', jadwal.create)
router.post('/v1/jadwal/show', jadwal.show)
router.put('/v1/jadwal/edit', jadwal.edit)
router.delete('/v1/jadwal/delete/:{id}', jadwal.delete)

router.get('/v1/khs/index', khs.index)
router.post('/v1/khs/create', khs.create)
router.post('/v1/khs/show', khs.show)
router.put('/v1/khs/edit', khs.edit)
router.delete('/v1/khs/delete/:{id}', khs.delete)

router.get('/v1/krs/index', krs.index)
router.post('/v1/krs/create', krs.create)
router.post('/v1/krs/show', krs.show)
router.put('/v1/krs/edit', krs.edit)
router.delete('/v1/krs/delete/:{id}', krs.delete)

router.get('/v1/nilai/index', nilai.index)
router.post('/v1/nilai/create', nilai.create)
router.post('/v1/nilai/show', nilai.show)
router.put('/v1/nilai/edit', nilai.edit)
router.delete('/v1/nilai/delete/:{id}', nilai.delete)

router.get('/v1/pembayaran/index', pembayaran.index)
router.post('/v1/pembayaran/create', pembayaran.create)
router.post('/v1/pembayaran/show', pembayaran.show)
router.put('/v1/pembayaran/edit', pembayaran.edit)
router.delete('/v1/pembayaran/delete/:{id}', pembayaran.delete)

router.get('/v1/tugas/index', tugas.index)
router.post('/v1/tugas/create', tugas.create)
router.post('/v1/tugas/show', tugas.show)
router.put('/v1/tugas/edit', tugas.edit)
router.delete('/v1/tugas/delete/:{id}', tugas.delete)

router.get('/v1/wisuda/index', wisuda.index)
router.post('/v1/wisuda/create', wisuda.create)
router.post('/v1/wisuda/show', wisuda.show)
router.put('/v1/wisuda/edit', wisuda.edit)
router.delete('/v1/wisuda/delete/:{id}', wisuda.delete)

export default router





