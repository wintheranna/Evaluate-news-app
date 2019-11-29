const request = require('supertest');
const app = require('../../server/index');


describe('Testing the test path', () => {
    test('Should get test path', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
});


describe('Testing the API path', () => {
    test('Should get API path', async () => {
        const response = await request(app).get('/api');
        expect(response.statusCode).toBe(200);
    });
});
