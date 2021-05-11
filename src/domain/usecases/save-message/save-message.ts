import { Message } from '@/domain/entities/message';
import { NewMessageData } from '@/domain/entities/new-message-data';
import { SaveMessageResponse } from './save-message-response';

export interface SaveMessage {
  save: (message: NewMessageData) => Promise<SaveMessageResponse>;
}
