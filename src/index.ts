import express from "express";
import { initializeApp } from "firebase-admin/app";
import { routes } from "./routes/index.js";

initializeApp();
const app = express();
app.use(express.json());

routes(app);

app.listen(3000, () => {
    console.log('O servidor esta rodando na porta 3000');
});