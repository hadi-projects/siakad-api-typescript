import express from 'express'


export default class JWTMiddleware {
    static check(req: express.Request, res: express.Response, next: express.NextFunction):string{
        console.log('jwt middleware start');
        
        if(!req.headers.authorization?.includes("Bearer") && !req.url.includes('auth')){
            return 'no jwt found'
        }

        return ''
    }
}