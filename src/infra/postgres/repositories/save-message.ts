import { SaveMessageRepository } from '@/data/interfaces';
import { Either, left, right } from '@/shared/either';
import { NotAuthorizedError, UnexpectedError } from '@/shared/errors';
import { NewMessageRepo } from '@/data/models/new-message-repo';
import { PGMessageModel } from '../interfaces/message';
import { pg } from '../config';
import { PGUserModel } from '../interfaces/user';

export class PGSaveMessageRepository implements SaveMessageRepository {
  async saveMessage({
    message: { body, title },
    userId,
    date,
  }: NewMessageRepo): Promise<
    Either<UnexpectedError | NotAuthorizedError, void>
  > {
    try {
      const user = await pg<PGUserModel>('users')
        .where({ id: Number(userId) })
        .first('*');
      if (!user) {
        return left(new NotAuthorizedError());
      }
      await pg<PGMessageModel>('messages').insert({
        body,
        title,
        user_id: Number(userId),
        created_at: new Date(date),
      });
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
