import Order from "../database/Order";

async function getOrders() {
    const orders = await Order.getOrders();
    return orders;
}

async function getOrder(orderId: number) {
    const orders = await Order.getOrder(orderId);
    return orders;
}

export default {
    getOrders,
    getOrder
}
