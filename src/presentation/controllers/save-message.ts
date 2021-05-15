import { NewMessageData } from '@/domain/entities';
import { Controller, HttpRequest, HttpResponse, ok } from '../interfaces';
import { badRequestError, serverError } from '@/presentation/interfaces';
import { SaveMessage } from '@/domain/usecases';
import { okNoContent } from '../interfaces/okNoContent';

export class SaveMessageController implements Controller {
  constructor(private readonly saveMessage: SaveMessage) {}
  async handle(
    request: HttpRequest<NewMessageData>
  ): Promise<HttpResponse<void>> {
    try {
      const newMessageResponseOrError = await this.saveMessage.save(request.body);
      if (newMessageResponseOrError.isLeft()) {
        const error = newMessageResponseOrError.value;
        if (error.type === 'unexpectedError') {
          return serverError(error);
        }
        return badRequestError(error);
      }
      return okNoContent(newMessageResponseOrError.value);
    } catch (error) {
      return serverError(error);
    }
  }
}
