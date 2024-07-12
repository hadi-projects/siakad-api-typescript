import express from 'express'
import jsonwentoken from 'jsonwebtoken'
import JwtService from '../service/jwt.service';

export default class JWTMiddleware {
    static check(req: express.Request):string{
        console.log('jwt middleware start');
        const token:string = req.headers.authorization!;
        
        if( token.includes("Bearer") && !req.url.includes('auth')){
            return 'no jwt found'
        }
        // check for exipriraion
        const user_id = JwtService.extract_data(token.split(" ")[1])
        console.log(user_id);
        



        // get user and store to redis
        // refresh jwt token if needed

        return ''
    }
}