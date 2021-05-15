import { UserModel } from '@/data/models';
import { LoginData } from '@/domain/entities';
import { AuthData } from '@/domain/entities/auth-data';
import { InvalidPasswordError, UserNotFoundError } from '@/domain/errors';
import { AuthenticateUserUseCase } from '@/domain/usecases';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { EncryptCompare } from '../interfaces';
import { TokenGenerator } from '../interfaces/token-service';
import { UserRepository } from '../interfaces/user-repository';

export class AuthenticaUserService implements AuthenticateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptCompare: EncryptCompare,
    private readonly tokenGenerator: TokenGenerator
  ) {}
  async auth(
    loginData: LoginData
  ): Promise<
    Either<UnexpectedError | InvalidPasswordError | UserNotFoundError, AuthData>
  > {
    const responseOrError = await this.userRepository.get(loginData.email);

    if (responseOrError.isLeft()) {
      return left(responseOrError.value);
    }

    const user = responseOrError.value;

    if (!(await this.encryptCompare(loginData.password, user.password))) {
      return left(new InvalidPasswordError());
    }
    const token = this.tokenGenerator(user.id);

    return right({ userId: user.id, token });
  }
}
