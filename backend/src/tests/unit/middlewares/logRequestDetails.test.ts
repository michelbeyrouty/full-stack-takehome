import logRequestDetails from "../../../middlewares/logRequestDetails";
import generateMockedRequest from "../../mocks/mockedRequest";
import mockedNext from "../../mocks/mockedNext";
import mockedResponse from "../../mocks/mockedResponse";

const mockedRequest = generateMockedRequest();

describe('logRequestDetails', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should run successfuly', async () => {
        logRequestDetails(mockedRequest, mockedResponse, mockedNext);
        expect(mockedResponse.on).toHaveBeenCalled();
        expect(mockedNext).toHaveBeenCalled();
    });
})
