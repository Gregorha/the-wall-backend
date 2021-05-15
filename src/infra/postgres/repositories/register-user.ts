import {
  LoadMessageRepository as LoadMessagesRepository,
  RegisterUserRepository,
} from '@/data/interfaces';
import { UserAlreadyExistsError } from '@/domain/errors';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { PGUserModel } from '../interfaces/user';
import { pg } from '../config';
import { UserModel } from '@/data/models';

export class PGRegisterUserRepository implements RegisterUserRepository {
  async registerUser(
    user: UserModel
  ): Promise<Either<UserAlreadyExistsError | UnexpectedError, void>> {
    try {
      const registeredUser = await pg<PGUserModel>('users')
        .where({ email: user.email })
        .first('*');
      if (registeredUser) {
        return left(new UserAlreadyExistsError(user.email));
      }
      await pg<PGUserModel>('users').insert({
        email: user.email,
        name: user.name,
        password: user.password,
      });
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'PGUserRepository'));
    }
  }
}
