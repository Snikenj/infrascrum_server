import { body } from 'express-validator';

const getElementValidationRules = () => {
  return [
    body('nameElement').notEmpty().withMessage('You should have an element name'),
    body('colorElement').notEmpty().withMessage('You should pick a color'),
  ];
};

export { getElementValidationRules };
