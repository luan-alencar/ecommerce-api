import { Request, Response } from "express";
import { PaymentMethodService } from "../services/payment-method.service.js";
import { PaymentMethod } from "../models/payment-method.model.js";
import { MESSAGES } from "../constants/messages.js";

export class PaymentMethodsController {
    static async getAll(req: Request, res: Response) {
        res.send(await new PaymentMethodService().getAll());
    }

    static async getById(req: Request, res: Response) {
        const paymentMethodId = req.params.id;
        res.send(await new PaymentMethodService().getById(paymentMethodId));
    }

    static async save(req: Request, res: Response) {
        await new PaymentMethodService().save(req.body);
        res.status(201).send({
            message: MESSAGES.COMMON.CREATED
        });
    }

    static async update(req: Request, res: Response) {
        const paymentMethodId = req.params.id;
        const paymentMethod = req.body as PaymentMethod;
        await new PaymentMethodService().update(paymentMethodId, paymentMethod);
        res.send({
            message: MESSAGES.COMMON.UPDATED
        });
    }

    static async delete(req: Request, res: Response) {
        const paymentMethodId = req.params.id;
        await new PaymentMethodService().delete(paymentMethodId);
        res.status(204).end();
    }

}