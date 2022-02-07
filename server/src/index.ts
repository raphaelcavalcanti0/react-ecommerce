import express from "express";
import { apiRoutes } from "./routes/apiRoutes";

const app = express();
const port = 8000;

// Setting Middleware to JSON formatted files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(apiRoutes)

// Starting server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/api/v1/products`);
});