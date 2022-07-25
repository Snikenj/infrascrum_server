import { Router } from 'express';
import { createProject, findAllProjects, deleteProjectById } from '../controllers/project.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getProjectValidationRules } from '../validators/project.validator.js';
import { apiUserRouter } from './user.router.js';

const apiProjectRouter:Router = Router();
apiUserRouter.post('/projects/newproject', getProjectValidationRules(), validate, catchErrors(createProject)); //! A vérifier également
apiUserRouter.get('/projects', catchErrors(findAllProjects));
// apiUserRouter.get('/projects/projects/:id', catchErrors(findProjectById));
apiUserRouter.delete('/projects/projects/:id', catchErrors(deleteProjectById)); //! Route à vérifier /pro/pro

export { apiProjectRouter };
