import express from "express";
import cors from "cors"
import { apiRoutes } from "./routes/apiRoutes";
import { userRoutes } from "./routes/userRoutes";


const app = express();
const port = 8000;

// Setting Middleware to JSON formatted files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT']
}))

// Routes
app.use(apiRoutes)
app.use(userRoutes)

// Starting server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/api/v1/products`);
});