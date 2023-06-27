import orderService from "../../../services/orderService";
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

describe('orderController ~ getOrder', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockedOrder.getOrder.mockResolvedValue({});
        await orderService.getOrder(1);
        expect(mockedOrder.getOrder).toHaveBeenCalledWith(1)
    });
})
