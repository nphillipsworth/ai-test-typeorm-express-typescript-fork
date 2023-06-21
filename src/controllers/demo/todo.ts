// Take query params and return a response from https://jsonplaceholder.typicode.com/todos/1
import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'utils/response/custom-error/CustomError';
import axios from 'axios';

export const getTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.query.id) {
            throw new CustomError(400, 'General', 'Missing id.', ['Missing id.']);
        }
        if (typeof req.query.id !== 'string') {
            throw new CustomError(400, 'General', 'Invalid id.', ['Invalid id.']);
        }

        const todo = await axios.get(`https://jsonplaceholder.typicode.com/todos/${req.query.id}`);

        res.customSuccess(200, `Todo is ${JSON.stringify(todo.data)}`);
    } catch (error) {
        const customError = new CustomError(400, 'Raw', 'Error', null, error);
        return next(customError);
    }
}

// Handle the request and send the response

