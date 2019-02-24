const pathExists = require('path-exists')

module.exports = function (path) {
  return new Promise((resolve, reject) => {
    pathExists(path).then(exists => exists ? resolve() : reject('Path is not exist.'))
  })
}
