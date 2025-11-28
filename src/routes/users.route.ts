import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";

export const userRoutes = Router();

userRoutes.get("/", UsersController.getAll);
userRoutes.get("/:id", UsersController.getById);
userRoutes.post("/", UsersController.save);
userRoutes.put("/:id", UsersController.update);
userRoutes.delete("/:id", UsersController.remove);
