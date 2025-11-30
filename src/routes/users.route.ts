import { Router } from "express";
import { UsersController } from "../controllers/users.controller.js";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import Joi from "joi";

export const userRoutes = Router();

userRoutes.get("/", asyncHandler(UsersController.getAll));
userRoutes.get("/:id", asyncHandler(UsersController.getById));
userRoutes.post("/", celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        email: Joi.string().email().required()
    })
}),asyncHandler(UsersController.save));
userRoutes.put("/:id", asyncHandler(UsersController.update));
userRoutes.delete("/:id", asyncHandler(UsersController.remove));
