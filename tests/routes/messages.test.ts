import app from '@/main/config/app';
import request from 'supertest';
import { FakeMessage } from '../utils/fake-message';
import { FakeUser } from '../utils/fake-user';

describe('Messages Routes', () => {
  describe('GET /messages', () => {
    test('Should return 200 on load messages', async () => {
      await request(app).get('/api/messages').expect(200);
    });

    test('Should return an array of messages', async () => {
      const req = await request(app).get('/api/messages');
      expect(req.body).toBeInstanceOf(Array);
      expect(req.body[0]).toEqual(
        expect.objectContaining({
          authorName: expect.any(String),
          date: expect.any(String),
          title: expect.any(String),
          body: expect.any(String),
          id: expect.any(Number),
        })
      );
    });
  });
  describe('POST /messages', () => {
    test('Should return 401 on add survey without accessToken', async () => {
      await request(app)
        .post('/api/messages')
        .send({
          message: {
            title: 'Testing Title',
            body: 'Testing body text',
          },
        })
        .expect(401);
    });

    test('Should return 204 on add survey with valid accesToken', async () => {
      const user = new FakeUser();
      await user.registerUser();
      const authData = await user.authenticateUser();
      const message = new FakeMessage(Number(authData?.userId));
      await request(app)
        .post('/api/messages')
        .set('Authorization', `Bearer ${authData?.token}`)
        .send({
          message: {
            title: message.title,
            body: message.body,
          },
        })
        .expect(204);
    });
  });
});
