import { useEffect, useState } from "react";
import fetchOrders from "../apis/fetchOrders"
import wrapPromise from "../lib/wrapPromise"

const useGetData = () => {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchOrders());
        setResource(_resource);
    }, []);

    return resource?.read();
};


export default useGetData;
