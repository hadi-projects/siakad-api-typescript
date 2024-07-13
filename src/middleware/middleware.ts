import ApiKeyMiddleware from "./api_key.middleware"
import express from 'express';
import FailedResponse from "../util/response/failed_response";
import JWTMiddleware from "./jwt.middleware";
import AccessLogMiddleware from "./access_log.middleware";
import PermissionMiddleware from "./permission.middleware";

export default class Middleware {
    async check(req: express.Request, res: express.Response, next: express.NextFunction) {
        // api key
        // jwt 
        // permission log
        // access log
        if(new ApiKeyMiddleware().check(req) == false)
            return FailedResponse.tokenFailed(res)

        if (await new JWTMiddleware().check(req)==false) 
            return FailedResponse.jwtFailed(res)
        
        if(await new AccessLogMiddleware().log(req))
            return FailedResponse.logFailed(res)
        
        if (await new PermissionMiddleware().check(req)) 
            return FailedResponse.failedPermission(res)
        
        
        next()

    }
}