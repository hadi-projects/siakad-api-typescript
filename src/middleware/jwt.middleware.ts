import express from 'express'


export class JWTMiddleware {
    check(req: express.Request, res: express.Response, next: express.NextFunction){
        console.log('jwt middleware start');
        
        if(!req.headers.authorization){
            return next()
        }
    }
}