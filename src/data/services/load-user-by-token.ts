import { User } from '@/domain/entities';
import { UserNotFoundError } from '@/domain/errors';
import { DecryptError } from '@/domain/errors/decrypt-error';
import { LoadUserWithToken } from '@/domain/usecases/load-user-with-token/load-user-with-token';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { TokenVerify } from '../interfaces/token-verify';
import { UserRepository } from '../interfaces/user-repository';

export class LoadUserWithTokenService implements LoadUserWithToken {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly decrypt: TokenVerify
  ) {}
  async loadUser(
    accessToken: string
  ): Promise<Either<UnexpectedError | UserNotFoundError | DecryptError, User>> {
    try {
      console.log('ACCESS TOKEN', accessToken);
      const id = await this.decrypt(accessToken);
      console.log('ID', id);
      if (id) {
        const responseOrError = await this.userRepository.getWithId(
          id as string
        );
        if (responseOrError.isLeft()) {
          return left(responseOrError.value);
        }
        return right(responseOrError.value);
      }
      return left(new DecryptError());
    } catch (err) {
      return left(new UnexpectedError(err, 'LoadUserWithTokenService'));
    }
  }
}
