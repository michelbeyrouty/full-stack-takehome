export default async function createOrder(order: any) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };

        await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/orders`, requestOptions);
    } catch (e) {
        throw e;
    }
}
