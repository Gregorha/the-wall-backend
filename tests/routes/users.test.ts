import app from '@/main/config/app';
import request from 'supertest';
import { FakeUser } from '../utils/fake-user';

describe('Users Routes', () => {
  describe('POST /users', () => {
    const fakeUser = new FakeUser();
    test('Should return 200 on user register', async () => {
      await request(app)
        .post('/api/users')
        .send({
          email: fakeUser.email,
          password: fakeUser.password,
          name: fakeUser.name,
        })
        .expect(200);
    });

    test('Should return 400 on register an existing user', async () => {
      const req = await request(app).post('/api/users').send({
        email: fakeUser.email,
        password: fakeUser.password,
        name: fakeUser.name,
      });
      expect(req.statusCode).toBe(400);
      expect(req.body).toBe(
        `The email ${fakeUser.email} is already registered`
      );
    });
  });
});
