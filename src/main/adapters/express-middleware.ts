import { HttpRequest, Middleware } from '@/presentation/interfaces';
import { Request, Response, NextFunction } from 'express';
import { adaptExpressRequest } from './express-router';

export const adaptMiddleware = (middleware: Middleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request: HttpRequest = adaptExpressRequest(req);
    const httpResponse = await middleware.handle(request);
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.data);
      next();
    } else {
      res.status(httpResponse.statusCode).json({
        error: httpResponse.data.message,
      });
    }
  };
};
