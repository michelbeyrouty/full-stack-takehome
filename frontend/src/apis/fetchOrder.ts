import delay from "../lib/delay"

export default async function fetchOrder(orderId?: string) {
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
