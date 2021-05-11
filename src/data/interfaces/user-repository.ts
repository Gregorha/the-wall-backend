import { User } from '@/domain/entities';
import { UserNotFoundError } from '@/domain/errors';
import { Either } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';

export interface UserRepository {
  get: (
    email: string
  ) => Promise<Either<UserNotFoundError | UnexpectedError, User>>;
  getWithId: (
    id: string
  ) => Promise<Either<UserNotFoundError | UnexpectedError, User>>;
}
