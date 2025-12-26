import { Request, Response } from "express";
import { SeedService } from "../services/seed.service.js";

export class SeedController {
  static async seedAll(req: Request, res: Response): Promise<void> {
    const service = new SeedService();
    await service.seedAll();

    res.status(201).json({
      message: "Carga inicial criada com sucesso"
    });
  }
}
