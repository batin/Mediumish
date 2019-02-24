const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
var Schema = mongoose.Schema;

var SubscribeSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    }/*,
    name: {
      type: String,
      required: true,
      trim: true
    },
    surname: {
      type: String,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: String,
      required: false,
      trim: true
    },
    keep: {
      type: Boolean

    }*/
})

/*var NonSubscribeSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    surname: {
      type: String,
      required: true,
      trim: true
    },
    phoneNumber: {
      type: String,
      required: false,
      trim: true
    },
    keep: {
      type: Boolean

    }
})
*/

let Subscriber = mongoose.model('Subscriber', SubscribeSchema)
/*let Nonsubscriber = mongoose.model('Nonsubscriber', NonSubscribeSchema)*/

module.exports = Subscriber/*{
  subscriberModel : Subscriber
  nonsubscriberModel : Nonsubscriber
}*/
