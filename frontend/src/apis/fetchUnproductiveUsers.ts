import delay from "../lib/delay"
import { IUser } from "../constants";

export default async function fetchUnproductiveUsers(): Promise<IUser[]> {
    try {
        // const response = await fetch("http://localhost:4000/api/users/unproductive");

        await delay(3000);
        // const { users } = await response.json();

        const unproductiveUsers: IUser[] = [
            {
                id: 1,
                name: "namescdsdsdscscsc",
                email: "email",
            },
            {
                id: 2,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
            {
                id: 3,
                name: "name",
                email: "email",
            },
        ];

        return unproductiveUsers
    } catch (e) {
        throw e;
    }
}
