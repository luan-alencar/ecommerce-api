import admin from "firebase-admin";
import { getFirestore, FieldValue } from "firebase-admin/firestore";
import { User } from "../models/user.model.js";

export class SeedService {
  private db = getFirestore();

  async seedUsers() {
    const email = "faceyij973@mucate.com";
    const password = "manager"; // 👉 apenas para DEV
    const displayName = "Administrador";

    // 1️⃣ Criar usuário no Firebase Auth
    const authUser = await admin.auth().createUser({
      email,
      password,
      displayName
    });

    // 2️⃣ Criar usuário no Firestore usando o UID do Auth
    const user = new User({
      id: authUser.uid,
      nome: displayName,
      email: email,
      password: password,
      role: "ADMIN",
      ativo: true
    });

    await this.db
      .collection("users")
      .doc(user.id)
      .set({
        ...user,
        createdAt: FieldValue.serverTimestamp()
      });
  }

  async seedAll() {
    await this.seedUsers();
  }
}
