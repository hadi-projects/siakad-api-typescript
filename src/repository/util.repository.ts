import db from '../database/database'
import Logger from "../service/logger";
import PermissionQuery from '../database/query/permission.query';
import PermissionRepositoryModel from '../model/permissionrepository.model';
import { RowDataPacket } from 'mysql2/promise';
import { randomBytes } from 'crypto';

export default class UtilRepository {
    logger = new Logger()
    error_logger = this.logger.errorLogger()

   
}