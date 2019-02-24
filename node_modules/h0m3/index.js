var E = require('3x3c');
var async = require('async');

module.exports = function () {
  return new Promise(function(resolve, reject) {
    E('cd && pwd')
      .then((value) => {resolve(value.trim());})
      .catch((err) => {reject(err)})
  });
}
