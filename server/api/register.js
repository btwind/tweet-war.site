import { createPool} from '@vercel/postgres'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const db = createPool()
    try {
        await db.query(`
            INSERT INTO users (name,  password, avr)
            VALUES ('${body.name}', '${body.password}', '1')
        `)
        const { rows: id } = await db.query(`SELECT MAX(Id) FROM users`)
        return {
            id: id[0].max
        }
    } catch (error) {
        throw error
    }
})