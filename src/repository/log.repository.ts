import d from '../database/database'
import { RowDataPacket } from "mysql2";
import AccessLogQuery from "../database/query/log.query";
import LogModel from "../model/meta/access_log.model";
import Logger from "../service/logger";

export default class LoglRepository {
    logger = new Logger()
    error_logger = this.logger.errorLogger()

    async store(log: LogModel): Promise<any> {
        // console.log('store log');
        
        let result = false
        await (await d).query<RowDataPacket[]>(AccessLogQuery.store(log))
            .then(([data]) => {
                // console.log(data);
                
            })
            .catch((err:any) => {
                result = false
                this.error_logger.error({ message: err, system:"mysql"})
            })
        return result
    }
}