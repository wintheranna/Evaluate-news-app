const request = require('supertest');
const app = require('./index');

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the root path', () => {
    it('It should get root path',async() => {
        const response = await request(app)
        .get('/');
        expect(response.statusCode).toBe(200);
    });
});
