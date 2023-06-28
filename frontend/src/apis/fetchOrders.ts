import delay from "../lib/delay"

export default async function fetchOrders() {
    try {
        const response = await fetch("http://localhost:4000/api/orders");

        await delay(2000);
        const { orders } = await response.json();

        return orders
    } catch (e) {
        throw e;
    }
}
