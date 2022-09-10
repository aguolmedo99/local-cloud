import "reflect-metadata";
import bodyParser from 'body-parser';
import Express, { Request, Response } from 'express';
import {AppRoutes} from "./routes";

require('dotenv').config();

const app = Express();

process.env.TZ = 'America/Argentina/Cordoba'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

AppRoutes.forEach((route) => {
    app.use(route.path,
        (request: Request, response: Response, next: Function) => {
            route.action(request,response)
                .then(()=> next)
                .catch((err) => next(err));
            }
        )
    }
)

const startServer = async () => {
    await app.listen(process.env.PORT || 8080, () => {
        console.log(
            `-- ${new Date()} --\n-- Server running on http://127.0.0.1:${ process.env.PORT } -- \n-- Test endpoint on http://127.0.0.1:3000/holamundo --`);
    });
};


(async () =>
    {
        await startServer();
    }
)();