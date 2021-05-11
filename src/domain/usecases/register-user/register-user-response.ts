import { Either } from '@/shared/either';
import { InvalidEmailError } from '@/domain/errors/invalid-email';
import { InvalidPasswordError } from '@/domain/errors/invalid-password';
import { UnexpectedError } from '@/shared/errors';
import { UserAlreadyExistsError } from '@/domain/errors/user-already-exists';

export type RegisterUserResponse = Either<
  | InvalidPasswordError
  | InvalidEmailError
  | UnexpectedError
  | UserAlreadyExistsError,
  void
>;
