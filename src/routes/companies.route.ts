import { Router } from "express";
import asyncHandler from "express-async-handler";
import { celebrate, Segments } from "celebrate";
import { updateUserSchema } from "../models/user.model.js";
import { CompaniesController } from "../controllers/companies.controller.js";
import { newCompanySchema } from "../models/company.model.js";

export const companyRoutes = Router();

companyRoutes.get("/companies", asyncHandler(CompaniesController.getAll));
companyRoutes.get("/companies/:id", asyncHandler(CompaniesController.getById));
companyRoutes.post("/companies", celebrate({ [Segments.BODY]: newCompanySchema }), asyncHandler(CompaniesController.save));
companyRoutes.put("/companies/:id", celebrate({ [Segments.BODY]: updateUserSchema }), asyncHandler(CompaniesController.update));