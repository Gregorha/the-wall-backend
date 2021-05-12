import { NewMessageData } from '@/domain/entities';
import { UserNotFoundError } from '@/domain/errors';
import { Either } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { NewMessageModel } from '../models';
import { NewMessageRepo } from '../models/new-message-repo';

export interface SaveMessageRepository {
  saveMessage: (newMessage: NewMessageRepo) => Promise<Either<UnexpectedError | UserNotFoundError, void>>;
}
