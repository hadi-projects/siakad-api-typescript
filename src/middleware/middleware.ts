import AccessLogMiddleware from "./access_log.middleware";
import ApiKeyMiddleware from "./api_key.middleware"
import express from 'express';
import PermissionMiddleware from "./permission.middleware";
import FailedResponse from "../util/response/failed_response";

export default class Middleware {
    async check(req: express.Request, res: express.Response, next: express.NextFunction) {

        const api_key = new ApiKeyMiddleware()
        const permission = new PermissionMiddleware()

        let result = api_key.check(req, res)
        if(result == false) return FailedResponse.tokenFailed(res)
        
        AccessLogMiddleware.log(req, res)
        
        result = await permission.check(req, res)
        if(result == false) return FailedResponse.failedPermission(res, '')

        next()

    }
}