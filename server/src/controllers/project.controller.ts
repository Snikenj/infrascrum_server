/* eslint-disable no-console */
import type { Request, Response } from 'express';
import { projectRepository } from '../application.database.js';
import type { Project } from '../models/project.model.js';

const findAllProjects = async (req: Request, res: Response) => {
  const projects = await projectRepository.find();
  return res.json({ projects });
}; //! Filtrer sur les projets de l'utilisateur (à implémenter)!!

const createProject = async (req: Request, res: Response) => {
  const project = projectRepository.create(req.body);
  await projectRepository.save(project);
  res.status(201).json({ project });
};

const updateProjectById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const project = await projectRepository.findOneBy({ id: parseInt(id) });
  if (project === undefined) {
    throw new Error('Project not found');
  } else {
    const mergedProject = projectRepository.merge(project as Project, req.body);
    await projectRepository.save(mergedProject);

    res.json({ project: mergedProject });
  }
};

const findProjectById = async (req:Request, res:Response) => {
  return res.json({ project: await projectRepository.findOneBy({ id: parseInt(req.params.id) }) });
};

const deleteProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json({ project: projectRepository.softDelete(id) });
};

export { createProject, findAllProjects, deleteProjectById, updateProjectById, findProjectById };
