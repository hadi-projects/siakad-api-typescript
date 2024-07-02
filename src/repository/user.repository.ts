import db from '../database/database'
import Logger from "../service/logger";
import { RowDataPacket } from 'mysql2/promise';
import Keyval from '../model/keyval.model';
import UserModel from '../model/user.model';
import RoleModel from '../model/role.model';
import StatusModel from '../model/status.model';
import UserQuery from '../database/query/user.query.ts';
import { log } from 'console';

export default class UserRepository {
    logger = new Logger()
    error_logger = this.logger.errorLogger()

    async show(keyval: Keyval) {
        const user = new UserModel()
        const role = new RoleModel()
        const status = new StatusModel()
        
        await (await db).query<RowDataPacket[]>(UserQuery.show(keyval))
            .then(([data, field]) => {
                const result = JSON.parse(JSON.stringify(data))[0]
                if (result == undefined) return null
                
                role.setId(result.role_id)
                role.setName(result.role_name)

                status.setId(result.status_id)
                status.setName(result.status_name)

                user.setId(result.id)
                user.setName(result.name)
                user.setEmail(result.email)
                user.setPassword(result.password)
                user.setRole(role)
                user.setStatus(status)
                user.setSecretKey(result.secret_key)
                user.setOtpauthUrl(result.otpauth_url)
                user.setVerifyToken(result.verify_token)
                user.setCreatedAt(result.created_at)
                user.setUpdatedAt(result.updated_at)

            })
            .catch((err:any) => this.error_logger.error({ message: err, system:"mysql" }))
        return user
    }

    async create_token(user: UserModel) {
        
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.create_token(user))
        .then(([data, field]) => {
            console.log(data);
            const result = JSON.parse(JSON.stringify(data))
            if (result.affectedRows == 0) status = false
            else status = true
        })
        .catch((err) => this.error_logger.error({ message: err, system:"mysql" }))
        return status
    }
    
    async create_otp(user: UserModel) {
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.create_otp(user))
            .then(([data, field]) => {
                console.log(data);
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => this.error_logger.error({ message: err, system:"mysql" }))
        return status
    }
    
    async verified_otp(user: UserModel) {
        
        let status = false
        await (await db).query<RowDataPacket[]>(UserQuery.verified_otp(user))
            .then(([data, field]) => {
                console.log(data);
                const result = JSON.parse(JSON.stringify(data))
                if (result.affectedRows == 0) status = false
                else status = true
            })
            .catch((err) => this.error_logger.error({ message: err, system:"mysql" }))
        return status
    }
}