import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createProject, findAllProjects, deleteProjectById, updateProjectById, findProjectById } from '../controllers/project.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getProjectValidationRules } from '../validators/project.validator.js';

const apiProjectRouter:Router = Router();
apiProjectRouter.post('/projects', authorize, getProjectValidationRules(), validate, catchErrors(createProject)); //! A vérifier également
apiProjectRouter.get('/projects', authorize, catchErrors(findAllProjects));
apiProjectRouter.get('/projects/:id', authorize, catchErrors(findProjectById));
apiProjectRouter.patch('/projects/:id', authorize, catchErrors(updateProjectById)); //! p-e ajouter les règles de validation
apiProjectRouter.delete('/projects/:id', authorize, catchErrors(deleteProjectById)); //! Route à vérifier car générale

export { apiProjectRouter };
