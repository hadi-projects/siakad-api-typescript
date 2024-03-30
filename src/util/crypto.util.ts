import c from 'crypto'
import bcrypt from 'bcryptjs';

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
}