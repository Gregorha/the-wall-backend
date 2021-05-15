import { LoadUserWithTokenService } from '@/data/services/load-user-by-token';
import { PGUserRepository } from '@/infra/postgres/repositories/user-repository';
import { AuthMiddleware } from '@/presentation/middleware/auth-middleware';
import { tokenVerify } from '../adapters/jwt';

const makeAuthMiddleware = () => {
  const repo = new PGUserRepository();
  const loadUserWithToken = new LoadUserWithTokenService(repo, tokenVerify);
  return new AuthMiddleware(loadUserWithToken);
};

export default makeAuthMiddleware;
