import { Router } from 'express';
import { createTask, deleteTaskById, findAllTasks, updateTaskById } from '../controllers/task.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getTaskValidationRules } from '../validators/task.validator.js';

const apiTaskRouter:Router = Router();

apiTaskRouter.post('', getTaskValidationRules(), validate, catchErrors(createTask));
apiTaskRouter.get('', catchErrors(findAllTasks));
apiTaskRouter.patch('', catchErrors(updateTaskById)); //! p-e ajouter les règles de validation
apiTaskRouter.delete('', catchErrors(deleteTaskById));

export { apiTaskRouter };
