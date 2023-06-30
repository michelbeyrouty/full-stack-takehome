import userService from "../../../services/userService";
import User from "../../../database/User";

jest.mock('../../../database/User');
const mockedUser = User as jest.Mocked<typeof User>;

describe('userService ~ getUsers', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        await userService.getUsers();
        expect(mockedUser.getUsers).toHaveBeenCalled()
    });
})

describe('userService ~ getInactiveUsers', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should succeed with the right input', async () => {
        await userService.getInactiveUsers();
        expect(mockedUser.getInactiveUsers).toHaveBeenCalled()
    });
})
