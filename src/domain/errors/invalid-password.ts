export class InvalidPasswordError extends Error {
  constructor() {
    super(`The password is invalid.`);
  }
  type = 'invalidPasswordError';
}
