import User from "../database/User";

async function getUsers() {
    const orders = await User.getUsers();
    return orders;
}

export default {
    getUsers
}
