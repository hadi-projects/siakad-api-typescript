import express from 'express'
import FailedResponse from '../util/response/failed_response'


export default class ApiKeyMiddleware {
    check(req:express.Request, res:express.Response, next:express.NextFunction){
        
        if(req.url.includes('/ping')) return next()

        if(!req.headers["x-api-key"]) return FailedResponse.tokenFailed(res)
        else next()
    }
}