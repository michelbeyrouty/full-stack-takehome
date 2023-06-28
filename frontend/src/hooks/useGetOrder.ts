import { useEffect, useState } from "react";
import fetchOrder from "../apis/fetchOrder"
import wrapPromise from "../lib/wrapPromise"

const useGetOrder = (orderId?: string) => {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchOrder(orderId));
        setResource(_resource);
    }, []);

    return resource?.read();
};

export default useGetOrder;
