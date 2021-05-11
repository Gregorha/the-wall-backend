import { LoadMessageRepository as LoadMessagesRepository } from '@/data/interfaces';
import { MessageModel } from '@/data/models';
import { messages } from '@/infra/fake/data-sources';

export class FakeMessageRepository implements LoadMessagesRepository {
  async loadMessages(): Promise<MessageModel[]> {
    // adapter em prática, alterando a data que vem em milisegundos do nosso banco para o formato Date.
    return messages.map((message) => ({
      ...message,
      date: new Date(message.date),
    }));
  }
}