// import AccessLogMiddleware from "./access_log.middleware";
import ApiKeyMiddleware from "./api_key.middleware"
import express from 'express';
import PermissionMiddleware from "./permission.middleware";
import FailedResponse from "../util/response/failed_response";
import JWTMiddleware from "./jwt.middleware";

export default class Middleware {
    async check(req: express.Request, res: express.Response, next: express.NextFunction) {
        // api key
        // jwt 
        // permission log
        // access log
        // if (ApiKeyMiddleware.check(req, res) == false) return FailedResponse.tokenFailed(res)
        // if (await PermissionMiddleware.check(req) == false) return FailedResponse.failedPermission(res, '')
        // if (JWTMiddleware.check(req) != '') return FailedResponse.jwtFailed(res, '')

        // AccessLogMiddleware.log(req, res)

        next()

    }
}