import {FirstServiceController} from "./controllers/FirstServiceController";


export const AppRoutes = [
    {
        path: '/holamundo',
        method: 'get',
        action: FirstServiceController.holaMundo,
    }
]