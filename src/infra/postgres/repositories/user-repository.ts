import { UserNotFoundError } from '@/domain/errors';
import { User } from '@/domain/entities';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { UserRepository } from '@/data/interfaces/user-repository';
import { PGUserModel } from '../interfaces/user';
import { pg } from '../config';

export class PGUserRepository implements UserRepository {
  async getWithId(
    id: string
  ): Promise<Either<UserNotFoundError | UnexpectedError, User>> {
    try {
      const user = await pg<PGUserModel>('users')
        .where({ id: Number(id) })
        .first('*');
      if (!user) {
        return left(new UserNotFoundError(id, true));
      }
      const adaptUser = {
        ...user,
        id: String(user.id),
      };
      return right(adaptUser);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
  async get(
    email: string
  ): Promise<Either<UserNotFoundError | UnexpectedError, User>> {
    try {
      const user = await pg<PGUserModel>('users').where({ email }).first('*');
      if (!user) {
        return left(new UserNotFoundError(email));
      }
      const adaptUser = {
        ...user,
        id: String(user.id),
      };
      return right(adaptUser);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
