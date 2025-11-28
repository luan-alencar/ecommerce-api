import { Express } from "express";
import { userRoutes } from "./users.route.js";

export const routes = (app: Express): void => {
  // prefixo /users
  app.use("/users", userRoutes);

};
