const supertest =require("supertest");
const { it } =require("mocha");
const chai = require("chai");

const expect = chai.expect;

const api = supertest('http://localhost:1234');
const path = '/v1/users';
const payload = {
    "id": "123123",
    "firstName": "aaaa",
    "lastName": "bbbb",
    "age": 20,
    "occupation": "Senior Writer",
    "nationality": "indonesia",
    "hobbies": [
        "1",
        "2"
    ],
    "gender": "MALE",
    "createdDate": "2021-09-12T04:53:38.699Z",
    "updatedDate": "2021-09-12T04:53:38.699Z"
};

function createUser(){
    return api.post(path)
        .send(payload)
        .set('Content-Type','application/json')
        .set('Accept','application/json')
}

describe('create user',()=>{
    it('As a System, I want to create new user',async()=>{
        const response = await createUser();
        expect(response.status).to.equal(200);
    });
});