const request = require('supertest');
const app = require('../../server/index');

describe('Testing the /test path', () => {
    test('Should get /test path', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
});


describe('Testing the /save path', () => {
    test('Should get the /save path', async () => {
        const response = await request(app).post('/save');
        expect(response.statusCode).toBe(200);
    });
});
