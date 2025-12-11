import { User } from "../models/user.model.js";
import { getAuth, UserRecord } from "firebase-admin/auth"

export class AuthService {
    constructor() {}

    create(user: User): Promise<UserRecord> {
        return getAuth().createUser({
            email: user.email,
            password: user.password!,   // já validado antes com Joi
            displayName: user.nome
        });
    }
}
