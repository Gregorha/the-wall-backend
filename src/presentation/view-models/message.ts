import { Message } from '@/domain/entities/message';

export class MessageViewModel {
  id: string;
  date: string
  authorName: string
  title: string
  body: string

  static map(entity: Message): MessageViewModel {
    return {
      ...entity,
      date: entity.date.toISOString(),
    };
  }
  static mapCollection(entities: Message[]): MessageViewModel[] {
    return entities.map((entity) => MessageViewModel.map(entity));
  }
}
