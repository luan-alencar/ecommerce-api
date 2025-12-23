import express, { NextFunction, Request, Response } from "express";
import { NotFoundError } from "../errors/not-found.error.js";
import { MESSAGES } from "../constants/messages.js";

export const pageNotFoundHandler = (app: express.Express) => {
    app.use((req: Request, res: Response, next: NextFunction) => {
        next(new NotFoundError(MESSAGES.ERROR.PAGE_NOT_FOUND));
    });
};