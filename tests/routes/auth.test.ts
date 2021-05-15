import app from '@/main/config/app';
import request from 'supertest';
import { FakeUser } from '../utils/fake-user';

describe('Auth Routes', () => {
  describe('POST /sessions/new', () => {
    const user = new FakeUser();
    test('Should return 200, userId and token on valid user authentication', async () => {
      await user.registerUser();
      const req = await request(app).post('/api/sessions/new').send({
        email: user.email,
        password: user.password,
      });
      expect(req.statusCode).toBe(200);
      expect(req.body).toEqual(
        expect.objectContaining({
          userId: expect.any(String),
          token: expect.any(String),
        })
      );
    });
    test('Should return 400 on invalid password user authentication', async () => {
      const req = await request(app)
        .post('/api/sessions/new')
        .send({
          email: user.email,
          password: `${user.password}a`,
        });
      expect(req.statusCode).toBe(400);
      expect(req.body).toEqual('The password is invalid.');
    });
    test('Should return 400 on invalid email user authentication', async () => {
      const wrongEmail = `${user.email}a`;
      const req = await request(app)
        .post('/api/sessions/new')
        .send({
          email: wrongEmail,
          password: `${user.password}a`,
        });
      expect(req.statusCode).toBe(400);
      expect(req.body).toEqual(
        `It was not possible to found an account associated with this email: ${wrongEmail}`
      );
    });
  });
});
