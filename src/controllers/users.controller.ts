import { NextFunction, Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";
import { ApiError } from "../errors/ApiError.js";

type UserDTO = {
    nome: string;
    email: string;
};

export class UsersController {
    // GET /users
    static async getAll(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const snapshot = await getFirestore().collection("users").get();

            const users = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            res.status(200).json(users);
        } catch (error) {
            next(new ApiError("Erro ao buscar usuários", 500));
        }
    }

    // GET /users/:id
    static async getById(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        const userID = req.params.id;

        if (!userID) {
            throw new ApiError("ID do usuário é obrigatório.", 400);
        }

        const doc = await getFirestore().collection("users").doc(userID).get();

        if (!doc.exists) {
            throw new ApiError("Usuário não encontrado.", 404);
        }

        const user = {
            id: doc.id,
            ...doc.data(),
        };

        res.status(200).json({
            message: "Usuário encontrado!",
            user,
        });
    }

    // POST /users
    static async save(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const body = req.body as UserDTO;

            if (!body || !body.nome || !body.email) {
                throw new ApiError("Campos nome e email são obrigatórios.", 400);
            }

            const db = getFirestore();

            const docRef = await db.collection("users").add({
                nome: body.nome,
                email: body.email,
            });

            res.status(201).json({
                message: "Usuário cadastrado com sucesso!",
                id: docRef.id,
            });
        } catch (error) {
            next(error);
        }
    }

    // PUT /users/:id
    static async update(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userID = req.params.id;
            const body = req.body as UserDTO;

            if (!userID) {
                throw new ApiError("ID do usuário é obrigatório.", 400);
            }

            if (!body || !body.nome || !body.email) {
                throw new ApiError("Campos nome e email são obrigatórios.", 400);
            }

            const db = getFirestore();
            const docRef = db.collection("users").doc(userID);
            const doc = await docRef.get();

            if (!doc.exists) {
                throw new ApiError("Usuário não encontrado.", 404);
            }

            await docRef.update({
                nome: body.nome,
                email: body.email,
            });

            res.status(200).json({
                message: "Usuário atualizado com sucesso!",
            });
        } catch (error) {
            next(error);
        }
    }

    // DELETE /users/:id
    static async remove(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const userID = req.params.id;

            if (!userID) {
                throw new ApiError("ID do usuário é obrigatório.", 400);
            }

            const db = getFirestore();
            const docRef = db.collection("users").doc(userID);
            const doc = await docRef.get();

            if (!doc.exists) {
                throw new ApiError("Usuário não encontrado.", 404);
            }

            await docRef.delete();

            res.status(204).send(); // No Content
        } catch (error) {
            next(error);
        }
    }
}
