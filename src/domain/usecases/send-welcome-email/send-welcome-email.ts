import { SendEmailResponse } from './send-welcome-email-response';
import { User } from '@/domain/entities';

export interface SendWelcomeEmailUseCase {
  sendWelcomeEmail: (user: User) => Promise<SendEmailResponse>;
}
