import { SaveMessageService } from '@/data/services';
import { FakeSaveMessageRepository } from '@/infra/fake/repositories/fake-save-message';
import { SaveMessageController } from '@/presentation/controllers';

const makeSaveMessageController = () => {
  const repo = new FakeSaveMessageRepository();
  const saveMessage = new SaveMessageService(repo);
  const controller = new SaveMessageController(saveMessage);
  return controller;
};

export default makeSaveMessageController;