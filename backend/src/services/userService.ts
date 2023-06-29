import User from "../database/User";

async function getUsers() {
    return await User.getUsers();
}

async function getInactiveUsers() {
    return await User.getInactiveUsers();
}

export default {
    getUsers,
    getInactiveUsers
}
