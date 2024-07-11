import { RowDataPacket } from 'mysql2/promise'
import db from '../database'
import moment from 'moment'
import UserModel from '../../model/user.model'
import UserTable from '../migrations/01.user.migration'
import CryptoUtil from '../../util/crypto.util'
import RoleModel from '../../model/role.model'
import StatusModel from '../../model/status.model'

export default class UserSeeder {
    static data:UserModel[] = [
        new UserModel().setName("hadi")
            .setEmail("hadi@mail.com")
            .setPassword(CryptoUtil.hashPassword("Adminsku@12"))
            .setSecretKey("")
            .setOtpauthUrl("")
            .setRole(new RoleModel().set_id("1"))
            .setStatus(new StatusModel().set_id("1"))
            .setVerifyToken("")
            .setOtpVerifiedAt()
            .setEmailVerifiedAt()
            .set_created_at()
            .set_updated_at()

    ]
    
    static async seed(){
        await (await db).query(`DELETE FROM ${UserTable.table_name}`)
        await (await db).query(`ALTER TABLE ${UserTable.table_name} AUTO_INCREMENT = 1`)
        for(var i=0;i<this.data.length;i++){
            await this.data[i].create()
        }
    }
}