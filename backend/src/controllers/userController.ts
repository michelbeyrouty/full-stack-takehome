import { NextFunction, Request, Response } from 'express';
import ValidationException from '../exceptions/ValidationException';
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

const getUser = async (request: Request, response: Response, next: NextFunction) => {

    try {
        const { body } = request;

        if (!body.id) {
            throw new ValidationException("One of the following keys is missing or is empty in request body: 'id'")
        }

        const user = await userService.getUserById(Number(body.id) || 9);
        response.set('Access-Control-Allow-Origin', '*');
        response.status(200).send({ status: "OK", favorite: user });
    } catch (error) {
        next(error)
    }
}

export default {
    getUser,
    getUsers
}
