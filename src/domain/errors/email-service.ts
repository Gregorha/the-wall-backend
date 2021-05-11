export class EmailServiceError extends Error {
    constructor() {
      super(`The email service is unavailable.`);
    }
  }