import delay from "../lib/delay";

export default async function updateOrderStatus(newStatus: string) {
    try {
        await delay(2000);
        console.log("updateOrderStatus: ", newStatus)
        return
    } catch (e) {
        throw e;
    }
}
