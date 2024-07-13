import express from 'express'
import JwtService from '../service/jwt.service';
import rclient from '../service/redis.service'
import UserModel from '../model/user.model';


export default class JWTMiddleware {
    async check(req: express.Request): Promise<boolean> {
        console.log('jwt middleware start');

        // something wrong will return false
        const token: string = req.headers.authorization!;

        // check for exception
        if (req.url.includes('auth')) return true
        
        // check for existing
        if (token.includes("Bearer")) return false

        // check for exipriraion
        const user_id = JwtService.extract_data(token.split(" ")[1])
        console.log(user_id);
        // set authuser to redis as auth
        await (await rclient).hSet('auth:user', {
            name:'auth2'
        }).then(console.log).catch(console.log)




        // get user and store to redis
        // refresh jwt token if needed

        return false
    }
}