import { Controller, HttpMethod, HttpRequest } from '@/presentation/interfaces';
import { Request, Response } from 'express';

export const adaptExpressRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const adaptedRequest = adaptExpressRequest(req);
    const httpResponse = await controller.handle(adaptedRequest);
    res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};

export const adaptExpressRequest = (req: Request): HttpRequest => {
  const headers = Object.entries(req.headers).map(([prop, value]) => ({
    name: prop,
    value: value ?? '',
  }));

  const params = Object.entries(req.params).map(([prop, value]) => ({
    name: prop,
    value,
  }));

  const query = Object.entries(req.query).map(([prop, value]) => ({
    name: prop,
    value: typeof value === 'string' ? value : '',
  }));
  return {
    body: req.body,
    headers,
    params,
    query,
    method: req.method as HttpMethod,
  };
};
