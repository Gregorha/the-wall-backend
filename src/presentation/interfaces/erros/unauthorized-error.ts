export class NotAuthorizedError extends Error {
  constructor() {
    super('Not Authorized');
  }
  type = 'NotAuthorizedError';
}
