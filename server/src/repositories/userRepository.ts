import { user } from "../models/userModel";

class UserRepository {
    async findAllUsers(): Promise<user[]> {
        return []
    }

    async findById(uuid: string): Promise<user> {
        const user = {}
        return user
    }

    async create(user: user): Promise<void> {

    }

    async update(user: user): Promise<void> {

    }

    async delete(uuid: string): Promise<void> {

    }
}

export default new UserRepository();