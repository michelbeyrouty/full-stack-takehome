import { IOrder } from "../constants";

export default async function fetchOrder(orderId?: string): Promise<IOrder> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/orders/${orderId}`);

        const { order } = await response.json();

        return order
    } catch (e) {
        throw e;
    }
}
