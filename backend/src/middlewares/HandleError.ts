import { NextFunction, Request, Response } from 'express';
import HttpException from "../exceptions/HttpException"
import config from "../config"

export default function HandleError(error: HttpException, request: Request, response: Response, next: NextFunction) {
    response.status(error.status).json({
        status: error.status || 500,
        message: error.message || 'Something went wrong',
        stack: config.enviroment === 'development' ? error.stack : {}
    })
}
