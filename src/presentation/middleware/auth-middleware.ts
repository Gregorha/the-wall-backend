import { LoadUserWithToken } from '@/domain/usecases/load-user-with-token/load-user-with-token';
import {
  Header,
  HttpRequest,
  HttpResponse,
  Middleware,
  notAuthorized,
  ok,
} from '@/presentation/interfaces';
import { NotAuthorizedError } from '@/shared/errors';
import { serverError, forbidden } from '../interfaces/';

export class AuthMiddleware implements Middleware {
  constructor(private readonly loadUserWithToken: LoadUserWithToken) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers.find(
        (header: Header) => header.name === 'authorization'
      );
      if (accessToken) {
        const responseOrError = await this.loadUserWithToken.loadUser(
          accessToken.value as string
        );
        if (responseOrError.isLeft()) {
          if (responseOrError.value.type === 'unexpectedError') {
            return forbidden(responseOrError.value);
          }
          return notAuthorized(responseOrError.value);
        }

        const { id } = responseOrError.value;

        return ok({ userId: id });
      }
      return notAuthorized(new NotAuthorizedError());
    } catch (err) {
      return serverError(err);
    }
  }
}
