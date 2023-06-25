import HttpError from './HttpException';

export class ServerException extends HttpError {
    constructor(message: string, stack?: any) {
        super(500, message, stack);
    }
}
