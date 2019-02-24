const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
var Schema = mongoose.Schema
const Post = require('./post')

UserSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    firstName: {
      type: String,
      required: true,
      trim: false
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    userName: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: false,
      trim: true
    },
    posts: {
      type: Array,
      required: false,
      trim: false
    }
})


const User = mongoose.model('User', UserSchema)

module.exports = User
