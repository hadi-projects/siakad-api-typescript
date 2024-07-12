import jwt from 'jsonwebtoken'
import JwtModel from '../model/jwt.model';

export default class JwtService {
    static generate_jwt(user_id: string, current_jwt: string = ""): JwtModel {
        const jwt_model = new JwtModel()

        if (current_jwt != "") {
            // check if jwt need to refresh, if yes refresh the token
            let data = jwt.decode(current_jwt) 
            data = data == undefined ? "0" : JSON.stringify(data)
            
            const max_age = parseInt(JSON.parse(data!).created_at) + (parseInt(process.env['JWT_AGE']!) * 60)
            if(parseInt(JSON.parse(data!).created_at)  > max_age){
                // return expired
            }
            return jwt_model.setShouldRefresh(false).setToken(current_jwt)
            
        } else {
            jwt_model.setToken(jwt.sign({ user_id: user_id, created_at: Date.now() }, process.env.JWT_SECRET!))
            jwt_model.setShouldRefresh(false)
        }

        return jwt_model
    }
    static verify_jwt(jwt_token: string): string {
        const data = jwt.decode(jwt_token)
        return data == undefined ? "0" : JSON.stringify(data)
    }
    
    static extract_data(jwt_token: string): string|Object{
        const data = jwt.decode(jwt_token)
        return data == undefined ? {} : data
    }
}