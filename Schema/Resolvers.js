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
        updateUser( root, args, context){
        const use = users.find(o => o.id == args.id);
        console.log(use);
        if (!use) {
          throw new Error(`Couldn't find employee with id ${args.id}`);
        }
        if (args.name !== undefined) {
            use.name = args.name; 
        }
        if (args.id !== undefined) {
            use.id = args.id; 
        }
        if (args.married !== undefined) {
            use.married = args.married; 
        }
      return use;
      },
    
    //   deleteUser(parent, args, context, info)
    //   {
    //     if (users.hasOwnProperty(args.id))
    //     {
    //     const use = users.filter(a => a.is != args.id)
    //     console.log(use);
    //     return use;
    //     }
    //     else {
    //       throw new Error(`Couldn't find employee with id ${args.id}`);
    //     }
    //   },
    deleteUser: (parent, args) => {
        const id = args.id;
        _.remove(users, (user) => user.id === Number(id));
        return null;
      },
    }
    
};

module.exports = { resolvers };