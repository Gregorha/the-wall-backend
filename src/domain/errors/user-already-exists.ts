export class UserAlreadyExistsError extends Error {
  constructor(email: string) {
    super(`The email ${email} is already registered`);
  }
  type = 'userAlreadyExists';
}
