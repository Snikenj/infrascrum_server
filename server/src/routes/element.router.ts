import { Router } from 'express';
import { createElement, deleteElementById, findAllElements, updateElementById } from '../controllers/element.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getElementValidationRules } from '../validators/element.validator.js';

const apiElementRouter:Router = Router();

apiElementRouter.post('element', getElementValidationRules(), validate, catchErrors(createElement));
apiElementRouter.get('elements', catchErrors(findAllElements));
apiElementRouter.patch('elements', catchErrors(updateElementById)); //! p-e ajouter les règles de validation
apiElementRouter.delete('elements', catchErrors(deleteElementById));

export { apiElementRouter };
