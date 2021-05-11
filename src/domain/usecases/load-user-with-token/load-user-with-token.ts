import { LoadUserWithTokenResponse } from './load-user-with-token-response';

export interface LoadUserWithToken {
  loadUser: (accessToken: string) => Promise<LoadUserWithTokenResponse>;
}
