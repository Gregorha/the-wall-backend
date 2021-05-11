export class UserNotFoundError extends Error {
  constructor(email: string) {
    super(
      `It was not possible to found an account associated with this email: ${email}`
    );
  }
  type = 'userNotFoundError';
}
