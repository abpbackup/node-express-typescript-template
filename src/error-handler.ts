import { NextFunction, Request, Response } from 'express';

export class AppError extends Error {
  public status: number;

  constructor(message: string, statusCode: number) {
    super();
    this.message = message;
    this.status = statusCode;
    this.name = 'AppError';
  }
}

export const errorHandler = (error: AppError | Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    res.status(error.status).json({ error: error.message });
  } else {
    console.error(error); // or use a more sophisticated logging solution
    res.status(500).json({ error: 'application error', message: error.message, stackTrace: error.stack });
  }
};
