const request = require('supertest');
const app = require('./index');

describe('Testing the mockAPI test path', () => {
    it('Should get mockAPI test path',async() => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
});
