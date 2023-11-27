const request = require('supertest');
const { app, server } = require('../server');

describe('Server Tests', () => {
  test('responds with status code 200', async () => {
    await request(app)
      .get('/')
      .expect(200);
  });

  afterAll((done) => {
    server.close(done);
  });
});