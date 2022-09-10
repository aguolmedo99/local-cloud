import "reflect-metadata";
import bodyParser from 'body-parser';
import {AppRoutes} from "./routes";

require('dotenv').config();

const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();


process.env.TZ = 'America/Argentina/Cordoba'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(fileUpload());


AppRoutes.forEach((route) => {
    app.use(route.path,
        (request, response, next) => {
            route.action(request,response)
                .then(()=> next)
                .catch((err) => next(err));
            }
        )
    }
)

const startServer = async () => {
    await app.listen(process.env.PORT || 8080, process.env.HOSTNAME, () => {
        console.log(
            `-- ${new Date()} --\n-- Server running on http://${process.env.HOSTNAME}:${process.env.PORT} -- \n-- Test endpoint on  http://${process.env.HOSTNAME}:${process.env.PORT}/holamundo --`);
    });
};


(async () =>
    {
        await startServer();
    }
)();