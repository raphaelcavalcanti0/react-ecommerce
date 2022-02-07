"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apiRoutes_1 = require("./routes/apiRoutes");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(apiRoutes_1.apiRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/api/v1/products`);
});
