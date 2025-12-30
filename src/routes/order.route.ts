import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import expressAsyncHandler from "express-async-handler";
import { OrdersController } from "../controllers/order.controller.js";
import { newOrderSchema, changeStatusOrderSchema, searchOrderQuerySchema } from "../models/order-model.js";

export const orderRoutes = Router();

orderRoutes.post(
    "/orders",
    celebrate({ [Segments.BODY]: newOrderSchema }),
    expressAsyncHandler(OrdersController.save)
);
orderRoutes.get(
    "/orders",
    celebrate({ [Segments.QUERY]: searchOrderQuerySchema }),
    expressAsyncHandler(OrdersController.search)
);
orderRoutes.get(
    "/orders/:id/items",
    expressAsyncHandler(OrdersController.getItems)
);
orderRoutes.get(
    "/orders/:id",
    expressAsyncHandler(OrdersController.getById)
);
orderRoutes.post(
    "/orders/:id/status",
    celebrate({ [Segments.BODY]: changeStatusOrderSchema }),
    expressAsyncHandler(OrdersController.changeStatus)
);