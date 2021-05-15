import { Either } from '@/shared/either';
import { NotAuthorizedError, UnexpectedError } from '@/shared/errors';
import { NewMessageRepo } from '../models/new-message-repo';

export interface SaveMessageRepository {
  saveMessage: (newMessage: NewMessageRepo) => Promise<Either<UnexpectedError | NotAuthorizedError, void>>;
}
