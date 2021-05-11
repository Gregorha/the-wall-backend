import { UserModel } from '@/data/models';
import { InvalidEmailError, InvalidPasswordError } from '@/domain/errors';
import { RegisterUserUseCase } from '@/domain/usecases/register-user/register-user';
import { RegisterUserResponse } from '@/domain/usecases/register-user/register-user-response';
import { left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { Encrypt } from '../interfaces';
import { RegisterUserRepository } from '../interfaces/register-user-repository';

export class RegisterUserService implements RegisterUserUseCase {
  constructor(
    private readonly registerUserRepository: RegisterUserRepository,
    private readonly encrypt: Encrypt
  ) {}
  async registerUser(user: UserModel): Promise<RegisterUserResponse> {
    try {
      if (!user.email || user.email.length < 6) {
        return left(new InvalidEmailError(user.email));
      }
      if (!user.email || user.password.length < 6) {
        return left(new InvalidPasswordError());
      }
      const adaptedUser = {
        ...user,
        password: await this.encrypt(user.password),
      };
      const responseOrError = await this.registerUserRepository.registerUser(
        adaptedUser
      );
      if (responseOrError.isLeft()) {
        console.error(responseOrError.value);
        return left(responseOrError.value);
      }
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'RegisterUserService'));
    }
  }
}
