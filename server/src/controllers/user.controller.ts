import type { Request, Response } from 'express';
import { userRepository } from '../application.database.js';

const registerUser = async (req:Request, res:Response) => {
  const user = userRepository.create(req.body.user);
  await userRepository.save(user);
  res.json({ user });
};

export { registerUser };
