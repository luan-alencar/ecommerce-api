import { Request, Response } from "express";
import { CompanyService } from "../services/companies.service.js";
import { Company } from "../models/company.model.js";
import { MESSAGES } from "../constants/messages.js";

export class CompaniesController {
    static async getAll(req: Request, res: Response) {
        res.send(await new CompanyService().getAll());
    }

    static async getById(req: Request, res: Response) {
        const companyID = req.params.id;
        res.send(await new CompanyService().getById(companyID));
    }

    static async save(req: Request, res: Response) {
        await new CompanyService().save(req.body);
        res.status(201).send({
            message: MESSAGES.COMMON.CREATED
        });
    }

    static async update(req: Request, res: Response) {
        const companyID = req.params.id;
        const company = req.body as Company;
        await new CompanyService().update(companyID, company);
        res.send({
            message: MESSAGES.COMMON.UPDATED
        });
    }

}