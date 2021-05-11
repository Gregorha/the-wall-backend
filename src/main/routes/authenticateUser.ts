import { Router } from 'express';
import { adaptExpressRoute } from '../adapters/express-router';
import makeAuthenticateUserController from '../factories/authenticate-user';

export default (router: Router): void => {
  router.post(
    '/sessions/new',
    adaptExpressRoute(makeAuthenticateUserController())
  );
};
