'use strict'

const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLSchema
} = graphql

const UserQuery = require('./queries/User')
const UserMutation = require('./mutations/User')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: 'default query from backend',
    fields: {
        users: UserQuery.index(),
        user: UserQuery.single()
    }
})

const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    description: 'default mutation from backend',
    fields: {
        addUser: UserMutation.create(),
        updatedUser: UserMutation.update(),
        deleteUser: UserMutation.delete()
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})