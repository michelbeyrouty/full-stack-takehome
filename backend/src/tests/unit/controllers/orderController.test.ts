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

describe('orderController', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should getOrders succeffuly', async () => {
        mockedOrderService.getOrders.mockResolvedValue({})
        await orderController.getOrders(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.send).toHaveBeenCalledWith({ status: "OK", orders: {} });
        expect(mockedNext).toHaveBeenCalledTimes(0);
    });

    test('Should getOrders with error', async () => {
        mockedOrderService.getOrders.mockRejectedValue(new Error("test"))
        await orderController.getOrders(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.send).toHaveBeenCalledTimes(0);
        expect(mockedNext).toHaveBeenCalledTimes(1);
        expect(mockedNext).toHaveBeenCalledWith(new Error("test"));
    });

})









