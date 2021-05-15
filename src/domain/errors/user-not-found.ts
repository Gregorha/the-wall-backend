export class UserNotFoundError extends Error {
  constructor(emailOrId: string, isId: boolean = false) {
    super(
      isId
        ? 'User not found'
        : `It was not possible to found an account associated with this email: ${emailOrId}`
    );
  }
  type = 'userNotFoundError';
}
