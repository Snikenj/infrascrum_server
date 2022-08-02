/* eslint-disable no-console */
import type { Request, Response } from 'express';
import { decode } from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import { projectRepository } from '../application.database.js';
import type { Project } from '../models/project.model.js';

const findAllProjects = async (req: Request, res: Response) => {
  const projects = await projectRepository.find();
  return res.json(projects);
}; //! Filtrer sur les projets de l'utilisateur (à implémenter)!!

const createProject = async (req: Request, res: Response) => {
  const token = req.headers.authorization!.split(' ')[1]; // ? OK
  const userId = ((await decode(token) as JwtPayload).data); // ? OK
  // const users = await userRepository.findOneBy({ id: parseInt(req.body.users) }); //* Concerne les users assignés au projet
  // console.log(users);
  // const admin = await userRepository.findOneBy({ id: userId }); // ? OK
  // req.body.user = admin; // ? OK
  // req.body.users = [users]; //* Concerne les users assignés au projet
  const project = projectRepository.create(req.body);
  await projectRepository.save(project);
  res.status(201).json(project);
};

// const createTodo = async (req:Request, res:Response) => { //* Crée un todo avec une catégorie assignée
//   const token = req.headers.authorization!.split(' ')[1];
//   const userId = ((await decode(token) as JwtPayload).data);
//   const category = await categoryRepository.findOneBy({ id: parseInt(req.body.category) });
//   const user = await userRepository.findOneBy({ id: userId });
//   req.body.user = user;
//   req.body.categories = [category];
//   const todo = todoRepository.create(req.body);
//   await todoRepository.save(todo);
//   res.status(201).json({ todo });
// };

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
  return res.json(await projectRepository.findOneBy({ id: parseInt(req.params.id) }));
};

const deleteProjectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  return res.json(projectRepository.softDelete(id));
};

export { createProject, findAllProjects, deleteProjectById, updateProjectById, findProjectById };
