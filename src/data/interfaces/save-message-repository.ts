import { NewMessageData } from '@/domain/entities';

export interface SaveMessageRepository {
  saveMessage: (message: NewMessageData) => Promise<void>;
}
