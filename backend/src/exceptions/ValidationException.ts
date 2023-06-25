import HttpError from './HttpException';

export class ValidationException extends HttpError {
    constructor(message: string, stack?: any) {
        super(400, message, stack);
    }
}
