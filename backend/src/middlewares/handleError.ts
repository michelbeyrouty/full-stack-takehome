import { NextFunction, Request, Response } from 'express';
import HttpException from "../exceptions/HttpException"
import config from "../constants/config"

export default function HandleError(error: HttpException, request: Request, response: Response, next: NextFunction) {
    response.status(error.status).json({
        status: error.status,
        message: error.message,
        stack: config.enviroment === 'development' ? error.stack : {}
    })
}
