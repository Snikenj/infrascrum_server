import { Router } from 'express';
import { createElement, deleteElementById, findAllElements, updateElementById } from '../controllers/element.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getElementValidationRules } from '../validators/element.validator.js';

const apiElementRouter:Router = Router();

apiElementRouter.post('projects/:id', getElementValidationRules(), validate, catchErrors(createElement));
apiElementRouter.get('projects/:id', catchErrors(findAllElements));
apiElementRouter.patch('projects/:id', catchErrors(updateElementById)); //! p-e ajouter les règles de validation
apiElementRouter.delete('projects/:id', catchErrors(deleteElementById));

export { apiElementRouter };
