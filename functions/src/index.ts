import express from "express";
import { errorHandler } from "./middlewares/error-handler.middleware.js";
import { routes } from "./routes/index.js";
import { pageNotFoundHandler } from "./middlewares/page-not-found.middleware.js";
import { auth } from "./middlewares/auth.middleware.js";
import { onRequest } from "firebase-functions/v1/https";

initializeAdminApp();
initializeFirebase({
  apiKey: process.env.FIRE_API_KEY
});
 
const app = express();


// registra todas as rotas
auth(app);
routes(app);
pageNotFoundHandler(app);
errorHandler(app);

export const api = onRequest(app);

function initializeAdminApp() {
  throw new Error("Function not implemented.");
}


function initializeFirebase(arg0: { apiKey: string | undefined; }) {
  throw new Error("Function not implemented.");
}
