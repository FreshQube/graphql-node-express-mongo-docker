## Boilerplate codebase for GraphQL API using Node, Expres, MongoDB with Docker environment

### Folder Structure
``` 
src
    - server.js
    graphql
    models
- package.json
- README.md
```

### Steps
 - npm init -y to start the node project
 - create README.md for all details
 - create basic folder structure to start basic node/express project
 - add express, babel dependencies
 - create express basic setup for running API
 - Dockerfile for running API with docker environment

 - Add MongoDB from mlab (more details follows)
 - Add graphql dependencies
 - Add models (Users, Tasks)


### Play with GraphQL queries, mutations

#### Create a New User
``` 
mutation {
  addUser(name: "adi1", email: "adi1@gmail.com", password:"adi12", status:1) {
    id
    name
    email
    status
  }
}
``` 

#### Get all Users
``` 
query {
  users {
    id
    name
    email
    status
  }
}
``` 

#### Get single User with id
``` 
query {
  user(id: "5be17ff01180f2527851c93d") {
    id
    name
    email
    status
  }
}
``` 

#### Update a User with name
``` 
mutation {
  addUser(id: "5be17ff01180f2527851c93d", name: "adi12") {
    id
    name
    email
    status
  }
}
``` 

#### Delete a User with id
``` 
mutation {
  addUser(id: "5be17ff01180f2527851c93d") {
  }
}
``` 
