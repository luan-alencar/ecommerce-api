import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";
import { CompanyService } from "../services/companies.service.js";

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
            message: `Empresa criada com sucesso!`
        });
    }

    static async update(req: Request, res: Response) {
        const userId = req.params.id;
        const user = req.body as User;
        await new UserService().update(userId, user);
        res.send({
            message: "Usuário alterado com sucesso!"
        });
    }

    static async delete(req: Request, res: Response) {
        const userId = req.params.id;
        await new UserService().delete(userId);
        res.status(204).end();
    }
}