import { Encrypt, EncryptCompare } from '@/data/interfaces';
import bcrypt from 'bcrypt';

export const encryptHash: Encrypt = async (password: string) => {
  const hash = await bcrypt.hash(password, 10);
  return hash;
};

export const encryptCompare: EncryptCompare = async (
  inputPassord,
  password
) => {
  return await bcrypt.compare(inputPassord, password);
};
