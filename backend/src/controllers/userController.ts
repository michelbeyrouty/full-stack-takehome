import { NextFunction, Request, Response } from 'express';
import userService from "../services/userService";

export const getUsers = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const users = await userService.getUsers();
        response.set('Access-Control-Allow-Origin', '*');
        response.status(200).send({ status: "OK", users });
    } catch (error) {
        next(error)
    }
}

export default {
    getUsers
}
