export default async function updateOrderStatus(orderId: number) {
    try {
        const requestOptions = {
            method: 'PUT',
        };

        await fetch(`http://localhost:4000/api/orders/${orderId}/status`, requestOptions);
    } catch (e) {
        throw e;
    }
}
