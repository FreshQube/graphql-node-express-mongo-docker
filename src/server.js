'use strict'

const express = require('express')

const port = require('./config/config').PORT
const server = express()

//default API route - REST
server.use('/', (req, res) => {
    res.json({
        code: 200,
        message: 'Hello from Node-Express API Server, running on docker'
    })
})

server.listen(port, () => {
    console.log(`Server running at: ${port}`)
})