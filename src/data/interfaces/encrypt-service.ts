export interface Encrypt {
  (password: string): Promise<string>;
}
export interface EncryptCompare {
  (inputPassword: string, password: string): Promise<boolean>;
}
