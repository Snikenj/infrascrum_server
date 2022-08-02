/* eslint-disable no-console */
import type { Request, Response, NextFunction } from 'express';
import { userRepository } from '../application.database.js';
import type { HttpError } from '../middlewares/error.middleware.js';
import pkg from 'jsonwebtoken';
// import type { JwtPayload } from 'jsonwebtoken';
const { sign, verify } = pkg;
const login = async (req:Request, res:Response, next:NextFunction) => {
  const user = await userRepository!.findOne({
    where: {
      username: req.body.username,
    },
    select: ['id', 'password'],
  });
  if (user && await user!.verifyPassword(req.body.password)) {
    const jwtToken = await sign(
      {
        // exp:
        //       Math.floor(Date.now() / 1000) +
        //       60 * parseInt(process.env.JWT_EXP || '1'),
        data: user.id,
      },
      process.env.JWT_SECRET || 'infrascrum',
    );
    return res.json({ access_token: jwtToken, user_id: user.id });
  }
  const err = new Error() as HttpError;
  err.message = 'Bad credentials.';
  err.status = 401;
  next(err);
};

const authorize = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const jwtToken = req.headers.authorization?.split(' ')[1] || 'NO TOKEN';
    await verify(jwtToken, process.env.JWT_SECRET || 'nojwt');
    next();
  } catch (e) {
    const err = new Error('Invalid token.') as HttpError;
    err.status = 401;
    next(err);
  }
};

export { login, authorize };
