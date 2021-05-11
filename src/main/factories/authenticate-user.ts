import { AuthenticaUserService } from '@/data/services';
import { FakeUserRepository } from '@/infra/fake/repositories/fake-user-repository';
import { AuthenticateUserController } from '@/presentation/controllers/authenticate-user';
import { encryptCompare } from '../adapters/encrypt';
import { tokenGenerator } from '../adapters/jwt';

const makeAuthenticateUserController = () => {
  const repo = new FakeUserRepository();
  const loader = new AuthenticaUserService(
    repo,
    encryptCompare,
    tokenGenerator
  );
  const controller = new AuthenticateUserController(loader);
  return controller;
};

export default makeAuthenticateUserController;
