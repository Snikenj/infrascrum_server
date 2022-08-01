import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createProject, findAllProjects, deleteProjectById, updateProjectById, findProjectById } from '../controllers/project.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getProjectValidationRules } from '../validators/project.validator.js';

const apiProjectRouter:Router = Router();
apiProjectRouter.post('/projects', validate, authorize, getProjectValidationRules(), catchErrors(createProject)); //! A vérifier également
apiProjectRouter.get('/projects', authorize, validate, catchErrors(findAllProjects));
apiProjectRouter.get('/projects/:id', authorize, validate, catchErrors(findProjectById));
apiProjectRouter.patch('/projects/:id', authorize, validate, catchErrors(updateProjectById)); //! p-e ajouter les règles de validation
apiProjectRouter.delete('/projects/:id', authorize, validate, catchErrors(deleteProjectById)); //! Route à vérifier car générale

export { apiProjectRouter };
