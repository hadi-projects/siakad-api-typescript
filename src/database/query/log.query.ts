import d from 'mysql2'
import Keyval from '../../model/keyval.model';
import moment from 'moment';
import { LogMethod } from 'winston';
import LogModel from '../../model/log.model';

export default class LogQuery {
    static datetime = moment().format().split("+")[0].replace("T", " ")

    static store(log: LogModel) {
        return `
        INSERT INTO logs (
        endpoint, ip, method, header, body, created_at
        ) VALUES (
    ${d.escape(log.getEndpoint())}, ${d.escape(log.getIp())}, ${d.escape(log.getMethod())},
    '${JSON.stringify(log.getHeader())}', '${log.getRequest_body()}', '${this.datetime}'
        );
        `;
    }
}
