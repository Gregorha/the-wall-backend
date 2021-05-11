import { LoadMessagesService } from '@/data/services';
import { FakeMessageRepository } from '@/infra/fake/repositories/fake-message';
import { LoadMessagesController } from '@/presentation/controllers/load-messages';

const makeLoadMessageController = () => {
  const repo = new FakeMessageRepository();
  //O Service precisa receber um Repository
  const loader = new LoadMessagesService(repo);
  //O controller precisa receber um caso de uso
  const controller = new LoadMessagesController(loader);
  return controller;
};

export default makeLoadMessageController;
