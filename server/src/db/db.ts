import { Pool } from "pg";

const db = new Pool({
    user: "postgres",
    password: "078197",
    database: "ecommerce",
    host: "localhost",
    port: 5432
});

export default db;