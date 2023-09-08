import { createPool } from '@vercel/postgres'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const db = createPool()
    try {
        await db.query(`
            INSERT INTO wars (text,  u_id)
            VALUES ('${body.text}', '${body.u_id}')
        `)
        return {status: 'OK'}
    } catch (error) {
        throw error
    }
})