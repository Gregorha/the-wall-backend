import { SaveMessageRepository } from '@/data/interfaces';
import { Either, left, right } from '@/shared/either';
import { NotAuthorizedError, UnexpectedError } from '@/shared/errors';
import { users } from '../data-sources/users';
import { messages } from '../data-sources';
import { NewMessageRepo } from '@/data/models/new-message-repo';

export class FakeSaveMessageRepository implements SaveMessageRepository {
  async saveMessage({
    message: { body, title },
    userId,
    date,
  }: NewMessageRepo): Promise<
    Either<UnexpectedError | NotAuthorizedError, void>
  > {
    try {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        return left(new NotAuthorizedError());
      }
      messages.push({
        authorId: userId,
        authorName: user.name,
        body,
        date,
        title,
        id: messages.length + 1,
      });
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
