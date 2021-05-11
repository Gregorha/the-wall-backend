import { EmailServiceError } from '@/domain/errors';
import { Either } from '../../shared/either';

export interface EmailOptions {
  readonly host: string;
  readonly port: number;
  readonly username: string;
  readonly password: string;
  readonly from: string;
  readonly to: string;
  readonly subject: string;
  readonly text: string;
  readonly html: string;
}

export interface EmailService {
  send: (options: EmailOptions) => Promise<Either<EmailServiceError, void>>;
}
