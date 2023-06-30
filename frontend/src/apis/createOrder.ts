export default async function createOrder(order: any) {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };

        await fetch(`http://localhost:4000/api/orders`, requestOptions);
    } catch (e) {
        throw e;
    }
}
