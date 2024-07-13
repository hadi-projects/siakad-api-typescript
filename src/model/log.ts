import { ResultSetHeader } from "mysql2/promise";
import LoggerFile from "../service/logger";
import AccessLogModel from "./meta/access_log.model";
import SystemLog from "./meta/system_log";

export default class Log {

    async store_access_log(access_log: AccessLogModel): Promise<boolean> {
        const log_mode = process.env["LOG"]
        var result = true
        // store log to database
        if (log_mode?.includes("DATABASE")) {
            const s = await access_log.create() as unknown as ResultSetHeader
            if (s.affectedRows == 1) result = true
            else result = false
        }
        // store log to file
        if (log_mode?.includes("FILE")) {
            new LoggerFile().accesslLog().info(access_log)
        }
        return result
    }


    async store_system_log(system_log: SystemLog): Promise<boolean> {
        const log_mode = process.env["LOG"]
        var result = true
        // store log to database
        if (log_mode?.includes("DATABASE")) {
            const s = await system_log.create() as unknown as ResultSetHeader
            if (s.affectedRows == 1) result = true
            else result = false
        }
        // store log to file
        if (log_mode?.includes("FILE")) {
            new LoggerFile().systemLogger().info(system_log)
        }
        return result
    }

}