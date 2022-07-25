import express from 'express';
import { router } from './routes/application.router.js';
import { apiProjectRouter } from './routes/project.router.js';
import { apiUserRouter } from './routes/user.router.js';

const createApp = ():express.Application => {
  const app = express();
  app.use(router);
  app.use(apiUserRouter);
  app.use(apiProjectRouter);
  return app;
};

export { createApp };
