import orderController from "../../../controllers/orderController";
import orderService from "../../../services/orderService";
import generateMockedRequest from "../../mocks/mockedRequest";
import mockedNext from "../../mocks/mockedNext";
import mockedResponse from "../../mocks/mockedResponse";

const mockedRequest = generateMockedRequest({
    "id": "id"
});
jest.mock('../../../services/orderService');
const mockedOrderService = orderService as jest.Mocked<typeof orderService>;

describe('orderController ~ getOrders', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockedOrderService.getOrders.mockResolvedValue({})
        await orderController.getOrders(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.send).toHaveBeenCalledWith({ status: "OK", orders: {} });
        expect(mockedNext).toHaveBeenCalledTimes(0);
    });

    test('Should call next in case of error', async () => {
        mockedOrderService.getOrders.mockRejectedValue(new Error("test"))
        await orderController.getOrders(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.send).toHaveBeenCalledTimes(0);
        expect(mockedNext).toHaveBeenCalledTimes(1);
        expect(mockedNext).toHaveBeenCalledWith(new Error("test"));
    });
})

describe('orderController ~ getOrder', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockedOrderService.getOrder.mockResolvedValue({})
        await orderController.getOrder(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.send).toHaveBeenCalledWith({ status: "OK", order: {} });
        expect(mockedNext).toHaveBeenCalledTimes(0);
    });

    test('Should call next in case of error', async () => {
        mockedOrderService.getOrder.mockRejectedValue(new Error("test"))
        await orderController.getOrder(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.send).toHaveBeenCalledTimes(0);
        expect(mockedNext).toHaveBeenCalledTimes(1);
        expect(mockedNext).toHaveBeenCalledWith(new Error("test"));
    });
})
