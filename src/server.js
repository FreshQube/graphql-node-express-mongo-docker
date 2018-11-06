'use strict'

const express = require('express')

const StartDb = require('./config/StartDb')
const port = require('./config/config').PORT
const server = express()

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