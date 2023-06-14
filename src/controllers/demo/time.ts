// controller displays current time in requested timezone
import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'utils/response/custom-error/CustomError';


export const time = async (req: Request, res: Response, next: NextFunction) => {
    // catch missing timezone

    if (!req.query.timezone) {
        const customError = new CustomError(400, 'General', 'Missing timezone.', ['Missing timezone.']);
        return next(customError);
    }
    // catch invalid timezone
    
    if (typeof req.query.timezone !== 'string') {
        const customError = new CustomError(400, 'General', 'Invalid timezone.', ['Invalid timezone.']);
        return next(customError);
    }

    // try to get time in requested timezone
    let time;
    try {
        time = new Date().toLocaleTimeString('en-US', { timeZone: req.query.timezone });
    } catch (err) {
        const customError = new CustomError(400, 'Raw', 'Error', null, err);
        return next(customError);
    }

    res.customSuccess(200, `Time in ${req.query.timezone} is ${time}`);
}

