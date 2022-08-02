import { body } from 'express-validator';

const getUserValidationRules = () => {
  return [
    body('username').notEmpty().withMessage('You should have a username'),
    body('email').isEmail().withMessage('You should have an email'),
    body('password').notEmpty().withMessage('You should have a password'),
  ];
};
export { getUserValidationRules };
