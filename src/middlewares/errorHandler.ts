import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors/ApiError.js";

export function errorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error("🔥 Erro capturado:", err);

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            error: err.message,
        });
    }

    return res.status(500).json({
        error: "Erro interno no servidor",
    });
}
