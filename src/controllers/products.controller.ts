import { Request, Response } from "express";
import { Product } from "../models/product.model.js";
import { ProductService } from "../services/products.service.js";
import { MESSAGES } from "../constants/messages.js";

export class ProductsController {
    static async getAll(req: Request, res: Response) {
        res.send(await new ProductService().getAll());
    }

    static async search(req: Request, res: Response) {
        const categoriaId = req.query.categoriaId as string;
        res.send(await new ProductService().search(categoriaId));
    }

    static async getById(req: Request, res: Response) {
        const productId = req.params.id;
        res.send(await new ProductService().getById(productId));
    }

    static async save(req: Request, res: Response) {
        await new ProductService().save(req.body);
        res.status(201).send({
            message: MESSAGES.PRODUCT.NOT_FOUND
        });
    }

    static async update(req: Request, res: Response) {
        const productId = req.params.id;
        const product = req.body as Product;
        await new ProductService().update(productId, product);
        res.send({
            message:MESSAGES.COMMON.UPDATED
        });
    }

    static async delete(req: Request, res: Response) {
        const productId = req.params.id;
        await new ProductService().delete(productId);
        res.status(204).end();
    }

}