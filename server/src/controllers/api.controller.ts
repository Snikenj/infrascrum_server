import type { Request, Response } from 'express';

const apiController = (req:Request, res:Response) => {
  res.json({ msg: 'Hello there' });
};

export { apiController };
