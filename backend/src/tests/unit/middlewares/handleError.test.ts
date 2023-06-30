import handleError from "../../../middlewares/handleError";
import HttpException from "../../../exceptions/HttpException"
import generateMockedRequest from "../../mocks/mockedRequest";
import mockedNext from "../../mocks/mockedNext";
import mockedResponse from "../../mocks/mockedResponse";

const mockedRequest = generateMockedRequest();

describe('handleError', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should generate proper response', async () => {
        handleError(new HttpException(500, "TEST"), mockedRequest, mockedResponse, mockedNext)
        expect(mockedResponse.status).toBeCalledWith(500)
        expect(mockedResponse.json).toBeCalledWith({
            status: 500,
            message: 'TEST',
            stack: {}
        })
    });
})
