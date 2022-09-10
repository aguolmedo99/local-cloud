import {injectable} from "inversify";
import {IFirstService} from "./interface/IFirstService";
import {response} from "express";


// @ts-ignore
@injectable()
export class FirstService implements IFirstService {
    constructor() {}

    public async holamundo(){
        return 'Hola mundo';
    }

    public async upload(file) {
        file.mv(process.env.PATHDIR + file.name, function (err){
           if (err) return err;
        })
        return "File Uploaded";
    }
}