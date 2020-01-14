// This test is for src/server/app.js

const request = require('supertest');
const app = require('../server/app');

describe('Test path "/"', () => {
    test('It should response 200 status code on GET request', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test path "/test"', () => {
    test('It should response 200 status code on GET request', async () => {
        const response = await request(app).get('/test');
        expect(response.statusCode).toBe(200);
    });
}); 