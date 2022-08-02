import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { deleteUserById, findAllUsers, findUserById, registerUser, updateUserById } from '../controllers/user.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getUserValidationRules } from '../validators/register.validator.js';

const apiUserRouter:Router = Router();
apiUserRouter.post('/users', getUserValidationRules(), catchErrors(registerUser));
apiUserRouter.get('/users', authorize, validate, catchErrors(findAllUsers));
apiUserRouter.get('/users/:id', authorize, validate, catchErrors(findUserById));
apiUserRouter.patch('/users/:id', authorize, validate, catchErrors(updateUserById));
apiUserRouter.delete('/users/:id', authorize, validate, catchErrors(deleteUserById));

export { apiUserRouter };
