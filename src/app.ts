import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'reflect-metadata';
import { AppDataSource } from './database/AppDataSource';
import { usersRouter } from './routes/User.routes';

dotenv.config();

export const createApp = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log('Database initialized');
  }

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/users', usersRouter);

  return app;
};
