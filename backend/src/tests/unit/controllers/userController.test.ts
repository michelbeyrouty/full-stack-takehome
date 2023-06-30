import userController from "../../../controllers/userController";
import userService from "../../../services/userService";
import generateMockedRequest from "../../mocks/mockedRequest";
import mockedNext from "../../mocks/mockedNext";
import mockedResponse from "../../mocks/mockedResponse";

const mockedRequest = generateMockedRequest();
jest.mock('../../../services/userService');
const mockeduserService = userService as jest.Mocked<typeof userService>;

describe('userController ~ getUsers', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockeduserService.getUsers.mockResolvedValue({})
        await userController.getUsers(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.send).toHaveBeenCalledWith({ status: "OK", users: {} });
        expect(mockedNext).toHaveBeenCalledTimes(0);
    });

    test('Should call next in case of error', async () => {
        mockeduserService.getUsers.mockRejectedValue(new Error("test"))
        await userController.getUsers(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.send).toHaveBeenCalledTimes(0);
        expect(mockedNext).toHaveBeenCalledTimes(1);
        expect(mockedNext).toHaveBeenCalledWith(new Error("test"));
    });
})

describe('userController ~ getInactiveUsers', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        mockeduserService.getInactiveUsers.mockResolvedValue({})
        await userController.getInactiveUsers(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.status).toHaveBeenCalledWith(200);
        expect(mockedResponse.send).toHaveBeenCalledWith({ status: "OK", users: {} });
        expect(mockedNext).toHaveBeenCalledTimes(0);
    });

    test('Should call next in case of error', async () => {
        mockeduserService.getInactiveUsers.mockRejectedValue(new Error("test"))
        await userController.getInactiveUsers(mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.send).toHaveBeenCalledTimes(0);
        expect(mockedNext).toHaveBeenCalledTimes(1);
        expect(mockedNext).toHaveBeenCalledWith(new Error("test"));
    });
})
