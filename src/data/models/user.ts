import { User } from '@/domain/entities';

export type UserModel = Pick<User, 'email' | 'password' | 'name'>;
