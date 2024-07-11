import AccessLogMiddleware from "./access_log.middleware";
import ApiKeyMiddleware from "./api_key.middleware"
import express from 'express';
import PermissionMiddleware from "./permission.middleware";
import FailedResponse from "../util/response/failed_response";
import JWTMiddleware from "./jwt.middleware";

export default class Middleware {
    async check(req: express.Request, res: express.Response, next: express.NextFunction) {

        AccessLogMiddleware.log(req, res)

        let result:any = ApiKeyMiddleware.check(req, res)
        if (result == false) return FailedResponse.tokenFailed(res)

        result = await PermissionMiddleware.check(req)
        if (result == false) return FailedResponse.failedPermission(res, '')

        result = JWTMiddleware.check(req, res, next)
        if (result != '') return FailedResponse.jwtFailed(res, result)

        next()

    }
}