var C = require('./index');

C()
  .then((value) => {console.log(value);})
  .catch((err) => {console.log(err);})
