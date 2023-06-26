import { NextFunction, Request, Response } from 'express';
import orderService from "../services/orderService";

export const getOrders = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const orders = await orderService.getOrders();
        response.status(200).send({ status: "OK", orders: orders });
    } catch (error) {
        next(error)
    }
}
