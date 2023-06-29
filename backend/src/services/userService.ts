import User from "../database/User";

async function getUserById(userId: number) {
    const user = User.getUserById(userId);
    return user;
}

async function getUsers() {
    const orders = await User.getUsers();
    return orders;
}

export default {
    getUserById,
    getUsers
}
