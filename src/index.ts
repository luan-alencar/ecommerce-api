import express, { Request, Response } from "express";
import { routes } from "./routes/index.js";

const app = express();

routes(app);

app.listen(3000, () => {
    console.log('O servidor esta rodando na porta 3000');
});