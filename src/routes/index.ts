// VAI ORQUESTRAR TODAS AS ROTAS
import express from "express";
import { userRoutes } from "./users.route.js";

export const routes = (app: express.Express) => {
    app.use(userRoutes);
}