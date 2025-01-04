import { DataSource } from "typeorm"
import { getDatabaseConfig } from "../config/databaseConfig"


const env = process.env.NODE_ENV === 'test' ? 'test' : 'production'

export const AppDataSource = new DataSource(getDatabaseConfig(env))



//config normal
// import { DataSource } from "typeorm";
// import { databaseConfig } from "../config/databaseConfig";


// export const AppDataSource = new DataSource(databaseConfig)