import express from "express";
import { UsersController } from "../controllers/users.controller.js";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.getAll);
userRoutes.get("/users", UsersController.getById);
userRoutes.post("/users", UsersController.save);
userRoutes.put("/users", UsersController.update);
userRoutes.delete("/users", UsersController.remove);