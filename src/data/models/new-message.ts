import { Message, NewMessageData } from '@/domain/entities';

export interface MessageModel extends Omit<Message, 'date'> {
  date: number;
}
export interface NewMessageModel extends Omit<NewMessageData, 'message'> {
  message: MessageModel;
}