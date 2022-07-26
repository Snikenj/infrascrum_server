import cors from 'cors';
import express from 'express';
import { apiElementRouter } from './routes/element.router.js';
import { apiProjectRouter } from './routes/project.router.js';
import { apiTaskRouter } from './routes/task.router.js';
import { apiUserRouter } from './routes/user.router.js';

const createApp = ():express.Application => {
  const app = express();
  app.use(cors());
  app.use(apiUserRouter);
  app.use(apiProjectRouter);
  app.use(apiElementRouter);
  app.use(apiTaskRouter);
  return app;
};

export { createApp };
