import express, { Express } from "express";
import { initializeApp } from "firebase-admin/app";
import { errorHandler } from "./middlewares/errorHandler.js";
import { routes } from "./routes/index.js";

initializeApp();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// registra todas as rotas
routes(app);

// middleware global de erros – sempre por último
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}`);
});
