// Imports:
import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

// Load environment variables from .env file:
config();

// Data Source Options:
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [],
  migrations: [],
  synchronize: false,
  logging: false,
};

// Data Source Initialization:
const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
