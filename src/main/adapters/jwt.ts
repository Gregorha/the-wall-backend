import { TokenGenerator } from '@/data/interfaces/token-service';
import jwt from 'jsonwebtoken';
import env from '@/main/config/env';
import { TokenVerify } from '@/data/interfaces/token-verify';

export const tokenGenerator: TokenGenerator = (id: string) => {
  const token = jwt.sign({ userId: id }, env.secret, { expiresIn: '1d' });
  return token;
};

export const tokenVerify: TokenVerify = (token: string) => {
  try {
    const splitToken = token.split(' ');
    if (splitToken.length !== 2) {
      throw new Error('Token Error');
    }
    const decoded = jwt.verify(splitToken[1], env.secret);

    return (<any>decoded).userId;
  } catch (e) {
    console.error('Error while verifying user token', e);
  }
};
