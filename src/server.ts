import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database/AppDataSource';
import { usersRouter } from './routes/User.routes';

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log('Database running, ok');

    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get('/hello', (req, res) => {
      res.send('Hello');

      app.use('/users', usersRouter);
    });

    app.listen(3000, () => {
      console.log('Api running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
