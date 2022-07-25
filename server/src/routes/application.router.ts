import { Router } from 'express';
import { apiController } from '../controllers/api.controller.js';

const router : Router = Router();
router.get('/', apiController);

export { router };
