import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'utils/response/custom-error/CustomError';

export const time = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.query.timezone) {
      throw new CustomError(400, 'General', 'Missing timezone.', ['Missing timezone.']);
    }

    if (typeof req.query.timezone !== 'string') {
      throw new CustomError(400, 'General', 'Invalid timezone.', ['Invalid timezone.']);
    }

    const currentTime = new Date().toLocaleTimeString('en-US', { timeZone: req.query.timezone });
    res.customSuccess(200, `Time in ${req.query.timezone} is ${currentTime}`);
  } catch (error) {
    const customError = new CustomError(400, 'Raw', 'Error', null, error);
    return next(customError);
  }
};


// Here are the changes made to clean up the code:

// 1. Added a try-catch block to handle any potential errors that may occur during the code execution.
// 2. Moved the code for checking missing and invalid timezones inside the try block for better error handling.
// 3. Renamed the variable `time` to `currentTime` for clarity.
// 4. Adjusted the indentation for better readability.
// 5. Removed unnecessary comments.