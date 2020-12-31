const request = require('supertest')
const db = require('../../../server/db')
const router = require('../../../server/index')
const { Ratings } = require('../../../server/db/models')


describe('api routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  });

  beforeEach(() => {
    return Ratings.create({
      movieId: 34584,
      thumbsUp: 4,
      thumbsDown: 1
    });
  });

  afterAll(async () => {
    return await db.close();
  });

  describe('GET /api/ratings route', () => {
    it('returns rating if DB contains an instance with requested movieId', async () => {
     const res = await request(router).get('/api/ratings/34584').expect(200);
     expect(res.body).toEqual({thumbsUp: 4, thumbsDown: 1});
    });

    it('returns null if DB does not contain an instance with requested movieId', async () => {
    const res = await request(router).get('/api/ratings/00000').expect(200);
    expect(res.body).toEqual(null);
    });
  }); 

  describe('POST /ratings/:id/up route', () => {
    it('returns ann instance of requested movieId with incremented thumbsUp attribute', async () => {
      const res = await request(router).post('/api/ratings/34584/up').expect(200);
      expect(res.body.thumbsUp).toBe(5);
      expect(res.body.thumbsDown).toBe(1);
    });
  });

  describe('POST /ratings/:id/down route', () => {
    it('returns an instance of requested movieId with incremented thumbsDown attribute', async () => {
      const res = await request(router).post('/api/ratings/34584/down').expect(200);
      expect(res.body.thumbsUp).toBe(4);
      expect(res.body.thumbsDown).toBe(2);
    });
  });
});
