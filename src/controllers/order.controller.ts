import { Request, Response } from "express";
import { OrderService } from "../services/order.service.js";
import { Order, QueryParamsOrder } from "../models/order-model.js";
import { MESSAGES } from "../constants/messages.js";

export class OrdersController {

    static async save(req: Request, res: Response) {
        console.log(req.body);
        let order = await new OrderService().save(req.body as Order);
        res.status(201).send({ order, message: MESSAGES.COMMON.CREATED });
    }

    static async search(req: Request, res: Response) {
        const orders = await new OrderService().search(req.query as QueryParamsOrder);
        res.send(orders);
    }
}
