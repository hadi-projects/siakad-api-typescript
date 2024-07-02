import c from 'crypto'
import bcrypt from 'bcryptjs';
const _2fa = require("node-2fa");
const aesEcb = require('aes-ecb');
const crypto = require('crypto')
import dotenv from 'dotenv';
dotenv.config();


export default class CryptoUtil {
    static sha256(data: string): string {
        const a = c.createHash('sha256').update(data).digest('hex').toString()
        console.log(a);
        return 'a'

    }

    static hashPassword(plain: string): string {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(plain, salt);
        return hash;
    }

    static comparePassword(plain: string, hashed: string): boolean {
        return bcrypt.compareSync(plain, hashed);

    }

    static generateOtp(account:any):any {
        let secret = _2fa.generateSecret({ name: process.env.APP_NAME, account: account})
        return {
            secret: secret.secret,
            uri: secret.uri
        }
    }
    static hashedOtpauthUrl(raw_uri:any):any {
        const res = this.encryptOtpauthUrl(raw_uri)
        return res
    }
    
    static verifyOtp(hashed:string, otp:string):boolean{

        
        let dec = this.decryptSecret(hashed)
        let res = _2fa.verifyToken(dec, otp.toString())
        
        console.log("====");
        console.log(dec, otp, res);
        console.log("====");
        
        if(!res) return false
        return true
    }
    
    static encryptSecret(secret:string):any{
            
        let key = new Buffer("8CBDEC62EB4DCA778F842B02503011B2" as string, 'hex')
        let cipher = crypto.createCipheriv("aes-128-ecb", key, null)
        cipher.setAutoPadding(false)
        let result = cipher.update(secret).toString('hex');
        const res = result += cipher.final().toString('hex');
        return res
    
    }
    static encryptOtpauthUrl(otpauth_url:string):any{
    
        let key = new Buffer("8CBDEC62EB4DCA778F842B02503011B2" as string, 'hex')
        let cipher = crypto.createCipheriv("aes-128-ecb", key, null)
        let result = cipher.update(otpauth_url).toString('hex');
        return result
    
    }
    
    static decryptSecret(secret:string):any{
        var key = new Buffer('8CBDEC62EB4DCA778F842B02503011B2' as string, 'hex')
        var encrypted = new Buffer(secret, 'hex')
        let decipher = crypto.createDecipheriv("aes-128-ecb", key, null)
        decipher.setAutoPadding(false)
        let result = decipher.update(encrypted).toString();
        return result += decipher.final().toString();
    }
    
    static decryptOtpauthUrl(outpauth_url:string):any{
        
        var key = new Buffer('8CBDEC62EB4DCA778F842B02503011B2' as string, 'hex')
        var encrypted = new Buffer(outpauth_url, 'hex')
        let decipher = crypto.createDecipheriv("aes-128-ecb", key, null)
        decipher.setAutoPadding(false)
        let result = decipher.update(encrypted).toString();
        return result
    }
}