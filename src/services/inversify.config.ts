import {Container} from "inversify";
import Types from "./types/types";
import {IPrincipalService} from "./interface/IPrincipalService";
import {PrincipalService} from "./PrincipalService";

const container = new Container();

container.bind<IPrincipalService>(Types.PrincipalService).to(PrincipalService);


export default container;