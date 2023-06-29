import delay from "../lib/delay"

export default async function createOrder(order: any) {
    try {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };

        const response = await fetch(`http://localhost:4000/api/orders`, requestOptions);

        await delay(2000);
        console.log("Creating Order: ", JSON.stringify(response))
        return
    } catch (e) {
        throw e;
    }
}
