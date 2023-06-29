import delay from "../lib/delay"
import { IUser } from "../constants";

export default async function fetchUsers(): Promise<IUser[]> {
    try {
        const response = await fetch("http://localhost:4000/api/users");

        await delay(2000);
        const { users } = await response.json();

        return users
    } catch (e) {
        throw e;
    }
}
