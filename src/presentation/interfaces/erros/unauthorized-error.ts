export class NotAuthorizedError extends Error {
  constructor() {
    super('Not Authorized');
  }
  type = 'notAuthorizedError';
}
