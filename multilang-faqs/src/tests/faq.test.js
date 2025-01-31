const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

afterAll(async () => {
    await mongoose.connection.close();
});

describe('GET /api/faqs', () => {
    it('should return FAQs', async () => {
        const res = await request(app).get('/api/faqs');
        expect(res.statusCode).toBe(200);
    });
});
