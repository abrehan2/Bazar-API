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
  entities: ['dist/**/*.entity{.ts,.js}'], // Path to entity files after compilation.
  migrations: ['dist/db/migrations/*{.ts,.js}'], // Path to migration files after compilation.
  synchronize: false, // It automatically syncs the database schema with the entities each time the application starts. Disable in production.
  logging: false,
};

// Data Source Initialization:
const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;
