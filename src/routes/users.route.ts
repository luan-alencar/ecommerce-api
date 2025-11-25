import express from "express";
import { UsersController } from "../controllers/users.controller.js";

export const userRoutes = express.Router();

userRoutes.post("/users", UsersController.save);
userRoutes.get("/users", UsersController.getAll);
userRoutes.get("/users/:id", UsersController.getById);
userRoutes.put("/users/:id", UsersController.update);
userRoutes.delete("/users/:id", UsersController.remove);