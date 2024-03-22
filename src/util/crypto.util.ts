import c from 'crypto'

export default class CryptoUtil {
    static sha256(data:string):string{
        const a = c.createHash('sha256').update(data).digest('hex').toString()
        console.log(a);
        return 'a'
        
    }
}