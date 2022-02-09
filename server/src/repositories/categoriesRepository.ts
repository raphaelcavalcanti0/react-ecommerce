import { Category } from '../models/categoriesModel';
import { db } from "../db/db";

class CategoriesRepository {
    async findAllCategories(): Promise<Category[]> {
        const queryString = `
            SELECT *
            FROM categories;
            `
        try {
            const { rows } = await db.query<Category>(queryString)
            return rows
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async create(category: Category): Promise<string> {
        const values = [category.img, category.title]

        const queryString = `
            INSERT INTO categories (img, title)
            VALUES ($1, $2);
            `

        try {
            const { rows } = await db.query<{ uuid: string }>(queryString, values)
            const [newCategory] = rows
            return newCategory.uuid
        } catch (error) {
            console.log(error)
            return ""
        }
    }

    async update(category: Category): Promise<void> {
        const queryString = `
            UPDATE categories SET 
            img=$1,
            title=$2
            WHERE uuid=$3;
            `
        const values = [category.img, category.title, category.uuid]

        try {
            await db.query<Category>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(uuid: string): Promise<void> {
        const queryString = `
            DELETE FROM categories WHERE uuid=$1;
            `
        const values = [uuid]
        try {
            await db.query<Category>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CategoriesRepository();