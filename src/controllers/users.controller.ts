
import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = { id: number; nome: string; email: string };

export class UsersController {
    static async getAll(req: Request, res: Response) {
        const snapshot = await getFirestore().collection("users").get();
        const users = snapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            };
        });
        res.send(users);
    }

    static async getById(req: Request, res: Response) {
        try {
            const userID = req.params.id;

            const doc = await getFirestore()
                .collection("users")
                .doc(userID)
                .get();

            if (!doc.exists) {
                return res.status(404).json({
                    message: "Usuário não encontrado."
                });
            }

            const user = {
                id: doc.id,
                ...doc.data()
            };

            return res.status(200).json({
                message: "Usuário encontrado!",
                user
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao buscar usuário"
            });
        }
    }

    static async save(req: Request, res: Response) {
        let user = req.body;
        await getFirestore().collection("users").add(user);
        res.send({
            message: "Usuario  cadastrado"
        });
    }

    static async update(req: Request, res: Response) {
        try {
            const userID = req.params.id;
            const user = req.body as User;

            const db = getFirestore();
            const docRef = db.collection("users").doc(userID);

            const doc = await docRef.get();

            if (!doc.exists) {
                return res.status(404).json({
                    message: "Usuário não encontrado"
                });
            }

            await docRef.update({
                nome: user.nome,
                email: user.email
            });

            return res.status(200).send({ message: "Usuário atualizado" });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erro ao atualizar usuário"
            });
        }
    }

    static async remove(req: Request, res: Response) {
        let userID = req.params.id;
        await getFirestore().collection("users").doc(userID).delete();
        return res.status(200)
            .json({
                message: "Usuário removido com sucesso!"
            });
    }
}