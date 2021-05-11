import { AuthenticateUserResponse } from './authenticate-user-response';
import { LoginData } from '@/domain/entities';

export interface AuthenticateUserUseCase {
  auth: (loginData: LoginData) => Promise<AuthenticateUserResponse>;
}
