import express from "express";
import { userRoutes } from "./users.route.js";
import { authRoutes } from "./auth.route.js";
import { companyRoutes } from "./companies.route.js";
import { categoryRoutes } from "./categories.route.js";
import { productRoutes } from "./products.route.js";
import { seedRoutes } from "./seed.route.js";

export const routes = (app: express.Express) => {
  app.use(express.json({ limit: "5mb" }));

  // 🔓 ROTAS DEV (SEM AUTH)
  if (process.env.NODE_ENV === "development") {
    app.use(seedRoutes);
  }

  // 🔐 AUTENTICAÇÃO
  app.use(authRoutes);

  // 🔐 ROTAS PROTEGIDAS
  app.use(userRoutes);
  app.use(companyRoutes);
  app.use(categoryRoutes);
  app.use(productRoutes);
};
