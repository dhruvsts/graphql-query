const { gql } = require("apollo-server-express");

const typeDefs = gql`
    
    scalar Date

    type User{
        name: String!
        age: Int!
        married: Boolean!
        bod: Date
    }
   
    # Quries 
    type Query{
        #will return the list of users
        getAllUsers: [User!]!
        # filter: { {age: between: {min: 10, max: 20}} 
        
    }

    # Mutations
    type Mutation{
        createUser(name: String!, age: Int!, married: Boolean!): User!
    }
`;

// exporting typedefs
module.exports = { typeDefs }