'use strict'

const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')
const dbUrl = require('./config').dbUrl

const init = () => {
    
    mongoose.connect(dbUrl, {
        useNewUrlParser: true
    })
    let db = mongoose.connection

    db.on('error', console.error.bind(console, 'Error connecting to database'))
    db.once('open', () => {
        console.log('Connected to MongoDB on mLab')
        
        //Call for seeding database, if needed
        
    })
}

module.exports = init