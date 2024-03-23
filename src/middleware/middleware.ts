import AccessLogMiddleware from "./access_log.middleware";
import ApiKeyMiddleware from "./api_key.middleware"
import express from 'express';
import PermissionMiddleware from "./permission.middleware";
import { JWTMiddleware } from "./jwt.middleware";

export default class Middleware {
    check(req:express.Request, res:express.Response, next:express.NextFunction){
        const api_key = new ApiKeyMiddleware()
        const permission = new PermissionMiddleware()
        const jwt = new JWTMiddleware()

        api_key.check(req, res, next)
        AccessLogMiddleware.log(req, res, next)
        permission.check(req, res, next)
        jwt.check(req, res, next)
    }
}