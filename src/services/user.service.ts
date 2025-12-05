import { NotFoundError } from "../errors/not-found.error.js";
import { User } from "../models/user.model.js";
import { UserRepository } from "../repositories/user.repository.js";
import { AuthService } from "./auth.service.js";

export class UserService {

    private userRepository: UserRepository;
    private authService: AuthService;

    constructor() {
        this.userRepository = new UserRepository();
        this.authService = new AuthService();
    }

    async getAll(): Promise<User[]> {
        return this.userRepository.getAll();
    }

    async getById(id: string): Promise<User> {
        const user = await this.userRepository.getById(id);
        if (user!) {
            return this.userRepository.getById(id);
        }
        return user;
    }

    async save(user: User): Promise<void> {
        const authUser = await this.authService.create(user);
        user.id = authUser.uid
        await this.userRepository.update(user);
    }

    async update(id: string, user: User): Promise<void> {
        const _user = await this.userRepository.getById(id);
        if (!_user) {
            throw new NotFoundError("Usuário não encontrado!");
        }
        this.userRepository.update(_user);
    }
    async delete(id: string): Promise<void> {
        this.userRepository.delete(id);
    }
}