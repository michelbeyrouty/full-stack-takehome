import { NextFunction, Request, Response } from 'express';

export default function allowCrossDomain(request: Request, response: Response, next: NextFunction) {
    response.header(`Access-Control-Allow-Origin`, `*`);
    response.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    response.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
};
