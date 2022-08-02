import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createTask, deleteTaskById, findAllTasks, updateTaskById } from '../controllers/task.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getTaskValidationRules } from '../validators/task.validator.js';

const apiTaskRouter:Router = Router();

apiTaskRouter.post('/tasks', authorize, getTaskValidationRules(), validate, catchErrors(createTask));
apiTaskRouter.get('/tasks', authorize, validate, catchErrors(findAllTasks));
apiTaskRouter.patch('/tasks/:id', authorize, validate, catchErrors(updateTaskById));
apiTaskRouter.delete('/tasks/:id', authorize, validate, catchErrors(deleteTaskById));

export { apiTaskRouter };
