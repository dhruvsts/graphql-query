// here is where we make databasse calls
const { users } = require("../FakeData");

const resolvers = {
    Query: {
        getAllUsers(){
            return users;
        },
    },
    Mutation: {
        createUser(parents, args){
            const newUser = args;
            users.push(newUser);
            return newUser;
        }
    }
};

module.exports = { resolvers };