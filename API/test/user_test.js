require('dotenv').config();
const page = require('../page/user_page');
const global = require('../common/global');
const { expect } = require('chai');


const scenario = {
    positive: {
        createUser: "System will create user properly",
        createUserWithUniqueName: "User with name Joko will be created"
    },
    negative: {
        emptyGender: "Send request with empty Gender",
        invalidGender: "Send request with invalid gender",
    }
};

let payload = {
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
    "createdDate": global.now,
    "updatedDate": "2021-09-12T04:53:38.699Z"
};

  

// describe('create user',()=>{
//     it(`${scenario.positive.createUser}`,async()=>{
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(200);
//     });
//     it(`${scenario.positive.createUserWithUniqueName}`,async()=>{
//         payload.firstName="joko";
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(200);
//     });
//     it(`${scenario.negative.emptyGender}`,async()=>{
//         payload.gender=null;
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(400);
//     });
//     it(`${scenario.negative.invalidGender}`,async()=>{
//         payload.gender="UNKNOWN";
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(400);
//     });
// });

// describe('create user 2',()=>{
//     it(`${scenario.positive.createUser}`,async()=>{
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(200);
//     });
//     it(`${scenario.positive.createUserWithUniqueName}`,async()=>{
//         payload.firstName="joko";
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(200);
//     });
//     it(`${scenario.negative.emptyGender}`,async()=>{
//         payload.gender=null;
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(400);
//     });
//     it(`${scenario.negative.invalidGender}`,async()=>{
//         payload.gender="UNKNOWN";
//         const response = await page.createUser(payload);
//         expect(response.status).to.equal(400);
//     });
// });