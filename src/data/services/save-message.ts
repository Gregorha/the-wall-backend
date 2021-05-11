import { InvalidMessageError } from '@/domain/errors';
import { SaveMessage } from '@/domain/usecases/save-message/save-message';
import { SaveMessageResponse } from '@/domain/usecases/save-message/save-message-response';
import { left, right } from '@/shared/either';
import { NotAuthorizedError, UnexpectedError } from '@/shared/errors';
import { SaveMessageRepository } from '../interfaces/save-message-repository';
import { MessageModel } from '../models';
import { NewMessageModel } from '../models';

export class SaveMessageService implements SaveMessage {
  //REPOSITORY SÃO ADAPTERS FOCADOS NO BANCO DE DADOS. VÃO ADAPTAR OS DADOS DA API PARA OS DADOS DO DATA LAYER
  //AQUI TEMOS QUE COLOCAR AS REGRAS DE NEGÓCIO, COMO POR EXEMPLO CRIPTOGRAFAR UMA SENHA ANTES DE SALVAR NO BANCO.

  constructor(private readonly saveMessageRepository: SaveMessageRepository) {}
  async save(newMessageData: NewMessageModel): Promise<SaveMessageResponse> {
    try {
      if (!newMessageData.isAuthenticated) {
        return left(new NotAuthorizedError());
      }
      const { authorName, body, date, id, title } = newMessageData.message;

      const invalidFields = [];
      if (body.length < 6) {
        invalidFields.push('body');
      }
      if (title.length < 6) {
        invalidFields.push('title');
      }
      if (!authorName) {
        invalidFields.push('authorName');
      }
      if (!id) {
        invalidFields.push('id');
      }
      if (!date) {
        invalidFields.push('date');
      }

      if (invalidFields.length > 0) {
        return left(new InvalidMessageError(invalidFields));
      }
      await this.saveMessageRepository.saveMessage(newMessageData);

      return right(undefined);
    } catch (err) {
      return left(new UnexpectedError(err, 'SaveMessageService'));
    }
  }
}
