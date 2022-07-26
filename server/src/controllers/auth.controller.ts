import type { Request, Response, NextFunction } from 'express';
import { userRepository } from '../application.database.js';
import type { HttpError } from '../middlewares/error.middleware.js';
import pkg from 'jsonwebtoken';
const { sign } = pkg;
const login = async (req:Request, res:Response, next:NextFunction) => {
  const user = await userRepository!.findOne({
    where: {
      email: req.body.email,
    },
    select: ['id', 'password'],
  });
  if (user && await user!.verifyPassword(req.body.password)) {
    const jwtToken = await sign(
      {
        exp:
              Math.floor(Date.now() / 1000) +
              60 * parseInt('1'),
        data: user.id,
      },
      'infrascrum',
    );
    // eslint-disable-next-line no-console
    return res.json(jwtToken);
  }
  const err = new Error() as HttpError;
  err.message = 'Bad credentials';
  err.status = 401;
  next(err);
};
export { login };
