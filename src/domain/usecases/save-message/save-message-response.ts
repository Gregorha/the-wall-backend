import { Either } from '@/shared/either';
import { InvalidMessageError } from '@/domain/errors';
import { UnexpectedError, NotAuthorizedError } from '@/shared/errors';

export type SaveMessageResponse = Either<
  NotAuthorizedError | UnexpectedError | InvalidMessageError,
  void
>;
