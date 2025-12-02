import { User } from "../models/user.model.js";
import { UserRepository } from "../repositories/user.repository.js";

export class UserService {

    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        return this.userRepository.getById(id);
    }

    async save(user: User): Promise<void> {
        this.userRepository.save(user);
    }

    async update(id: string, user: User): Promise<void> {
      this.userRepository.update(id, user);
    }
    async delete(id: string): Promise<void> {
        this.userRepository.delete(id);
    }
}