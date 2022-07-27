/* eslint-disable no-console */
import { DataSource } from 'typeorm';
import type { Repository } from 'typeorm';
import { User } from './models/user.model.js';
import { Project } from './models/project.model.js';
import { Element } from './models/element.model.js';
import { Task } from './models/task.model.js';
let dbIsRunning = false;
let userRepository : Repository<User>;
let projectRepository : Repository<Project>;
let elementRepository : Repository<Element>;
let taskRepository : Repository<Task>;
async function initDatabase () {
  const connection = new DataSource({
    username: 'root',
    password: 'infrascrum',
    database: 'infrascrumDB',
    port: 3306,
    host: 'localhost',
    type: 'mariadb',
    entities: ['src/models/*.ts'],
    synchronize: true,
  });

  try {
    await connection.initialize();
    userRepository = connection.getRepository(User);
    projectRepository = connection.getRepository(Project);
    elementRepository = connection.getRepository(Element);
    taskRepository = connection.getRepository(Task);
    dbIsRunning = true;
    console.log('Connecté à la base de données');
  } catch (e) {
    console.error('Echec de connexion ', e);
  }
};

export { initDatabase, dbIsRunning, userRepository, projectRepository, elementRepository, taskRepository };
