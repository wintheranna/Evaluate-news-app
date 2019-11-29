const request = require('supertest');
const app = require('./index');

/* https://github.com/babel/babel/issues/5085 */
describe('Testing the mockAPI result', () => {
    it('Should get mockAPI JSON message',async() => {
        const message = 'this is a message';
        expect(json.message).toMatch(message);
    });
});
