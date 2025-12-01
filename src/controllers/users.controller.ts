import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import { ApiError } from "../errors/ApiError.js";
import { User } from "../models/user.model.js";
import { UserService } from "../services/user.service.js";

export class UsersController {

    // GET /users
    static async getAll(req: Request, res: Response, next: NextFunction) {
        res.send(await new UserService().getAll());
    }

    // GET /users/:id
    static async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.send(await new UserService().getById(req.params.id))
    }

    // POST /users
    static async save(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.status(201).send(await new UserService().save(req.body));
    }

    // PUT /users/:id
    static async update(req: Request, res: Response, next: NextFunction): Promise<void> {
        let userID = req.params.id;
        let user = req.body as User;
        res.send(await new UserService().update(userID, user));
    }

    // DELETE /users/:id
    static async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        let userID = req.params.id;
        res.send(await new UserService().delete(userID));
    }
}
