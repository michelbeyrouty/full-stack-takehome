import { NextFunction, Request, Response } from 'express';

export default function LogRequestDetails(request: Request, response: Response, next: NextFunction) {

    response.on("finish", () => {
        console.log(`[${new Date(Date.now())}] Started ${request.method} ${request.originalUrl} ${response.statusCode}`)
    });

    next()
}
