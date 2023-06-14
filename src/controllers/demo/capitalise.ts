// controller that returns a string with first letters capitalised
import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const capitalise = async (req: Request, res: Response, next: NextFunction) => {
    // catch missing string
    if (!req.query.string) {
        const customError = new CustomError(400, 'General', 'Missing string.', ['Missing string.']);
        return next(customError);
    }
    // catch invalid string
    if (typeof req.query.string !== 'string') {
        const customError = new CustomError(400, 'General', 'Invalid string.', ['Invalid string.']);
        return next(customError);
    }

    // try to capitalise string

    let capitalisedString;
    try {
        
        capitalisedString = req.query.string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    catch (err) {
        const customError = new CustomError(400, 'Raw', 'Error', null, err);
        return next(customError);
    }

    res.customSuccess(200, `Capitalised string is ${capitalisedString}`);
}