import { NextFunction, Request, Response } from 'express';
import HttpException from "../exceptions/HttpException"
import config from "../config"

const ErrorHandler = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
    console.log("Middleware Error Hadnling");
    res.status(error.status).json({
        status: error.status || 500,
        message: error.message || 'Something went wrong',
        stack: config.enviroment === 'development' ? error.stack : {}
    })
}

export default ErrorHandler
