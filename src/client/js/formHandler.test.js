const request = require('supertest');
const app = require('../../server/index');

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the test path', () => {
    it('It should get test path',async() => {
        const response = await request(app)
        .get('/test');
        expect(response.statusCode).toBe(200);
    });
});

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the API path', () => {
    it('It should get API path',async() => {
        const response = await request(app)
        .get('/api');
        expect(response.statusCode).toBe(200);
    });
});
