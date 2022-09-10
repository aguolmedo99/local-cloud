import {injectable} from "inversify";
import {IFirstService} from "./interface/IFirstService";


// @ts-ignore
@injectable()
export class FirstService implements IFirstService {
    constructor() {}

    public async holamundo(): Promise<any> {
        return 'Hola mundo';
    }
}