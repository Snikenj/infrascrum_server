import { body } from 'express-validator';

const getUserValidationRules = () => {
  return [
    body('email').isEmail().withMessage('You should have an email'), //! Changer email et repassword qui sont les labels des champs du form (FRONT).
    body('repassword').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    }),
  ];
};
export { getUserValidationRules };
