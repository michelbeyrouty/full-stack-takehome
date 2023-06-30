import Order from "../../../database/Order";
import SQL_DB from "../../../database/db";
import { IOrder } from "../../../constants/interfaces"
import { ServerException } from '../../../exceptions/ServerException';

jest.mock('../../../database/db');
const mockedSQL_DB = SQL_DB as jest.Mocked<typeof SQL_DB>;

describe("Order ~ getOrders", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should run successfully", async () => {
        await Order.getOrders()
        expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
    });

    it("Should throw ServerException in case of error", async () => {
        try {
            mockedSQL_DB.sql.mockRejectedValueOnce(new Error("test"))
            await Order.getOrders()
        } catch (error) {
            expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
            expect(error).toEqual(new ServerException("test"));
        }
    });
});

describe("Order ~ getOrderByOrderId", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should run successfully", async () => {
        mockedSQL_DB.sql.mockResolvedValueOnce([{
            "id": 1,
            users: "{}"
        }])
        await Order.getOrderByOrderId(1);
        expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
    });

    it("Should throw ServerException in case of error", async () => {
        try {
            mockedSQL_DB.sql.mockRejectedValueOnce(new Error("test"))
            await Order.getOrderByOrderId(1)
        } catch (error) {
            expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
            expect(error).toEqual(new ServerException("test"));
        }
    });
});

describe("Order ~ createOrder", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should run successfuly", async () => {

        mockedSQL_DB.sql.mockResolvedValue([{
            "order_id": 1,
        }])
        await Order.createOrder({
            users: [{ id: 1 }],
        } as IOrder)

        expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(5);
    });

    it("Should throw ServerException in case of error", async () => {
        try {
            mockedSQL_DB.sql.mockRejectedValueOnce(new Error("test"))
            await Order.createOrder({} as IOrder)
        } catch (error) {
            expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(2);
            expect(error).toEqual(new ServerException("test"));
        }
    });
});

describe("Order ~ updateOrderStatus", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should run successfully", async () => {
        await Order.updateOrderStatus(1)
        expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
    });

    it("Should throw ServerException in case of error", async () => {
        try {
            mockedSQL_DB.sql.mockRejectedValueOnce(new Error("test"))
            await Order.updateOrderStatus(1)
        } catch (error) {
            expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
            expect(error).toEqual(new ServerException("test"));
        }
    });
});
