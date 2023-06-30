import { useEffect, useState } from "react";
import { IOrder } from "../constants";
import fetchOrders from "../apis/fetchOrders"
import wrapPromise from "../lib/wrapPromise"

export default function useGetOrders(): IOrder[] {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchOrders());
        setResource(_resource);
    }, []);

    return resource?.read();
};
