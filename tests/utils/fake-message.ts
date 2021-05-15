import faker from 'faker';

import { saveMessageService } from '../utils/factories';

export class FakeMessage {
  constructor(private readonly userId: number) {}
  body = faker.lorem.paragraph();
  title = faker.lorem.words(2);
  saveMessage = async () => {
    await saveMessageService.save({
      userId: String(this.userId),
      message: { body: this.body, title: this.title },
    });
  };
}
