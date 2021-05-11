import { Message } from '@/domain/entities/message';

export interface LoadMessagesUseCase {
  load: () => Promise<Message[]>;
}
