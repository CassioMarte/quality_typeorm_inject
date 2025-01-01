import { DataSourceOptions } from 'typeorm'

export const databaseConfig:DataSourceOptions ={
  type:'sqlite',
  database:'./src/db/database.sqlite',
  entities: ['./src/**/*.entities.ts'],
  migrations: ['./src/migrations/*.ts'],
  logging:false,
  synchronize: true
}