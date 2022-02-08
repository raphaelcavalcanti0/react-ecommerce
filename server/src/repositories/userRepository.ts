import { User } from "../models/userModel";
import { db } from "../db/db";

class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const queryString = `
            SELECT (uuid, firstname, lastname, email, profile) 
            FROM users;
            `
        try {
            const { rows } = await db.query<User>(queryString)
            return rows
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findById(uuid: string): Promise<User> {
        const queryString = `
            SELECT (uuid, firstname, lastname, email, profile) 
            FROM users WHERE uuid=$1;
            `
        const values = [uuid]
        try {
            const { rows } = await db.query<User>(queryString, values)
            const [user] = rows
            return user
        } catch (error) {
            console.log(error)
            return {}
        }
    }

    async create(user: User): Promise<void> {
        user.profile = "user"

        const values = [user.firstname, user.lastname, user.email,
        user.password, user.profile]

        const queryString = `
            INSERT INTO users (firstname, lastname, 
                email, password, profile)
            VALUES ($1, $2, $3, $4, $5);
            `

        try {
            const { rows } = await db.query<{ uuid: string }>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }

    async update(user: User): Promise<void> {
        const queryString = `
            UPDATE users SET 
            firstname=$1,
            lastname=$2,
            email=$3,
            password=$4,
            profile=$5
            WHERE uuid=$6;
            `
        const values = [user.firstname, user.lastname, user.email,
        user.password, user.profile, user.uuid]
        try {
            const { rows } = await db.query<User>(queryString, values)
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
            const { rows } = await db.query<User>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserRepository();