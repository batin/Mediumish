const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require('./user')
var Schema = mongoose.Schema

PostSchema = new Schema({
  postTitle: {
    type: String,
    required: true,
    trim: false
  },
  postText: {
    type: String,
    required: true,
    trim: false
  },
  postTags: {
    type: String,
    required: true,
    trim: false
  },
  id: {
    type: String,
    required: true,
    trim: false
  },
  date: {
    type: Date
  }
})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
