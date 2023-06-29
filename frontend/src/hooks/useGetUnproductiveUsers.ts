import { useEffect, useState } from "react";
import { IUser } from "../constants";
import fetchUnproductiveUsers from "../apis/fetchUnproductiveUsers"
import wrapPromise from "../lib/wrapPromise"

export default function useGetUnproductiveUsers(): IUser[] {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchUnproductiveUsers());
        setResource(_resource);
    }, []);

    return resource?.read();
};
