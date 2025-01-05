import dotenv from 'dotenv';
import path from 'node:path';
import { DataSourceOptions } from 'typeorm';

dotenv.config();

const databaseConfig: DataSourceOptions = {
  type: 'sqlite',
  database: './src/db/database.sqlite',
  entities: ['./src/database/entities/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  logging: false,
};

const configurations = {
  production: {
    ...databaseConfig,
    database: path.join(__dirname, '..', 'db', 'database.sqlite'),
    synchronize: true,
  },
  test: {
    ...databaseConfig,
    database: ':memory:',
    migrationsRun: true,
    synchronize: false,
    dropSchema: true,
  },
} as const;

export const getDatabaseConfig = (
  env: 'production' | 'test',
): DataSourceOptions => {
  return configurations[env];
};

//config comum
// import { DataSourceOptions } from 'typeorm'

// export const databaseConfig:DataSourceOptions ={
//   type:'sqlite',
//   database:'./src/db/database.sqlite',
//   entities: ['./src/**/*.entities.ts'],
//   migrations: ['./src/migrations/*.ts'],
//   logging:false,
//   synchronize: true
// }
