'use strict'

const mongoose = require('mongoose')

mongoose.Promise = require('bluebird')
const bcrypt = require('bcrypt-nodejs')

const hashPassword = (password) => {
    let salt = bcrypt.genSaltSync()
    let hash = bcrypt.hashSync(password, salt)

    return hash
}

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String
        },
        status: {
            type: Number,
            default: 1
        }
    },
    {
        timestamps: { createAt: 'created_at', updatedAt: 'updated_at' },
        collection: 'users'
    }
)

UserSchema.methods.comparePassword = (passwrod) => {
    if(! this.password) { return false }
    return bcrypt.compareSync( passwrod, this.password )
}

UserSchema.pre('save', (next) => {
    //check if password is present & modified
    if( this.password && this.isModified('password') ) {
        this.password = hashPassword(this.password)
    }
    next()
})

module.exports = mongoose.model( 'User', UserSchema)