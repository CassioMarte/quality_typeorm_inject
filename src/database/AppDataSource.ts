import { DataSource } from "typeorm";
import { databaseConfig } from "../config/databaseConfig";


export const AppDataSource = new DataSource(databaseConfig)