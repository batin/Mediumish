var m4g1c = require('./index')
var emoji = require('node-emoji')

// Programmatical
m4g1c('init', false)
  .then((value) => {console.log(emoji.emojify(value))})
  .catch((err) => {console.log(err);})
