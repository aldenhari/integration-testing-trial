require('dotenv').config();
const userPage = require('../page/user_page');
const global = require('../common/global');
const { expect } = require('chai');


const scenario = {
    positive: {
        createUser: {
            title:"System will create user properly",
            data:{
                userPayload : {
                    id:null,
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
                }
            }
        },
        getUser: {
            title:"Listing all the user created",
            data:{
                users:[],
            }
        },
        clearningUpUsers:{
            title:"deleting all users in DB"
        },
        getUserById:{
            title:'get user info by id',
            data:{
                userPayload:null,
            }
        },
        updatingUser:{
            title:'updating user',
            data:{
                userPayload : {
                    "firstName": "ccccc",
                    "lastName": "zzzzz",
                    "age": 21,
                    "updatedDate": global.now
                }
            }
        },
        deleteUserById:{
            title:'update user by id',
        }
    },
    negative: {
    }
};

describe('create user and check for its validity',()=>{
    it(`${scenario.positive.createUser.title}`,async()=>{
        const response = await userPage.createUser(scenario.positive.createUser.data.userPayload);
        // console.log('[DEBUG] user created', response.body);
        scenario.positive.createUser.data.userPayload=response.body;
        expect(response.status).to.equal(200);
    });
    it(`${scenario.positive.getUser.title}`,async()=>{
        const response = await userPage.getAllUsers(scenario.positive.createUser.data.userPayload.firstName);
        // console.log('[DEBUG] users',response.body);
        scenario.positive.getUser.data.users=response.body.data;
        expect(response.status).to.equal(200);
    });
    it(`${scenario.positive.clearningUpUsers.title}`,async()=>{
        const response = await userPage.deleteAllUsers();
        expect(response.status).to.equal(200);
    });
});

describe('update user information and then delete it',()=>{
    it(`${scenario.positive.createUser.title}`,async()=>{
        const response = await userPage.createUser(scenario.positive.createUser.data.userPayload);
        // console.log('[DEBUG] user created', response.body);
        scenario.positive.createUser.data.userPayload=response.body;
        expect(response.status).to.equal(200);
    });
    it(`${scenario.positive.getUserById.title}`,async()=>{
        const response = await userPage.getUserById(scenario.positive.createUser.data.userPayload.id);
        scenario.positive.getUserById.data.userPayload=response.body;
        expect(response.status).to.equal(200);
    });
    it(`${scenario.positive.updatingUser.title}`,async()=>{
        const updatedData = Object.assign({},scenario.positive.getUserById.data.userPayload);
        Object.keys(scenario.positive.updatingUser.data.userPayload).map(item=>{
            updatedData[item]=scenario.positive.updatingUser.data.userPayload[item];
        });
        const response = await userPage.updateUserById(scenario.positive.createUser.data.userPayload.id,updatedData);
        expect(response.status).to.equal(200);
    });
    it(`${scenario.positive.deleteUserById.title}`,async()=>{
        const response = await userPage.deleteUserById(scenario.positive.createUser.data.userPayload.id);
        expect(response.status).to.equal(200);
    });
});