const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
var Schema = mongoose.Schema


Contactschema = new Schema({
    name: {
      type: String,
      unique: false,
      required: true,
      trim: true
    },
    surname: {
      type: String,
      required: true,
      trim: false
    },
    mail: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: false,
      unique: false
    }
})



const ContactMessages = mongoose.model('ContactMessages', Contactschema)

module.exports = ContactMessages
