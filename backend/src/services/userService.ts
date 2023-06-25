
const User = require("../database/User")

async function getUserById(userId: number) {
    const user = User.getUserById(userId);
    return user;
}

export default {
    getUserById
}
