import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

let db: any = null;

async function openDb() {
  if (!db) {
    db = await open({
      filename: './newsletter.sqlite',
      driver: sqlite3.Database
    });
    await db.exec(`
      CREATE TABLE IF NOT EXISTS subscribers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  return db;
}

export { openDb };
