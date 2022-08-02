/* eslint-disable no-console */
import type { Request, Response } from 'express';
import { elementRepository } from '../application.database.js';
import type { Element } from '../models/element.model.js';

const findAllElements = async (req:Request, res:Response) => {
  const elements = await elementRepository.find();
  return res.json(elements);
};

const createElement = async (req:Request, res:Response) => {
  const element = elementRepository.create(req.body);
  await elementRepository.save(element);
  res.status(201).json(element);
};

const updateElementById = async (req:Request, res:Response) => {
  const { id } = req.params;
  const element = await elementRepository.findOneBy({ id: parseInt(id) });
  if (element === undefined) {
    throw new Error('Element not found');
  } else {
    const mergedElement = elementRepository.merge(element as Element, req.body);
    await elementRepository.save(mergedElement);

    res.json(mergedElement);
  }
};

// const findElementById = async (req:Request, res:Response) => {
//   const { id } = req.params;
//   const element = await elementRepository.findOneBy({ id: parseInt(id) });
//   if (element === undefined) {
//     throw new Error('Element not found');
//   } else {
//     return ();
//   };
// };

const deleteElementById = async (req:Request, res:Response) => {
  const { id } = req.params;
  return res.json(elementRepository.softDelete(id));
};

export { createElement, findAllElements, deleteElementById, updateElementById };
