import pg from "pg"; 
import dotenv  from "dotenv"

// This is uber important, nary forget! 
dotenv.config()

const connectionString = process.env.DB_CONNECTION_STRING;

if(!connectionString) {
    throw new Error('Please set the DB_CONNECTION_STRING environment variable. Is the env variables set and loaded?');
}

export const pool = new pg.Pool({ connectionString });