import { AuthenticaUserService } from '@/data/services';
import { PGUserRepository } from '@/infra/postgres/repositories/user-repository';
import { encryptCompare } from '@/main/adapters/encrypt';
import { tokenGenerator } from '@/main/adapters/jwt';

const userRepo = new PGUserRepository();
export const authenticateUserService = new AuthenticaUserService(
  userRepo,
  encryptCompare,
  tokenGenerator
);
