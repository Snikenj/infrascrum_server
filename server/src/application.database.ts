/* eslint-disable no-console */
import { DataSource } from 'typeorm';
import type { Repository } from 'typeorm';
import type { User } from './models/user.model.js';
import type { Project } from './models/project.model.js';
import type { Element } from './models/element.model.js';
let dbIsRunning = false;
let userRepository : Repository<User>;
let projectRepository : Repository<Project>;
let elementRepository : Repository<Element>;
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
    dbIsRunning = true;
    console.log('Connecté à la base de données');
  } catch (e) {
    console.error('Echec de connexion ', e);
  }
};

export { initDatabase, dbIsRunning, userRepository, projectRepository, elementRepository };
