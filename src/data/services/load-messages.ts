import { MessageModel } from '@/data/models';
import { LoadMessagesUseCase } from '@/domain/usecases/load-messages/load-messages';
import { LoadMessageRepository } from '../interfaces';

export class LoadMessagesService implements LoadMessagesUseCase {
  constructor(private readonly loadMessageRepository: LoadMessageRepository) {}
  async load(): Promise<MessageModel[]>{
    return this.loadMessageRepository.loadMessages()
  };
}
