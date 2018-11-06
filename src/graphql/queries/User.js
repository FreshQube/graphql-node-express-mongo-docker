'use strict'

const graphql = require('graphql')
const {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} = graphql

//import the User Type 
const UserType = require('../types/User')
//import the resolver
const UserResolver = require('../resolvers/User')

module.exports = {

    index() {
        return {
            type: new GraphQLList(UserType),
            description: 'Returns all the users',
            resolve(parent, args, context, info) {
                return UserResolver.getAll({})
            }
        }
    },

    single() {
        return {
            type: UserType,
            description: 'Returns single user by id',
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    description: 'Please enter user id'
                }
            },
            resolve(parent, args, context, info) {
                return UserResolver.getById({ id: args.id })
            }
        }
    }
}