import faker from 'faker';

import {
  authenticateUserService,
  registerUserService,
} from '../utils/factories';

export class FakeUser {
  email = faker.internet.email();
  name = faker.name.findName();
  password = faker.internet.password();
  registerUser = async () => {
    await registerUserService.registerUser({
      email: this.email,
      name: this.name,
      password: this.password,
    });
  };
  authenticateUser = async () => {
    const authData = await authenticateUserService.auth({
      email: this.email,
      password: this.password,
    });
    if (authData.isLeft()) {
      return;
    }
    return authData.value;
  };
}
