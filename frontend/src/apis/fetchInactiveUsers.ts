import delay from "../lib/delay"
import { IUser } from "../constants";

export default async function fetchInactiveUsers(): Promise<IUser[]> {
    try {
        // const response = await fetch("http://localhost:4000/api/users/inactive");

        await delay(3000);
        // const { users } = await response.json();

        const inactiveUsers: IUser[] = [
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

        return inactiveUsers
    } catch (e) {
        throw e;
    }
}
