import SQL_DB from './db';
import { IOrder } from "../constants/interfaces";
import { ServerException } from '../exceptions/ServerException';

async function getOrders() {

    const getOrder = "SELECT * FROM work_orders"

    try {
        const result = await SQL_DB.sql(getOrder);
        return result
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

async function getOrderByOrderId(orderId: number) {

    const getOrderWithUsers = `
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
        `;

    try {
        const result = await SQL_DB.sql(getOrderWithUsers, [orderId]);

        const orderWithUsers = {
            ...result[0],
            users: JSON.parse(result[0].users)
        }

        return orderWithUsers
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }
}

async function createOrder(order: IOrder) {

    const insertOrder = "INSERT INTO work_orders (name) VALUES (?)"
    const retrieveOrderID = "SELECT last_insert_rowid() AS order_id"
    const insertWorkOrderAsignees = "INSERT INTO work_order_assignees (work_order_id, user_id) VALUES (?, ?)"

    try {
        await SQL_DB.sql("BEGIN TRANSACTION");

        await SQL_DB.sql(insertOrder, [order.name]);

        const result = await SQL_DB.sql(retrieveOrderID);
        const orderID = result[0].order_id;

        const orderUser = order.users || []
        for (const user of orderUser) {
            await SQL_DB.sql(insertWorkOrderAsignees, [orderID, user.id]);
        }

        await SQL_DB.sql("COMMIT");

    } catch (error: any) {

        await SQL_DB.sql("ROLLBACK");
        throw new ServerException(error.message, error.stack)
    }
}

async function updateOrderStatus(orderId: number) {

    const updateOrderStatus = `
        UPDATE work_orders
        SET status = CASE
            WHEN status = 'OPEN' THEN 'CLOSED'
            WHEN status = 'CLOSED' THEN 'OPEN'
            ELSE status
        END
        WHERE id = ?
    `;

    try {
        await SQL_DB.sql(updateOrderStatus, [orderId]);
    } catch (error: any) {
        throw new ServerException(error.message, error.stack)
    }

}

export default {
    getOrders,
    getOrderByOrderId,
    createOrder,
    updateOrderStatus
}
