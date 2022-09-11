import {PrincipalServiceController} from "./controllers/PrincipalServiceController";


export const AppRoutes = [
    {
        path: '/holamundo',
        method: 'get',
        action: PrincipalServiceController.holaMundo,
    },
    {
        path: '/upload',
        method: 'post',
        action: PrincipalServiceController.upload,
    },
    {
        path: '/token',
        method: 'get',
        action: PrincipalServiceController.accessToken,
    }
]