import { UserNotFoundError } from '@/domain/errors';
import { User } from '@/domain/entities';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { users } from '../data-sources/users';
import { UserRepository } from '@/data/interfaces/user-repository';

export class FakeUserRepository implements UserRepository {
  async getWithId(
    id: string
  ): Promise<Either<UserNotFoundError | UnexpectedError, User>> {
    try {
      const user = users.find((user) => user.id === id);
      if (!user) {
        return left(new UserNotFoundError(id, true));
      }
      return right(user);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
  async get(
    email: string
  ): Promise<Either<UserNotFoundError | UnexpectedError, User>> {
    try {
      const user = users.find((user) => user.email === email);
      if (!user) {
        return left(new UserNotFoundError(email));
      }
      return right(user);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
