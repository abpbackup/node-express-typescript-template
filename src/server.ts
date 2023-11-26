import cors from 'cors';
import express, { Application, json, urlencoded } from 'express';
import { router } from './router';
import dotenv from 'dotenv';
import { errorHandler } from './error-handler';

dotenv.config();

const port = process.env.PORT || 8080;
const App: Application = express();

App.use(cors());

// To parse body data received in JSON format
// You can leave this for all the routes or use it in the route you need as middleware
App.use(json());

// To receive data in the body as x-www-form-urlencoded
// You can leave this for all the routes or use it in the route you need as middleware
App.use(urlencoded());

App.use(router);
App.use(errorHandler);

App.listen(port, () => {
  console.log('Server started in port: ', port);
});
