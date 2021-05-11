import { Either } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { UserModel } from '../models';
import { UserAlreadyExistsError } from '../../domain/errors/user-already-exists';

export interface RegisterUserRepository {
  registerUser: (
    user: UserModel
  ) => Promise<Either<UserAlreadyExistsError | UnexpectedError, void>>;
}
