import express from "express";
import { Express } from "express-serve-static-core";
import { errorHandler } from "../middlewares/errorHandler.js";


const app = express();

app.use(express.json());

// suas rotas
routes(app);

// SEMPRE depois das rotas:
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
function routes(app: Express) {
    throw new Error("Function not implemented.");
}

