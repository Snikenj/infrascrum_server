import type { Request, Response } from 'express';
import { checkRepository } from '../application.database.js';

const createCheck = async (req:Request, res:Response) => {
  const check = checkRepository.create(req.body);
  await checkRepository.save(check);
  res.status(201).json(check);
};

export { createCheck };
