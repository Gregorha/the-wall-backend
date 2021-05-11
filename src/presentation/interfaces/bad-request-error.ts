import { HttpResponse } from './';

export const badRequestError = (error: Error): HttpResponse => ({
  statusCode: 400,
  data: error.message,
});
