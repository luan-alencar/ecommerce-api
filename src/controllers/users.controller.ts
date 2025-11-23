import { Request, Response } from "express";

let id = 0;
type User = { id: number; nome: string; idade: number; email: string }
let users: User[] = [];

export class UsersController {
    static getAll(req: Request, res: Response) {
        res.send(users);
    }

    static getById(req: Request, res: Response) {
        let userID = Number(req.params.id);
        let user = users.find(user => user.id === userID);
        if (user !== null) {
            return res.status(200).json({
                message: "Usuário encontrado!",
                user
            });
        } else {
            return res.status(404).json({
                message: "Usuario não encontrado"
            });
        }
    }

    static save(req: Request, res: Response) {
        let user = req.body;
        user.id = id++;
        users.push(user);
        res.send({
            message: "Usuario cadastrado"
        });
    }

    static update(req: Request, res: Response) {
        let id = Number(req.params.id)
        const userUpdate = req.body;
        const index = users.findIndex(u => u.id === id);

        users[index].nome = userUpdate.nome;
        users[index].idade = userUpdate.idade;
        users[index].email = userUpdate.email;
        res.status(200).send("Usuário atualizado");
    }

    static remove(req: Request, res: Response) {
        const index = users.findIndex(u => u.id === Number(req.params.id));
        users.splice(index, 1);
        return res.status(200)
            .json({
                message: "Usuário removido com sucesso!",
                users
            });
    }
}