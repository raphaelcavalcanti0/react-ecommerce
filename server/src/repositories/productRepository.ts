import { Product } from "../models/productModel";
import { db } from "../db/db";

class ProductRepository {
    async findAllProducts(): Promise<Product[]> {
        const queryString = `
            SELECT *
            FROM products;
            `
        try {
            const { rows } = await db.query<Product>(queryString)
            return rows
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findById(uuid: string): Promise<Product> {
        const queryString = `
            SELECT *
            FROM products WHERE uuid=$1;
            `
        const values = [uuid]
        try {
            const { rows } = await db.query<Product>(queryString, values)
            const [product] = rows
            return product
        } catch (error) {
            console.log(error)
            return {}
        }
    }

    async create(product: Product): Promise<void> {
        const values = [product.img, product.title, product.price]

        const queryString = `
            INSERT INTO products (img, title, price)
            VALUES ($1, $2, $3);
            `

        try {
            const { rows } = await db.query<{ uuid: string }>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }

    async update(product: Product): Promise<void> {
        const queryString = `
            UPDATE products SET 
            img=$1,
            title=$2,
            price=$3,
            WHERE uuid=$4;
            `
        const values = [product.img, product.title, product.price,
        product.uuid]

        try {
            const { rows } = await db.query<Product>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }

    async delete(uuid: string): Promise<void> {
        const queryString = `
            DELETE FROM products WHERE uuid=$1;
            `
        const values = [uuid]
        try {
            const { rows } = await db.query<Product>(queryString, values)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ProductRepository();