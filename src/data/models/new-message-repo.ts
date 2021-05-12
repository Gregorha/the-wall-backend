import { NewMessageModel } from './new-message';

export interface NewMessageRepo extends NewMessageModel {
  date: number;
}
