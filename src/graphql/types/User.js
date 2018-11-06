'use strict'

const graphql = require('graphql')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = graphql

const UserType = new GraphQLObjectType({
    name: 'User',
    description: 'User type for managing users of app',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'ID of the user, Generated automatically by MongoDB',
        },
        name: {
            type: GraphQLString,
            description: 'Full name of the user',
        },
        email: {
            type: GraphQLString,
            description: 'Email address of the user, must be valid and unique',
        },

        status: {
            type: GraphQLInt,
            description: 'Status of the user, whether active or disabled',
        },
        created_at: {
            type: GraphQLString,
            description: 'Date and time when this users account was created',
        },
        updated_at: {
            type: GraphQLString,
            description: 'Date and time when this users account was last updated',
        }
    })
})

module.exports = UserType