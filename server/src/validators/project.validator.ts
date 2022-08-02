import { body } from 'express-validator';

const getProjectValidationRules = () => {
  return [
    body('projectName').notEmpty().withMessage('You should have a project name'),
    body('startDate').notEmpty().withMessage('You should have a start date'),
    body('endDate').notEmpty().withMessage('You should have a finish date'), //! Vérifier les labels dans le FRONT
  ];
};
export { getProjectValidationRules };
