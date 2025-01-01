import 'reflect-metadata';
import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import { AppDataSource } from './database/AppDataSource';

 dotenv.config()

AppDataSource.initialize()
  .then(() => {
    console.log('Database running, ok');

     const app = express();
     app.use(express.json())
     app.use(cors())
    


    app.get('/', (req, res) => {
      res.send('Hello');
    });

    app.listen(3000, () => {
      console.log('Api running on port 3000');
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });


