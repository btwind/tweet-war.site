import { createPool} from '@vercel/postgres'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const db = createPool()
  try {
    const { rows: users } = await db.query(`SELECT id, name, avr, password FROM users where id = '${body.id}' AND password = '${body.password}'`)
    return users[0]
  } catch (error) {
    throw error
  }
})