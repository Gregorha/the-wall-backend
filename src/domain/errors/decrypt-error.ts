export class DecryptError extends Error {
  constructor() {
    super(`Unable to decrypt token.`);
  }
  type = 'decryptError';
}
