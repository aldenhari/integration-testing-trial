const supertest = require("supertest");

const api = supertest(process.env.BASE_URL);
const path = '/v1/users';

const createUser = payload => api.post(path)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
const updateUserById = (userId,payload) => {
    payload.id=userId;
    return api.put(path)
    .send(payload)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
}

const getAllUsers = (name) => api.get(path)
    .query({ name })
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
const getUserById = (userId) => api.get(path+`/${userId}`)
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
const deleteUserById = (userId) => api.delete(path+`/${userId}`)
const deleteAllUsers = () => api.delete(path+'/removeAll')
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json')

module.exports = {
    createUser,
    updateUserById,
    getAllUsers,
    getUserById,
    deleteUserById,
    deleteAllUsers
}                            