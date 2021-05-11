import { User } from '@/domain/entities';

// Serve para a camada de infraestrutura não ter conhecimento do domínio nas interfaces.
// Se, por algum motivo a resposta do repositorie ficar diferente da entidade no domínio, podemos alterar aqui.
export type UserModel = User;
