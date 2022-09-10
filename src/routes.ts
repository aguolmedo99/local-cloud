import {FirstServiceController} from "./controllers/FirstServiceController";


export const AppRoutes = [
    {
        path: '/holamundo',
        method: 'get',
        action: FirstServiceController.holaMundo,
    },
    {
        path: '/upload',
        method: 'post',
        action: FirstServiceController.upload,
    }

]