import { EmailOptions, EmailService } from '@/data/interfaces/email-service';
import { EmailServiceError } from '@/domain/errors';
import * as nodemailer from 'nodemailer';
import { Either, left, right } from '../../shared/either';

export class NodemailerEmailService implements EmailService {
  async send(options: EmailOptions): Promise<Either<EmailServiceError, void>> {
    try {
      const transporter = nodemailer.createTransport({
        host: options.host,
        port: options.port,
        secure: false,
        auth: {
          user: options.username,
          pass: options.password,
        },
      });
      await transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });
    } catch (error) {
      console.log(error);
      return left(new EmailServiceError());
    }
    return right(undefined);
  }
}
