import Order from "../database/Order";
import { IOrder } from "../constants/interfaces";

async function getOrders() {
    return await Order.getOrders();
}

async function getOrder(orderId: number) {
    return await Order.getOrderByOrderId(orderId);
}

async function createOrder(order: IOrder) {
    return await Order.createOrder(order);
}

async function updateOrderStatus(orderId: number) {
    return await Order.updateOrderStatus(orderId);
}

export default {
    getOrders,
    getOrder,
    createOrder,
    updateOrderStatus
}
