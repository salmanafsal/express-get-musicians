// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");






describe('GET /musicians', () => {
    // Write your tests here
    
    test("Testing musicians endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians");
        expect(response.statusCode).toBe(200);

        const responseData = JSON.parse(response.text);
    });

    test("Testing musicians endpoint", async () => {
        // Sends request to `/bakedGoods` endpoint
        const response = await request(app).get("/musicians/:id");
        expect(response.statusCode).toBe(200);
        const responseData = JSON.parse(response.text);
    });



    
});
