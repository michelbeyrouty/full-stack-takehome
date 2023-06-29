import { useEffect, useState } from "react";
import { IUser } from "../constants";
import fetchUsers from "../apis/fetchUsers"
import wrapPromise from "../lib/wrapPromise"

export default function useGetUsers(): IUser[] {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        const _resource = wrapPromise(fetchUsers());
        setResource(_resource);
    }, []);

    return resource?.read();
};
