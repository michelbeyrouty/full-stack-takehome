import SQL_DB from './db';
import { ServerException } from '../exceptions/ServerException';

async function getUserById(userId: number) {
    try {
        const result = await SQL_DB.sql("SELECT * FROM users WHERE id = ?", [userId]);
        return result[0]
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

module.exports = {
    getUserById
}
