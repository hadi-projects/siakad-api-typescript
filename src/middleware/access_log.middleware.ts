import express from 'express'
import LogModel from "../model/log.model"
import Logger from "../service/logger"
import moment from 'moment'

export class AccessLogMiddleware {
	
	log(req:express.Request, res:express.Response, next:express.NextFunction){
		const logger = new Logger()
		const log_model = new LogModel()


		log_model.setIp('http://127.0.0.1')
		log_model.setMethod(req.method)
		log_model.setUrl(req.originalUrl)
		log_model.setEndpoint(req.url)
		log_model.setHeader(JSON.stringify(req.headers))
		log_model.setHeader(JSON.stringify(req.body))
		log_model.setTimestamp(moment().format())

		logger.accesslLog().info(log_model)
	}
}