export class UnexpectedError extends Error {
  constructor(error: Error, method: string) {
    super(`Unexpected error while executing ${method}, ${error.message}`);
  }
  type = 'unexpectedError';
}
