import winston from 'winston';
import moment from 'moment';


class LoggerFile{
    accesslLog():winston.Logger{
        const log =  winston.createLogger({
            format: winston.format.json(),
            defaultMeta: {timestamp: moment().format(), service: "Tennet API - access log"},
            transports: [
                new winston.transports.File({filename:'src/log/access.json'})
            ]
        })
        return log
    }
    systemLogger():winston.Logger{
        const log =  winston.createLogger({
            defaultMeta: {timestamp:moment().format(), service: "Tennet API - system log"},
            format: winston.format.json(),
            transports: [
                new winston.transports.File({filename:'src/log/error.json'})
            ]
        })
        return log 
    }
}

export default LoggerFile;

