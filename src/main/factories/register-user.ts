import { RegisterUserService } from '@/data/services';
import { SendWelcomeEmailService } from '@/data/services/send-welcome-email';
import { PGRegisterUserRepository } from '@/infra/postgres/repositories/register-user';
import { RegisterUserController } from '@/presentation/controllers/register-user';
import { encryptHash } from '../adapters/encrypt';
import { NodemailerEmailService } from '../adapters/nodemailer-service';
import env from '../config/env';

const makeRegisterUserController = () => {
  const nodeEmailService = new NodemailerEmailService();
  const sendEmail = new SendWelcomeEmailService(
    nodeEmailService,
    env.mailOptions
  );

  const repo = new PGRegisterUserRepository();
  const loader = new RegisterUserService(repo, encryptHash);
  const controller = new RegisterUserController(loader, sendEmail);
  return controller;
};

export default makeRegisterUserController;
