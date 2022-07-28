/* eslint-disable no-console */
import { config } from 'dotenv';
import { dbIsRunning, initDatabase } from './application.database.js';
import { createApp } from './application.js';

config({ path: 'variables.env' });

export const initAPP = async () => {
  await initDatabase();
  const app = await createApp();
  if (dbIsRunning) {
    app.listen(8000, () => {
      console.log('app listening on port 8000');
    });
  } else {
    console.log('Echec de la connexion');
  };
};

initAPP();
