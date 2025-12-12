import express from "express";
import { initializeApp as initializeAdminApp} from "firebase-admin/app";
import { initializeApp as initializeFirebase } from "firebase/app";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { routes } from "./routes/index.js";
import { pageNotFoundHandler } from "./middlewares/page-not-found.middleware.js";

initializeAdminApp();
initializeFirebase({
  apiKey: process.env.FIRE_API_KEY
});
 
const app = express();
const PORT = process.env.PORT || 3000;


// registra todas as rotas
routes(app);
pageNotFoundHandler(app);
errorHandler(app);


app.listen(PORT, () => {
  console.log(`O servidor esta rodando na porta ${PORT}`);
});
