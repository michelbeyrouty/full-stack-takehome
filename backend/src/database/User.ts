import SQL_DB from './db';
import { ServerException } from '../exceptions/ServerException';

async function getUsers() {

    const getUsers = "SELECT * FROM users"

    try {
        return await SQL_DB.sql(getUsers);
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

async function getInactiveUsers() {

    const getInactiveUsers = `
        SELECT id, name, email
        FROM users
        WHERE id NOT IN ( SELECT DISTINCT user_id FROM work_order_assignees )
    `;

    try {
        return await SQL_DB.sql(getInactiveUsers);
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

export default {
    getUsers,
    getInactiveUsers
}
