import { User } from '@/domain/entities';
import { RegisterUserUseCase } from '@/domain/usecases';
import { SendWelcomeEmailUseCase } from '@/domain/usecases/send-welcome-email/send-welcome-email';
import { Controller, HttpRequest, HttpResponse, ok } from '../interfaces';
import { badRequestError, serverError } from '../interfaces';

export class RegisterUserController implements Controller {
  constructor(
    private readonly registerUser: RegisterUserUseCase,
    private readonly sendWelcomeEmail: SendWelcomeEmailUseCase
  ) {}
  async handle(request: HttpRequest<User>): Promise<HttpResponse<void>> {
    try {
      const responseOrError = await this.registerUser.registerUser(
        request.body
      );
      if (responseOrError.isLeft()) {
        const error = responseOrError.value;
        if (error.type === 'unexpectedError') {
          return serverError(error);
        }
        return badRequestError(error);
      }
      const sendEmailResponseOrError = await this.sendWelcomeEmail.sendWelcomeEmail(
        request.body
      );
      if (sendEmailResponseOrError.isLeft()) {
        console.error(sendEmailResponseOrError.value);
      }
      return ok(undefined);
    } catch (error) {
      return serverError(error);
    }
  }
}
