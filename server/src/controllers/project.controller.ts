/* eslint-disable no-console */
import type { Request, Response } from 'express';
import { projectRepository } from '../application.database.js';

const findAllProjects = async (req: Request, res: Response) => {
  return res.json({ projects: await projectRepository.find() });
};

const createProject = async (req: Request, res: Response) => {
  const project = projectRepository.create(req.body);
  await projectRepository.save(project);
  res.status(201).json({ project });
};

// const findProjectById = async (req:Request, res:Response) => {
//   const { id } = req.params;
//   return res.json({ project: await projectRepository.find(id) }); //! Trouver ID
// };

const deleteProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({ project: projectRepository.softDelete(id) });
};

export { createProject, findAllProjects, deleteProjectById };
