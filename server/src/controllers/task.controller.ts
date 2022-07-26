import type { Request, Response } from 'express';
import { taskRepository } from '../application.database.js';
import type { Task } from '../models/task.model.js';

const findAllTasks = async (req:Request, res:Response) => {
  return res.json({ tasks: await taskRepository.find() });
};

const createTask = async (req:Request, res:Response) => {
  const task = taskRepository.create(req.body);
  await taskRepository.save(task);
  res.status(201).json({ task });
};

const updateTaskById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const task = await taskRepository.findOneBy({ id: parseInt(id) });
  if (task === undefined) {
    throw new Error('Task not found');
  } else {
    const mergedTask = taskRepository.merge(task as Task, req.body);
    await taskRepository.save(mergedTask);

    res.json({ task: mergedTask });
  }
};

const deleteTaskById = async (req:Request, res:Response) => {
  const { id } = req.params;
  return res.json({ task: taskRepository.softDelete(id) });
};

export { createTask, findAllTasks, deleteTaskById, updateTaskById };
