import { IUser } from "../constants";

export default async function fetchInactiveUsers(): Promise<IUser[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users/inactive`);

        const { users: inactiveUsers } = await response.json();

        return inactiveUsers
    } catch (e) {
        throw e;
    }
}
