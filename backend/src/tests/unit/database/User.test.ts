import User from "../../../database/User";
import SQL_DB from "../../../database/db";
import { ServerException } from '../../../exceptions/ServerException';

jest.mock('../../../database/db');
const mockedSQL_DB = SQL_DB as jest.Mocked<typeof SQL_DB>;

describe("User ~ getUsers", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should fetch users successfully", async () => {
        User.getUsers()
        expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
    });

    it("Should throw ServerException in case of error", async () => {
        try {
            mockedSQL_DB.sql.mockRejectedValueOnce(new Error("test"))
            await User.getUsers()
        } catch (error) {
            expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
            expect(error).toEqual(new ServerException("test"));
        }
    });
});

describe("User ~ getInactiveUsers", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Should fetch inactive users successfully", async () => {
        await User.getInactiveUsers()
        expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
    });

    it("Should throw ServerException in case of error", async () => {
        try {
            mockedSQL_DB.sql.mockRejectedValueOnce(new Error("test"))
            await User.getInactiveUsers()
        } catch (error) {
            expect(mockedSQL_DB.sql).toHaveBeenCalledTimes(1);
            expect(error).toEqual(new ServerException("test"));
        }
    });
});
