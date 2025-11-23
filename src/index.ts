import express, { Request, Response } from "express";


const app = express();

app.use(express.json());

let id = 0;
type User = { id: number; nome: string; idade: number; email: string }
let users: User[] = [];

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao curso");
});

app.get("/users", (req: Request, res: Response) => {
    res.send(users);
});

app.post("/users", (req: Request, res: Response) => {
    let user = req.body;
    user.id = id++;
    users.push(user);
    res.send({
        message: "Usuario cadastrado"
    });
});

app.get("/users/:id", (req: Request, res: Response) => {
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
});

app.put("/users/:id", (req: Request, res: Response) => {
    let id = Number(req.params.id)
    const userUpdate = req.body;
    const index = users.findIndex(u => u.id === id);

    users[index].nome = userUpdate.nome;
    users[index].idade = userUpdate.idade;
    users[index].email = userUpdate.email;
    res.status(200).send("Usuário atualizado");
});

app.delete("/users/:id", (req: Request, res: Response) => {
    const index = users.findIndex(u => u.id === Number(req.params.id));
    users.splice(index, 1);
    return res.status(200)
        .json({
            message: "Usuário removido com sucesso!",
            users
        });
});


app.listen(3000, () => {
    console.log('O servidor esta rodando na porta 3000');
});