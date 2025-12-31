

import express, { Router } from "express";
import { userRoutes } from "./users.route.js";
import { authRoutes } from "./auth.route.js";
import { companyRoutes } from "./companies.route.js";
import { categoryRoutes } from "./categories.route.js";
import { productRoutes } from "./products.route.js";
import { orderRoutes } from "./order.route.js";
import { paymentMethodsRoutes } from "./payment-method.route.js";
import { allowAnonymousUser } from "../middlewares/allow-anonumous-user.middleware.js";

export const routes = (app: express.Express) => {
  app.use(express.json({ limit: "5mb" }));
  app.use(authRoutes);
  const authenticatedRoutes = Router();
  authenticatedRoutes.use(allowAnonymousUser);
  authenticatedRoutes.use(userRoutes);
  authenticatedRoutes.use(companyRoutes);
  authenticatedRoutes.use(categoryRoutes);
  authenticatedRoutes.use(productRoutes);
  authenticatedRoutes.use(paymentMethodsRoutes);
  authenticatedRoutes.use(orderRoutes);
  app.use(
    authenticatedRoutes
  );
}