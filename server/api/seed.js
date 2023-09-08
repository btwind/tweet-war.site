import { createPool, sql } from '@vercel/postgres'

async function seed() {
  const createTable = await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(20) NOT NULL,
      password VARCHAR(20) NOT NULL,
      avr VARCHAR(1),
      "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );
    `
  const users = await Promise.all([
    sql`
          INSERT INTO users (name,  avr, password)
          VALUES ('Tweet War', '1', 'admin');
      `,
  ])
  return {
    createTable,
    users,
  }
}

// async function seed_wars() {
//   const createTable = await sql`
//     CREATE TABLE IF NOT EXISTS wars (
//       id SERIAL PRIMARY KEY,
//       text VARCHAR(200) NOT NULL,
//       u_id VARCHAR(20),
//       "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );
//     `
//   return {
//     createTable,
//   }
// }



// check table not found and create table
export default defineEventHandler(async () => {
  const db = createPool()
  try {
    await db.query("SELECT * FROM users where id = '1'")
  } catch (error) {
    if (error?.message === `relation "users" does not exist`) {
      await seed()
    } else {
      throw error
    }
  }
  
})