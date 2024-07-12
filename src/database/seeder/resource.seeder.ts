import ResourceModel from '../../model/resource.model'
import Seeder from '../meta/seeder'

export default class ResourceSeeder {
    async seed() {
        await new Seeder('resources', [
            new ResourceModel().set_name("auth")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("user")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("otp")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("kuangan")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("kurikulum")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("laporan")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("jurnal")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("penilaian")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("cuti")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("jadwal")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("khs")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("krs")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("nilai")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("pembayaran")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("tugas")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("wisuda")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("notifikasi")
                .set_created_at()
                .set_updated_at(),
            new ResourceModel().set_name("util")
                .set_created_at()
                .set_updated_at(),

        ]).seed()
    }
}
