import delay from "../lib/delay";
import { IOrder } from "../constants";

export default async function fetchOrders(): Promise<IOrder[]> {
    try {
        const response = await fetch("http://localhost:4000/api/orders");

        await delay(2000);
        const { orders } = await response.json();

        return orders
    } catch (e) {
        throw e;
    }
}
