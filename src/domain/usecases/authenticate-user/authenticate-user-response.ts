import { Either } from '@/shared/either';
import { InvalidPasswordError, UserNotFoundError } from '@/domain/errors';
import { UnexpectedError } from '@/shared/errors';
import { AuthData } from '@/domain/entities/auth-data';

export type AuthenticateUserResponse = Either<
  InvalidPasswordError | UserNotFoundError | UnexpectedError,
  AuthData
>;
