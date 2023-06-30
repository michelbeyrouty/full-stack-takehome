import orderService from "../../../services/orderService";
import { IOrder } from "../../../constants/interfaces"
import Order from "../../../database/Order";

jest.mock('../../../database/Order');
const mockedOrder = Order as jest.Mocked<typeof Order>;

describe('orderService ~ getOrders', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockedOrder.getOrders.mockResolvedValue({});
        await orderService.getOrders();
        expect(mockedOrder.getOrders).toHaveBeenCalledWith()
    });
})

describe('orderService ~ getOrder', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockedOrder.getOrderByOrderId.mockResolvedValue({});
        await orderService.getOrder(1);
        expect(mockedOrder.getOrderByOrderId).toHaveBeenCalledWith(1)
    });
})

describe('orderService ~ createOrder', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        await orderService.createOrder({
            name: "name"
        } as IOrder);
        expect(mockedOrder.createOrder).toHaveBeenCalledWith({
            name: "name"
        })
    });
})

describe('orderService ~ updateOrderStatus', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        await orderService.updateOrderStatus(1);
        expect(mockedOrder.updateOrderStatus).toHaveBeenCalledWith(1)
    });
})
