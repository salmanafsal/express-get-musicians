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
        const response = await request(app).get("/musicians/1");
        expect(response.statusCode).toBe(200);
        const responseData = response.body; // Automatically parsed JSON response
        expect(responseData).toHaveProperty("id", 1); // Example check, adjust as needed
        expect(responseData).toHaveProperty("name","Mick Jagger"); // Example check, adjust to actual musician properties
    });



    
});
