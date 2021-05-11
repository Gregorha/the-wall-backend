import { NewMessageData } from '@/domain/entities';
import { UserNotFoundError } from '@/domain/errors';
import { Either } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { NewMessageModel } from '../models';

export interface SaveMessageRepository {
  saveMessage: (message: NewMessageModel) => Promise<Either<UnexpectedError | UserNotFoundError, void>>;
}
