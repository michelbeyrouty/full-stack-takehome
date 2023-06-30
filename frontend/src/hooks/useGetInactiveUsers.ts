import { useEffect, useState } from "react";
import { IUser } from "../constants";
import fetchInactiveUsers from "../apis/fetchInactiveUsers"
import wrapPromise from "../lib/wrapPromise"

export default function useGetInactiveUsers(): IUser[] {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchInactiveUsers());
        setResource(_resource);
    }, []);

    return resource?.read();
};
