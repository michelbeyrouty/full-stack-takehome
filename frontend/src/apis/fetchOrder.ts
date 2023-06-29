import { IOrder } from "../constants";

export default async function fetchOrder(orderId?: string): Promise<IOrder> {
    try {
        const response = await fetch(`http://localhost:4000/api/orders/${orderId}`);

        const { order } = await response.json();

        return order
    } catch (e) {
        throw e;
    }
}
