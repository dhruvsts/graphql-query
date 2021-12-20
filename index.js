const { ApolloServer } = require("apollo-server-express"); //imported apolloserver
//importing typedefs
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");

//basic config for express server
const express = require("express");
// const app = express;


// var server and set it to new instance of apollo server
//typedef => we have to determine the type of data & also need all functions we execute which is known as mutation
//resolvers =>  functions called when we make request to that typedefs

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();
    server.applyMiddleware({ app });
    
    app.listen({port: 3001}, () => {
    console.log(`Server is listening on port 3001`);
})
}

startApolloServer(typeDefs, resolvers);