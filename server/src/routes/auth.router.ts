import { Router } from 'express';
import { login } from '../controllers/auth.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';

const apiAuthRouter:Router = Router();
apiAuthRouter.post('/login', validate, catchErrors(login));

export { apiAuthRouter };
