import { Message } from '@/domain/entities/message';

export class MessageViewModel {
  id: number;
  date: string
  authorName: string
  title: string
  body: string

  static map(entity: Message): MessageViewModel {
    return {
      ...entity,
      date: entity.date.toISOString(),
      id: Number(entity.id)
    };
  }
  static mapCollection(entities: Message[]): MessageViewModel[] {
    return entities.map((entity) => MessageViewModel.map(entity));
  }
}
