# graphql-query

install the following to run the program:
npm i express apollo-server-express graphql nodemon

run the following on apollo sandbox: 
//this it to get all users: 
{
  getAllUsers {
    id
    age
    name
    married
  }
}

//this is to create new user: 
mutation{
  createUser(id: 5, name: "Ernw", age: 5, married: false) {
    id
    name
    age
    married
  }
}

//this is to update a user via ID: 
mutation{
  updateUser(id: 3, name: "dhruv", married: false) {
    name
    married
  }
}

//delete user by ID:
mutation{
  deleteUser(id: 5) {
    id
  }
}
