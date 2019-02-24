var init = require('./index');

init()
  .then((value) => {console.log(value);})
  .catch((err) => {console.log(err);})
