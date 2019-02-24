var cl0n3 = require('./index');

var obj = {
  url: 'https://github.com/cagataycali/cl0n3.git',
  name: 'name', // Optional.
};

cl0n3.cli()
  .then((value) => {console.log(value);})
  .catch((err) => {console.log(err);})

// cl0n3.programmatic(obj)
//   .then((value) => {console.log(value);})
//   .catch((err) => {console.log(err);})
