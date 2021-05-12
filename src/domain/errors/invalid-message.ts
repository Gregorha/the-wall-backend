export class InvalidMessageError extends Error {
  constructor(fields: string[]) {
    super(`The following fields are not valid for message: ${fields}`);
  }
  type = 'invalidMessage';
}
