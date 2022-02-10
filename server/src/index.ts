import express from "express";
import cors from "cors"
import session from "express-session";
import { apiRoutes } from "./routes/apiRoutes";
import { userRoutes } from "./routes/userRoutes";
import { statusRoutes } from "./routes/statusRoutes";

const app = express();
const port = 8000;

// Setting Middleware to JSON formatted files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    optionsSuccessStatus: 200 // For legacy browser support
}))
app.use(session({
    secret: "64thatsmysecretkey64",
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        maxAge: 1 * 60 * 60 * 1000 /* 1 hour*/
    }
}))

// Routes
app.use(apiRoutes)
app.use(userRoutes)
app.use(statusRoutes)

// Starting server
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/api/v1/status`);
});