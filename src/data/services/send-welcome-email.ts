import { User } from '@/domain/entities';
import { EmailServiceError } from '@/domain/errors';
import { SendWelcomeEmailUseCase, SendEmailResponse } from '@/domain/usecases';
import { Either, left, right } from '@/shared/either';
import { Console } from 'console';
import { EmailOptions, EmailService } from '../interfaces/email-service';

export class SendWelcomeEmailService implements SendWelcomeEmailUseCase {
  constructor(
    private readonly mailService: EmailService,
    private readonly mailOptions: EmailOptions
  ) {}

  async sendWelcomeEmail(userData: User): Promise<SendEmailResponse> {
    const greetings = 'Hello <b>' + userData.name + '</b>, how are you doing?';
    const customizedHtml = greetings + '<br> <br>' + this.mailOptions.html;
    const options = {
      port: this.mailOptions.port,
      host: this.mailOptions.host,
      username: process.env.EMAIL || '',
      password: process.env.PASSWORD || '',
      from: this.mailOptions.from,
      to: userData.name + '<' + userData.email + '>',
      subject: this.mailOptions.subject,
      text: this.mailOptions.text,
      html: customizedHtml,
    };
    const sent: Either<EmailServiceError, void> = await this.mailService.send(
      options
    );
    if (sent.isLeft()) {
      return left(new EmailServiceError());
    }
    return right(undefined);
  }
}
