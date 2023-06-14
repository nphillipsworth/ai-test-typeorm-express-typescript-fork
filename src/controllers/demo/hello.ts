import { Request, Response, NextFunction } from 'express';

export const hello = async (req: Request, res: Response, next: NextFunction) => {
    res.customSuccess(200, 'Hello World!');
};