import { Message } from './message';

export type NewMessageData = {
  userId: string;
  message: Pick<Message, 'title' | 'body'>;
};
