import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import { appError, notFound } from './middlewares/error.middleware.js';
import { apiElementRouter } from './routes/element.router.js';
import { apiProjectRouter } from './routes/project.router.js';
import { apiTaskRouter } from './routes/task.router.js';
import { apiUserRouter } from './routes/user.router.js';
import { apiAuthRouter } from './routes/auth.router.js';

const createApp = ():express.Application => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(apiAuthRouter);
  app.use(apiUserRouter);
  app.use(apiProjectRouter);
  app.use(apiElementRouter);
  app.use(apiTaskRouter);
  app.use(notFound);
  app.use(appError);
  return app;
};

export { createApp };
