import { HttpResponse } from './http';

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.message,
});
