export interface PGMessageModel {
  id: number;
  title: string;
  body: string;
  user_id: number;
  created_at: Date;
}

export interface PGMessageModelWithUser extends PGMessageModel {
  userName: string;
  userId: number;
}
