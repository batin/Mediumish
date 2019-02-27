const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const User = require('./user')
var Schema = mongoose.Schema


PostSchema = new Schema({
  url: {
    type : String,
    required : true,
    trim: true

  },
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

PostSchema.index({postTitle: 'text'});
const Post = mongoose.model('Post', PostSchema)

module.exports = Post
