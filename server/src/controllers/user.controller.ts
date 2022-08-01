import type { Request, Response } from 'express';
import { userRepository } from '../application.database.js';
import type { User } from '../models/user.model.js';

const registerUser = async (req:Request, res:Response) => {
  const user = userRepository.create(req.body.user);
  await userRepository.save(user);
  res.json({ user });
};

const findAllUsers = async (req: Request, res: Response) => {
  const user = await userRepository.find();
  return res.json({ user });
};

const findUserById = async (req:Request, res:Response) => {
  return res.json({ user: await userRepository.findOneBy({ id: parseInt(req.params.id) }) });
};

const deleteUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({ user: userRepository.softDelete(id) });
};

const updateUserById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const user = await userRepository.findOneBy({ id: parseInt(id) });
  if (user === undefined) {
    throw new Error('User not found');
  } else {
    const mergedUser = userRepository.merge(user as User, req.body);
    await userRepository.save(mergedUser);

    res.json({ user: mergedUser });
  }
};

export { registerUser, findAllUsers, findUserById, deleteUserById, updateUserById };
