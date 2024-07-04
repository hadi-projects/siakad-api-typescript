import d from '../database/database'
import Logger from "../service/logger";
import PermissionQuery from '../database/query/permission.query';
import PermissionRepositoryModel from '../model/permissionrepository.model';
import { RowDataPacket } from 'mysql2/promise';
import { log } from 'console';

export default class PermissionRepository {
    logger = new Logger()
    error_logger = this.logger.errorLogger()

    async check(api: PermissionRepositoryModel): Promise<any> {
        let result = false
        await (await d).query<RowDataPacket[]>(PermissionQuery.index(api))
            .then(([data]) => {
                const r = JSON.parse(JSON.stringify(data))[0]
                console.log(data);
                
                if (r.permissions == null) result = false
                else result = true
            })
            .catch((err:any) => {
                result = false
                this.error_logger.error({ message: err, system:"mysql"})
            })
        return result
    }
}