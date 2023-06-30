import { IUser } from "../constants";

export default async function fetchUsers(): Promise<IUser[]> {
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/users`);

        const { users } = await response.json();

        return users
    } catch (e) {
        throw e;
    }
}
