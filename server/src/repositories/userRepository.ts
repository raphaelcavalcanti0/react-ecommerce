import { User } from "../models/userModel";
import { db } from "../db/db";
import { hashSync } from "bcryptjs";

class UserRepository {
    async findAllUsers(): Promise<User[]> {
        const queryString = `
            SELECT *
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
            SELECT *
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

    async findByEmail(email: string): Promise<User> {
        const queryString = `
            SELECT *
            FROM users WHERE email=$1;
            `
        const values = [email]
        try {
            const { rows } = await db.query<User>(queryString, values)
            const [user] = rows
            return user
        } catch (error) {
            console.log(error)
            return {}
        }
    }

    async create(user: User): Promise<string> {
        user.profile = "user"

        const passwordHash = hashSync(String(user.password), 10)

        const values = [user.firstname, user.lastname, user.email,
            passwordHash, user.profile]

        const queryString = `
            INSERT INTO users (firstname, lastname, 
                email, password, profile)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING uuid;
            `

        try {
            const { rows } = await db.query<{ uuid: string }>(queryString, values)
            const [newUser] = rows
            return newUser.uuid
        } catch (error) {
            console.log(error)
            return ""
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
            await db.query<User>(queryString, values)
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
            await db.query<User>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UserRepository();