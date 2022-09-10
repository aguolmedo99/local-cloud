import {request, Request, response, Response} from 'express';
import {FirstService} from "../services/FirstService";
import Types from '../services/types/types';
import container from '../services/inversify.config';

let _firstService = container.get<FirstService>(Types.FirstService);

export async function holaMundo(request, response) {
     response.status(200).json(await _firstService.holamundo());
}
export async function upload(request, response) {
    try {

        if(!request.files || Object.keys(request.files).length === 0) {
             response.status(400).json("No files were uploaded")
        }

        let input = request.files.input;
        let uploadResponse= await _firstService.upload(input);

        response.status(200).json(uploadResponse);
    }
    catch (e) {
         response.status(409).json("error al subir el archivo")
    }
}


export const FirstServiceController =
    {
        holaMundo,
        upload
    }

