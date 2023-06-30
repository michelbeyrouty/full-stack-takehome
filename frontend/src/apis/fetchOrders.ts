import delay from "../lib/delay";
import { IOrder } from "../constants";

export default async function fetchOrders(): Promise<IOrder[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/orders`);

        await delay(1000);
        const { orders } = await response.json();

        return orders
    } catch (e) {
        throw e;
    }
}
