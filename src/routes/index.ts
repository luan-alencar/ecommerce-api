import express from "express";
import { userRoutes } from "./users.route.js";
import { authRoutes } from "./auth.route.js";

export const routes = (app: express.Express) => {
  // prefixo /users
  app.use(express.json());
  app.use(authRoutes); // rotas de autenticaçao sempre vem em primeiro plano!
  app.use(userRoutes);

};
