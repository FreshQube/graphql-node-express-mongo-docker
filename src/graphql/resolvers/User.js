'use strict'

const User = require('../../models/User')

class UserController {
    constructor(model) {
        this.model = User
    }

    // Find all the User records
    getAll() {
        return this.model.find()
            .sort('created_at')
            .exec()
            .then( records => {
                return records
            })
            .catch( error => {
                return error
            })
    }

    //Find one User record by Id
    getById(options) {
        return this.model.findOne({ _id: options.id })
            .exec()
            .then( records => {
                return records
            })
            .catch( error => {
                return error
            })
    }

    //Create new User
    create(data) {
        const record = new this.model(data)
        return record.save()
            .then( (record) => {
                return record
            })
            .catch( (error) => {
                return error
            })
     }

     //Update the existing User record by Id
     update(data) {

         return this.model.findOne({ _id: data.id })
            .exec()
            .then( (record) => {
                //console.log(record)
                Object.keys(data).map( field => {
                    record[field] = data[field]
                })
                return record.save()
                    .then( updated => {
                        return updated
                    })
                    .catch( error => {
                        return error
                    })
            })
            .catch( (error) => {
                return error
            })
     }

     //delete the User record by Id
     delete( options ) {
         return this.model.findById( options.id )
            .exec()
            .then ( record => {
                record.remove()
                return { status: true }
            })
            .catch( error => {
                return error
            })
     }
}

const user_controller = new UserController()
module.exports = user_controller