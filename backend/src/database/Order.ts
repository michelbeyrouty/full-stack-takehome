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

async function getOrder(orderId: number) {
    try {
        const result = await SQL_DB.sql(`
            SELECT
                wo.id,
                wo.name,
                wo.status,
                COALESCE('[' || GROUP_CONCAT(
                    '{' ||
                    '"id": ' || u.id || ', ' ||
                    '"name": "' || u.name || '", ' ||
                    '"email": "' || u.email || '"' ||
                    '}'
                ) || ']', '[]') AS users
            FROM
                work_orders wo
            LEFT JOIN
                work_order_assignees woa ON wo.id = woa.work_order_id
            LEFT JOIN
                users u ON woa.user_id = u.id
            WHERE
                wo.id = ?
        `, [orderId]);

        const orderWithUsers = {
            ...result[0],
            users: JSON.parse(result[0].users)
        }

        //TODO: FIX

        return orderWithUsers
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

export default {
    getOrders,
    getOrder
}
