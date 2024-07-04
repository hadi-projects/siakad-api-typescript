import jwt from 'jsonwebtoken'
import JwtModel from '../model/jwt.model';

export default class JwtService {
    static generate_jwt(user_id: string): JwtModel {
        const jwt_model = new JwtModel()

            jwt_model.setToken(jwt.sign({ user_id: user_id, created_at: Date.now() }, process.env.JWT_SECRET!))
            jwt_model.setShouldRefresh(false)

            return jwt_model
    }
    static verify_jwt(jwt_token:string):string {
        const data = jwt.decode(jwt_token)
        return data==undefined ? "0" : JSON.stringify(data)
    }
}