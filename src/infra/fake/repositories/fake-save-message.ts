import { SaveMessageRepository } from '@/data/interfaces';
import { UserNotFoundError } from '@/domain/errors';
import { Either, left, right } from '@/shared/either';
import { UnexpectedError } from '@/shared/errors';
import { users } from '../data-sources/users';
import { messages } from '../data-sources';
import { NewMessageModel } from '@/data/models';

export class FakeRegisterUserRepository implements SaveMessageRepository {
  async saveMessage({
    message: { body, date, title },
    userId,
  }: NewMessageModel): Promise<
    Either<UnexpectedError | UserNotFoundError, void>
  > {
    try {
      const user = users.find((u) => u.id === userId);
      if (!user) {
        return left(UserNotFoundError);
      }
      messages.push({
        authorId: userId,
        authorName: user.name,
        body,
        date,
        title,
        id: String(messages.length + 1),
      });
      console.log(users);
      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'FakeUserRepository'));
    }
  }
}
