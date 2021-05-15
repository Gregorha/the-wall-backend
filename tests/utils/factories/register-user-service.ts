import { RegisterUserService } from '@/data/services';
import { PGRegisterUserRepository } from '@/infra/postgres/repositories/register-user';
import { encryptHash } from '@/main/adapters/encrypt';

const registerUserRepo = new PGRegisterUserRepository();
export const registerUserService = new RegisterUserService(
  registerUserRepo,
  encryptHash
);