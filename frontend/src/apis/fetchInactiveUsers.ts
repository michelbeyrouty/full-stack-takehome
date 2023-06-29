import { IUser } from "../constants";

export default async function fetchInactiveUsers(): Promise<IUser[]> {
    try {
        const response = await fetch("http://localhost:4000/api/users/inactive");

        const { users: inactiveUsers } = await response.json();

        return inactiveUsers
    } catch (e) {
        throw e;
    }
}
