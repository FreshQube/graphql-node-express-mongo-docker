'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const expressGraphQL = require('express-graphql')


//Local configuration for port, database start
const port = require('./config/config').PORT
const StartDb = require('./config/StartDb')

//Schema for GraphQL end point
const GraphQLSchema = require('./graphql')

//init the server from express
const server = express()

//set Cors, url/body parsing settings
server.use( cors({ optionsSuccessStatus: 200 }) )
server.use( bodyParser.json({ limit: '50mb' }) )
server.use( bodyParser.urlencoded({ limit: '50mb', extended: true }) )

//GraphQL end point
server.use('/graphql', expressGraphQL( () => {
    return {
        graphiql: true,
        schema: GraphQLSchema
    }
}))


//default API route - REST
server.use('/', (req, res) => {
    res.json({
        code: 200,
        message: 'Hello from Node-Express API Server, running on docker'
    })
})

//start n connect to mongoDB from mLab
StartDb()

server.listen(port, () => {
    console.log(`Server running at: ${port}`)
})