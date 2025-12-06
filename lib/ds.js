import Database from 'better-sqlite3';
import path from 'path';

// Use an absolute path based on the current working directory
const dbPath = path.join(process.cwd(), 'meals.db');

// Use a global variable to ensure the connection is only established once
// in server-side Next.js environments.
if (!global.dbConnection) {
  global.dbConnection = new Database(dbPath);
  // Optional: Add configuration for better concurrency in web servers
  global.dbConnection.pragma('journal_mode = WAL');
}

const db = global.dbConnection;

export default db;
