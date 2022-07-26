import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';

const apiAuthRouter:Router = Router();
apiAuthRouter.post('/login', catchErrors(login));

export { apiAuthRouter };
