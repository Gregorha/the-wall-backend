import { Message } from './message';

export type NewMessageData = {
  userId: string;
  isAuthenticated: boolean;
  message: Message;
};
