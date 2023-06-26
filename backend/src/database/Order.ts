import SQL_DB from './db';
import { ServerException } from '../exceptions/ServerException';

async function getOrders() {
    try {
        const result = await SQL_DB.sql("SELECT * FROM work_orders");
        return result
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

export default {
    getOrders
}
