import { Router } from 'express';
import { authorize } from '../controllers/auth.controller.js';
import { createCheck } from '../controllers/checklist.controller.js';
import { catchErrors } from '../middlewares/error.middleware.js';
import { validate } from '../validators/base.validator.js';

const apiCheckRouter:Router = Router();
apiCheckRouter.post('/checklists', authorize, validate, catchErrors(createCheck));

export { apiCheckRouter };
