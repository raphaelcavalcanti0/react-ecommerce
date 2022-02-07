const express = require('express')
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.send('Hello World')
})

// Starting server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`)
})
