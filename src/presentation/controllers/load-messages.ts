import { LoadMessagesUseCase } from '@/domain/usecases/load-messages/load-messages';
import { Controller, HttpResponse, ok } from '../interfaces';
import { serverError } from '../interfaces';
import { MessageViewModel } from '../view-models/message';

export class LoadMessagesController implements Controller {
  constructor(private readonly loadMessages: LoadMessagesUseCase) {}
  async handle(): Promise<HttpResponse<MessageViewModel[]>> {
    try {
      const messages = await this.loadMessages.load();
      console.log('ENTROU AQUI');
      return ok(MessageViewModel.mapCollection(messages));
    } catch (error) {
      return serverError(error);
    }
  }
}
