/* eslint-disable no-console */
import type { Request, Response } from 'express';
import { projectRepository } from '../application.database.js';
import type { Project } from '../models/project.model.js';

const findAllProjects = async (req: Request, res: Response) => {
  const projects = await projectRepository.find();
  return res.json(projects);
};

const createProject = async (req: Request, res: Response) => {
  const project = projectRepository.create(req.body);
  await projectRepository.save(project);
  res.status(201).json(project);
};

const updateProjectById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const project = await projectRepository.findOneBy({ id: parseInt(id) });
  if (project === undefined) {
    throw new Error('Project not found');
  } else {
    const mergedProject = projectRepository.merge(project as Project, req.body);
    await projectRepository.save(mergedProject);

    res.json(mergedProject);
  }
};

const findProjectById = async (req:Request, res:Response) => {
  const projectsDetaMere = await projectRepository
    .createQueryBuilder('project')
    .select()
    .where('project.id = :id', { id: req.params.id })
    .leftJoinAndSelect('project.elements', 'elements')
    .leftJoinAndSelect('elements.tasks', 'tasks')
    .getOne();
  // console.log(projectsDetaMere?.elements);
  // const bigArray = projectsDetaMere?.elements;
  // if (bigArray) {
  //   const filterArray = bigArray.map(x => x.id);
  //   console.log(filterArray);
  //   return res.json(filterArray);
  // }
  return res.json({ projectsDetaMere });
};

const deleteProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json(projectRepository.softDelete(id));
};

export { createProject, findAllProjects, deleteProjectById, updateProjectById, findProjectById };
