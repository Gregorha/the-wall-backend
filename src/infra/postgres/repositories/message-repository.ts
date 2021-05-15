import { LoadMessageRepository } from '@/data/interfaces';
import { MessageModel } from '@/data/models';
import { PGMessageModelWithUser } from '../interfaces/message';
import { pg } from '../config';

export class PGMessageRepository implements LoadMessageRepository {
  async loadMessages(): Promise<MessageModel[]> {
    const messages = (await pg<PGMessageModelWithUser>('messages')
      .join('users', { 'users.id': 'messages.user_id' })
      .select(
        'messages.*',
        'users.name as userName',
        'users.id as userId'
      )) as PGMessageModelWithUser[];

    return messages.map((message) => ({
      id: String(message.id),
      body: message.body,
      title: message.title,
      authorName: message.userName,
      date: message.created_at,
    }));
  }
}
