import { RegisterUserResponse } from './register-user-response';
import { User } from '@/domain/entities';

export interface RegisterUserUseCase {
  registerUser: (user: User) => Promise<RegisterUserResponse>;
}
