import { NextFunction, Request, Response } from 'express';
import ValidationException from '../exceptions/ValidationException';
import { IOrder } from "../constants/interfaces"
import orderService from "../services/orderService";

export const getOrders = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const orders = await orderService.getOrders();
        response.set('Access-Control-Allow-Origin', '*');
        response.status(200).send({ status: "OK", orders });
    } catch (error) {
        next(error)
    }
}

export const getOrder = async (request: Request, response: Response, next: NextFunction) => {
    try {

        const order = await orderService.getOrder(Number(request.params.orderId));
        response.set('Access-Control-Allow-Origin', '*');
        response.status(200).send({ status: "OK", order });
    } catch (error) {
        next(error)
    }
}

export const createOrder = async (request: Request, response: Response, next: NextFunction) => {
    try {

        const body: IOrder = request.body;
        // TODO: Check types

        if (!body.name) {
            throw new ValidationException("One of the following keys is missing or is empty in request body: 'name'")
        }

        const order = await orderService.createOrder(body);
        response.set('Access-Control-Allow-Origin', '*');
        response.status(200).send({ status: "OK", order });
    } catch (error) {
        next(error)
    }
}

export default {
    getOrders,
    getOrder,
    createOrder
}
