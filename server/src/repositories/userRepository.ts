import { user } from "../models/userModel";
import { db } from "../db/db";

class UserRepository {
    async findAllUsers(): Promise<any> {
        const queryString = `
            SELECT (uuid, firstName, lastName, email, profile) 
            FROM users;
            `
        try {
            const { rows } = await db.query<user>(queryString)
            await db.end()
            return rows
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findById(uuid: string): Promise<user> {
        const queryString = `
            SELECT (uuid, firstName, lastName, email, profile) 
            FROM users WHERE uuid=$1;
            `
        const values = [uuid]
        try {
            const { rows } = await db.query<user>(queryString, values)
            await db.end()
            const [user] = rows
            return user || {}
        } catch (error) {
            console.log(error)
            return {}
        }
    }

    async create(user: user): Promise<void> {
        user.profile = "user"

        const values = [user.firstName, user.lastName, user.email,
        user.password, user.profile]

        const queryString = `
            INSERT INTO users (firstName, lastName, email, password, profile)
            VALUES ($1, $2, $3, $4, $5);
            `

        try {
            const { rows } = await db.query(queryString, values)
            await db.end()
        } catch (error) {
            console.log(error)
        }
    }

    async update(user: user): Promise<void> {
        const queryString = `
            UPDATE users SET 
            firstName=$1,
            lastName=$2,
            email=$3,
            password=$4,
            profile=$5
            WHERE uuid=$6;
            `
        const values = [user.firstName, user.lastName, user.email,
        user.password, user.profile, user.uuid]
        try {
            const { rows } = await db.query<user>(queryString, values)
            await db.end()
        } catch (error) {
            console.log(error)
        }
    }

    async delete(uuid: string): Promise<void> {
        const queryString = `
            DELETE FROM users WHERE uuid=$1;
            `
        const values = [uuid]
        try {
            const { rows } = await db.query<user>(queryString, values)
            await db.end()
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserRepository();