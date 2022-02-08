const pg = require('pg')
const process = require('process')

process.env.NODE_ENV = 'development'
console.log(String(process.env.NODE_ENV))
console.log(String(process.env.dbUsername))
console.log(String(process.env.dbPassword))
console.log(String(process.env.dbDatabase))
console.log(String(process.env.dbHost))
console.log(String(process.env.dbPort))

const db = new pg.Pool({
    user: "postgres",
    password: "078197",
    database: "ecommerce",
    host: "localhost",
    port: 5432
})

const now = async () => {
    try {
        const { rows } = await db.query("SELECT NOW()")
        console.log(rows)
    } catch (error) {
        console.log("erro: " + error)
    }

}

now()
