import { AuthData, LoginData } from '@/domain/entities';
import { AuthenticateUserUseCase } from '@/domain/usecases';
import { Controller, HttpRequest, HttpResponse, ok } from '../interfaces';
import { badRequestError, serverError } from '@/presentation/interfaces';

export class AuthenticateUserController implements Controller {
  constructor(private readonly authenticateUser: AuthenticateUserUseCase) {}
  async handle(
    request: HttpRequest<LoginData>
  ): Promise<HttpResponse<AuthData>> {
    try {
      const authData = await this.authenticateUser.auth(request.body);
      if (authData.isLeft()) {
        const error = authData.value;
        if (authData.value.type === 'userNotFoundError') {
          return serverError(error);
        }
        return badRequestError(error);
      }
      return ok(authData.value);
    } catch (error) {
      return serverError(error);
    }
  }
}
