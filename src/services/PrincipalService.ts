import {injectable} from "inversify";
import {IPrincipalService} from "./interface/IPrincipalService";
import User from "../model/user";

const jwt = require('jsonwebtoken');

// @ts-ignore
@injectable()
export class PrincipalService implements IPrincipalService {
    constructor() {}

    public async holamundo(token){
        try {
            jwt.verify(token, process.env.SECRET);
            return "hola mundo(¡siempre y cuando tengas el token!)"
        }
        catch (e) {
            return e;
        }


    }

    public async upload(file,token) {
        try {
            jwt.verify(token, process.env.SECRET);
            file.mv(process.env.PATHDIR + file.name, function (err){
                if (err) return err;
            })
            return true;
        } catch {
            return false;
        }
    }

    public async accesToken(basicAuth: string) {
        try {
            const user: User = new User(basicAuth.split(':')[0],basicAuth.split(':')[1]);
            if
            (user.username != process.env.userADMIN ||
                user.password != process.env.passwordADMIN)
                return;

            return jwt.sign({user}, process.env.SECRET, { expiresIn: '300s' });
        }
        catch (e) {
            return e;
        }

    }






}