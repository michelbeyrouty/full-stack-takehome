export default async function updateOrderStatus(orderId: number) {
    try {
        const requestOptions = {
            method: 'PUT',
        };


        await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/orders/${orderId}/status`, requestOptions);
    } catch (e) {
        throw e;
    }
}
