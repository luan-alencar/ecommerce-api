import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { userInfo } from "node:os";

export const userRoutes = Router();

userRoutes.get("/", asyncHandler(UsersController.getAll));

userRoutes.get("/:id", asyncHandler(UsersController.getById));

userRoutes.post("/", celebrate({
    [Segments.BODY]: userInfo
}), asyncHandler(UsersController.save));

userRoutes.put("/:id", celebrate({
    [Segments.BODY]: userInfo
}), asyncHandler(UsersController.update));

userRoutes.delete("/:id", asyncHandler(UsersController.remove));