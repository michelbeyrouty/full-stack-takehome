import delay from "../lib/delay";
import { IOrder } from "../constants";

export default async function fetchOrder(orderId?: string): Promise<IOrder> {
    try {
        const response = await fetch(`http://localhost:4000/api/orders/${orderId}`);

        await delay(2000);
        const { order } = await response.json();

        console.log(order)

        return order
    } catch (e) {
        throw e;
    }
}
