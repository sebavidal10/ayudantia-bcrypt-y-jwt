const request = require('supertest');
const server = require('../../server');

describe('Test auth endpoints', () => {
  /* credenciales correctas
   * name: 'tres'
   * password: 1234
   */

  it('should return 200 when login', async () => {
    const res = await request(server).post('/auth/login').send({
      name: 'tres',
      password: '1234',
    });

    expect(res.statusCode).toBe(200);
  });

  it('should return 500 when login with wrong password', async () => {
    const res = await request(server).post('/auth/login').send({
      name: 'tres',
      password: '12345',
    });

    expect(res.statusCode).toBe(500);
  });
});
