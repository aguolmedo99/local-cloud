import { Request, Response } from 'express';
import {FirstService} from "../services/FirstService";
import Types from '../services/types/types';
import container from '../services/inversify.config';

let _firstService = container.get<FirstService>(Types.FirstService);

export async function holaMundo(request: Request, response: Response) {
    return response.status(200).json(await _firstService.holamundo())
}

export const FirstServiceController =
    {
        holaMundo
    }

