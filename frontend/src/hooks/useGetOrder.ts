import { useEffect, useState } from "react";
import { IOrder } from "../constants";
import fetchOrder from "../apis/fetchOrder"
import wrapPromise from "../lib/wrapPromise"

export default function useGetOrder(orderId?: string): IOrder {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchOrder(orderId));
        setResource(_resource);
    }, []);

    return resource?.read();
};
