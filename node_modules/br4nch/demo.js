var B = require('./index');

B()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {console.log(err);})
