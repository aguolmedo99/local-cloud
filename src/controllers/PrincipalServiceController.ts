import {PrincipalService} from "../services/PrincipalService";
import Types from '../services/types/types';
import container from '../services/inversify.config';
import base64Helper from "../utils/base64Helper";

let _firstService = container.get<PrincipalService>(Types.PrincipalService);

const jwt = require('jsonwebtoken');

export async function holaMundo(request, response) {
    if(!request.headers.authorization) {
        response.status(401).json('auth error \n debes mandar un token (jwt)');
        return;
    }
    const respuesta = await _firstService.holamundo(request.headers.authorization.split(' ')[1]);
    if (respuesta)
        response.status(200).json(respuesta);
    else
        response.status(401).json("auth error");
}
export async function upload(request, response) {
    try {

        if(!request.files || Object.keys(request.files).length === 0) {
             response.status(400).json("No files were uploaded")
        }

        let input = request.files.input;
        let auth = request.headers.authorization.split(' ')[1];

        let uploadResponse= await _firstService.upload(input,auth);

        if(!uploadResponse) response.status(401).json("Auth error");
        response.status(200).json("File uploaded");
    }
    catch (e) {
         response.status(409).json("Error Al subir el archivo: " + e)
    }
}
export async function accessToken(request, response) {

    if(!request.headers.authorization) {
        response.status(401).json('auth error \n debes mandar un basicAuth');
        return;
    }

    const basicAuth = base64Helper.decode(request.headers.authorization.split(' ')[1]);
    let token = await _firstService.accesToken(basicAuth);

    if (!token) {response.status(404).json("not token today");}
    response.status(200).json(token);
}




export const PrincipalServiceController =
    {
        holaMundo,
        upload,
        accessToken
    }

