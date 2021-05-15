import { SaveMessageService } from '@/data/services';
import { PGSaveMessageRepository } from '@/infra/postgres/repositories/save-message';
import { SaveMessageController } from '@/presentation/controllers';

const makeSaveMessageController = () => {
  const repo = new PGSaveMessageRepository();
  const saveMessage = new SaveMessageService(repo);
  const controller = new SaveMessageController(saveMessage);
  return controller;
};

export default makeSaveMessageController;