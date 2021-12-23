// here is where we make databasse calls
const { users } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
    Query: {
        getAllUsers(){
            return users;
        }
    },
    Mutation: {
        createUser(parents, args){
            const newUser = args;
            users.push(newUser);
            return newUser;
        },
        
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(users, (user) => user.id === Number(id));
            return null;
        },

        updateUser( root, args, context)
        {
          const use = users.find(o => o.id == args.id);
          console.log(use);
          if (!use) {
            throw new Error(`Can't find employee no ${args.id}`);
          }
          if (args.name !== undefined) {
            use.name = args.name; 
          }
          if (args.married !== undefined) {
            use.married = args.married; 
          }
          
        return use;
        },
    }
    
};

module.exports = { resolvers };