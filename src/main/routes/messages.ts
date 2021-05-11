import { Router } from 'express';
import makeLoadMessagesController from '@/main/factories/load-messages';
import { adaptExpressRoute } from '../adapters/express-router';
import { adaptMiddleware } from '../adapters/express-middleware';
import makeAuthMiddleware from '../factories/auth-middleware';

export default (router: Router): void => {
  const auth = adaptMiddleware(makeAuthMiddleware());
  router.get(
    '/messages',
    auth,
    adaptExpressRoute(makeLoadMessagesController())
  );
};
