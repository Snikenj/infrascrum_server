import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createElement, deleteElementById, findAllElements, updateElementById } from '../controllers/element.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getElementValidationRules } from '../validators/element.validator.js';

const apiElementRouter:Router = Router();

apiElementRouter.post('/elements', authorize, validate, getElementValidationRules(), catchErrors(createElement));
apiElementRouter.get('/elements', authorize, validate, catchErrors(findAllElements));
apiElementRouter.patch('/elements/:id', authorize, validate, catchErrors(updateElementById));
apiElementRouter.delete('/elements/:id', authorize, validate, catchErrors(deleteElementById));

export { apiElementRouter };
