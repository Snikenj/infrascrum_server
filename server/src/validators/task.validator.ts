import { body } from 'express-validator';

const getTaskValidationRules = () => {
  return [
    body('title').notEmpty().withMessage('You should have a title'),
    body('status').notEmpty().withMessage('You should have a status'),
    body('time').notEmpty().withMessage('You should have a duration'),
  ];
};

export { getTaskValidationRules };
