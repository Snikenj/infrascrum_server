import { Router } from 'express';
import { registerUser } from '../controllers/user.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getUserValidationRules } from '../validators/register.validator.js';

const apiUserRouter:Router = Router();
apiUserRouter.post('/register', getUserValidationRules(), validate, catchErrors(registerUser));

export { apiUserRouter };
