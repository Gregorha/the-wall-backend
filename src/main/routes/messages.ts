import { Router } from 'express';
import makeLoadMessagesController from '@/main/factories/load-messages';
import { adaptExpressRoute } from '../adapters/express-router';
import { adaptMiddleware } from '../adapters/express-middleware';
import makeAuthMiddleware from '../factories/auth-middleware';
import makeSaveMessageController from '../factories/save-message';

export default (router: Router): void => {
  const auth = adaptMiddleware(makeAuthMiddleware());
  router.get('/messages', adaptExpressRoute(makeLoadMessagesController()));
  router.post(
    '/messages',
    auth,
    adaptExpressRoute(makeSaveMessageController())
  );
};
