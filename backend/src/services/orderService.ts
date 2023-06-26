import Order from "../database/Order";

async function getOrders() {
    const orders = Order.getOrders();
    return orders;
}

export default {
    getOrders
}
