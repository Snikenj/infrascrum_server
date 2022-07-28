import { body } from 'express-validator';

const getElementValidationRules = () => {
  return [
    body('name').notEmpty().withMessage('You should have an element name'),
    body('color').notEmpty().withMessage('You should have a color'),
  ];
};

export { getElementValidationRules };
