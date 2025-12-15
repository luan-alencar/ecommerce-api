import express from "express";
import { userRoutes } from "./users.route.js";
import { authRoutes } from "./auth.route.js";
import { companyRoutes } from "./companies.route.js";

export const routes = (app: express.Express) => {
  app.use(express.json());
  app.use(authRoutes); // rotas de autenticaçao sempre vem em primeiro plano!
  app.use(userRoutes);
  app.use(companyRoutes);
};
