import { CollectionReference, getFirestore } from "firebase-admin/firestore";
import { User } from "../models/user.model.js";
import { NotFoundError } from "../errors/not-found.error.js";

export class UserRepository {
    private collection: CollectionReference;

    constructor() {
        this.collection = getFirestore().collection("users");
    }

    async getAll(): Promise<User[]> {
        const snapshot = await this.collection.get();
        return snapshot.docs.map(doc => {
            const data = doc.data() as any;
            return {
                id: doc.id,
                nome: data.nome,
                email: data.email
            } as User;
        });
    }

    async getById(id: string): Promise<User> {
        const doc = await this.collection.doc(id).get();
        if (!doc.exists) {
            throw new NotFoundError("Usuário não encontrado");
        }

        const data = doc.data() as any;

        return {
            id: doc.id,
            nome: data.nome,
            email: data.email
        } as User;
    }

    async save(user: User): Promise<void> {
        // aqui assumimos que id, nome e email já foram garantidos
        const data = {
            nome: user.nome,
            email: user.email
        };

        await this.collection.doc(user.id).set(data);
    }

    async update(user: User): Promise<void> {
        const docRef = this.collection.doc(user.id);

        const data: any = {};
        if (user.nome !== undefined) data.nome = user.nome;
        if (user.email !== undefined) data.email = user.email;

        await docRef.set(data, { merge: true });
    }

    async delete(id: string): Promise<void> {
        await this.collection.doc(id).delete();
    }
}
