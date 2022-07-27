import { Router } from 'express';
import { createProject, findAllProjects, deleteProjectById, updateProjectById, findProjectById } from '../controllers/project.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';
import { getProjectValidationRules } from '../validators/project.validator.js';

const apiProjectRouter:Router = Router();
apiProjectRouter.post('/project', getProjectValidationRules(), validate, catchErrors(createProject)); //! A vérifier également
apiProjectRouter.get('/projects', catchErrors(findAllProjects));
apiProjectRouter.get('/projects/:id', catchErrors(findProjectById));
apiProjectRouter.patch('/projects/:id', catchErrors(updateProjectById)); //! p-e ajouter les règles de validation
apiProjectRouter.delete('/projects/:id', catchErrors(deleteProjectById)); //! Route à vérifier car générale

export { apiProjectRouter };
