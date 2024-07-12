import UserModel from '../../model/user.model'
import CryptoUtil from '../../util/crypto.util'
import RoleModel from '../../model/role.model'
import StatusModel from '../../model/status.model'
import Seeder from '../meta/seeder'

export default class UserSeeder {
    async seed(){
        await new Seeder('users', [
            new UserModel().set_name("hadi")
            .set_email("hadi@mail.com")
            .set_password(CryptoUtil.hashPassword("Adminsku@12"))
            .set_role(new RoleModel().set_id('1') as RoleModel)
            .set_status(new StatusModel().set_id("1") as StatusModel)
            .set_created_at()
            .set_updated_at()
        ]).seed()
    }
}