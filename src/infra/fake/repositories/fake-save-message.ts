import { SaveMessageRepository } from '@/data/interfaces';
import { UserNotFoundError } from '@/domain/errors';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { users } from '../data-sources/users';
import { messages } from '../data-sources';
import { NewMessageRepo } from '@/data/models/new-message-repo';

export class FakeSaveMessageRepository implements SaveMessageRepository {
  async saveMessage({
    message: { body, title },
    userId,
    date,
  }: NewMessageRepo): Promise<
    Either<UnexpectedError | UserNotFoundError, void>
  > {
    try {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        return left(new UserNotFoundError());
      }
      messages.push({
        authorId: userId,
        authorName: user.name,
        body,
        date,
        title,
        id: String(messages.length + 1),
      });
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
