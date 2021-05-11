import { Router } from 'express';
import { adaptExpressRoute } from '../adapters/express-router';
import makeRegisterUserController from '../factories/register-user';

export default (router: Router): void => {
  router.post('/users', adaptExpressRoute(makeRegisterUserController()));
};
