import { NextFunction, Request, Response } from 'express';
import orderService from "../services/orderService";

export const getOrders = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const orders = await orderService.getOrders();
        response.status(200).send({ status: "OK", orders });
    } catch (error) {
        next(error)
    }
}

export const getOrder = async (request: Request, response: Response, next: NextFunction) => {
    try {

        const order = await orderService.getOrder(Number(request.params.orderId));
        response.status(200).send({ status: "OK", order });
    } catch (error) {
        next(error)
    }
}

export default {
    getOrders,
    getOrder
}
