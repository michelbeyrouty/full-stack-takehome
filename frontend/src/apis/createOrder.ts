import delay from "../lib/delay"

export default async function createOrder(order: any) {
    try {
        await delay(2000);
        console.log("Creating Order: ", JSON.stringify(order))
        return
    } catch (e) {
        throw e;
    }
}
