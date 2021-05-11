import {
  LoadMessageRepository as LoadMessagesRepository,
  RegisterUserRepository,
} from '@/data/interfaces';
import { UserAlreadyExistsError } from '@/domain/errors';
import { User } from '@/domain/entities';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { users } from '../data-sources/users';

export class FakeRegisterUserRepository implements RegisterUserRepository {
  async registerUser(
    user: User
  ): Promise<Either<UserAlreadyExistsError | UnexpectedError, void>> {
    try {
      if (users.some((u) => u.email === user.email)) {
        return left(new UserAlreadyExistsError(user.email));
      }
      user.id = String(users.length + 1);
      users.push(user);
      console.log(users);
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
