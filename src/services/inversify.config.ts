import {Container} from "inversify";
import Types from "./types/types";
import {IFirstService} from "./interface/IFirstService";
import {FirstService} from "./FirstService";

const container = new Container();

container.bind<IFirstService>(Types.FirstService).to(FirstService);


export default container;