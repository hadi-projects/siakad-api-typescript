import RoleModel from '../../model/role.model'
import Seeder from '../meta/seeder'

export default class RoleSeeder {
    async seed() {
        await new Seeder('roles', [
            new RoleModel().set_name("root").set_created_at().set_updated_at(),
            new RoleModel().set_name("admin").set_created_at().set_updated_at(),
            new RoleModel().set_name("member").set_created_at().set_updated_at(),
            new RoleModel().set_name("mahasiswa").set_created_at().set_updated_at(),
            new RoleModel().set_name("auth").set_created_at().set_updated_at()
        ]).seed()
    }
}