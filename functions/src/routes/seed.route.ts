import { Router } from "express";
import asyncHandler from "express-async-handler";
import { SeedController } from "../controllers/seed.controller.js";

export const seedRoutes = Router();

/**
 * 🚨 Endpoint apenas para DEV
 * Cria massa inicial de dados (users, etc)
 */
seedRoutes.post(
  "/seed",
  asyncHandler(SeedController.seedAll)
);
