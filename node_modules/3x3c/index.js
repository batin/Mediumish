var async = require('async');
var exec = require('child_process').exec;
var updateNotifier = require('update-notifier');
var pkg = require('./package.json');
updateNotifier({pkg}).notify();

module.exports = function(command) {
  return new Promise(function (resolve, reject) {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(stdout);
    });
  });
};
