import { Either } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { User } from '@/domain/entities';
import { UserNotFoundError } from '@/domain/errors';

export type LoadUserWithTokenResponse = Either<UnexpectedError | UserNotFoundError, User>;
