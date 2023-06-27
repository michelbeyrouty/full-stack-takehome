import Order from "../database/Order";

async function getOrders() {
    const orders = await Order.getOrders();
    return orders;
}

export default {
    getOrders
}
