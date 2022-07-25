/* eslint-disable no-console */
import type { Request, Response } from 'express';
import { elementRepository } from '../application.database.js';

const findAllProjects = async (req:Request, res:Response) => {
  return res.json({ projects: await elementRepository.find() });
};

const createProject = async (req:Request, res:Response) => {
  const project = elementRepository.create(req.body);
  await elementRepository.save(project);
  res.status(201).json({ project });
};

const findProjectById = async (req:Request, res:Response) => {
  const { id } = req.params;
  return res.json({ project: await elementRepository.find(id) }); //! Trouver ID
};

const deleteProjectById = async (req:Request, res:Response) => {
  const { id } = req.params;
  return res.json({ project: elementRepository.softDelete(id) });
};

export { createProject, findAllProjects, findProjectById, deleteProjectById };
