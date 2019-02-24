var async = require('async');
var E = require('3x3c');
var m4g1c = require('m4g1c');
var B = require('br4nch');
var I = require('1n1t');
var colors = require('colors');
var updateNotifier = require('update-notifier');
var pkg = require('./package.json');
var emoji = require('node-emoji');
updateNotifier({pkg}).notify();


// Fix func.
function fix(text) {
  if (text.indexOf('flag') !== -1) {
    var newEmoji = emoji.random();
    return fix(newEmoji.key);
  } else {
    return text;
  }
}

function log(message) {
  console.log(emoji.emojify(':zap:'), colors.cyan(message));
}

function errorLog(message) {
  console.log(emoji.emojify(':shit:'), colors.red(message));
}

function add(obj, callback) {
  E('git add .')
    .then((output) => {
      callback(null, obj);
    }).catch((err) => {
      errorLog(err);
      callback(err, null);
    })
}

function commit(obj, callback) {
  m4g1c(obj.message, false)
    .then((emojis) => {
      // var randomEmoji = emoji.random();
      // var pretext = ':' + fix(randomEmoji.key) + ':';
      var text = `${emoji.emojify(emojis)}  ${emoji.emojify(obj.message.trim())}`;
      log(`Your awesome commit message: ${colors.green(text.trim())}`)
      E(`git commit -m "${text}"`)
        .then((output) => {
          callback(null, obj);
        })
        .catch((err) => {errorLog(err);callback(err, null);})
    })
    .catch((err) => {errorLog(err);callback(err, null);})
}

function getCurrentBranch(obj, callback) {
  if (obj.new) {
    var objWithBranch = {
      obj : obj,
      branch: 'master'
    }
    callback(null, objWithBranch)
  } else {
    B()
      .then((branch) => {
        var objWithBranch = {
          obj : obj,
          branch: branch.trim()
        }
         callback(null, objWithBranch)
      })
      .catch((err) => {errorLog(err);callback(err);})
   }
}

function push(obj, callback) {
  var origin;
  E('git remote show')
    .then((value) => {
      origin = value.trim();
      origin = origin.split('\n')[0];
      if (obj.obj.new) {
        log(`You are pushing as: master`)
        var cmd = `git push ${origin.trim()} -u master`;
      } else {
        log(`You are pushing as: ${colors.green(obj.branch.trim())}`);
        var cmd = `git push ${origin.trim()} ${obj.branch.trim()}`;
      }
      E(cmd)
        .then((output) => {callback(null, obj.branch)})
        .catch((err) => {errorLog(err);callback(err, null);})
    })
    .catch((err) => {callback(err, null);})

}

module.exports = function (obj) {
 return new Promise(function(resolve, reject) {
   var remote = async.compose(push, getCurrentBranch, commit, add);
   remote(obj, function (err, res) {
     if (err) {
       reject(err);
      if (!obj.live) { // Live when err.
        process.exit();
      }
     }
     resolve(res);
   })
 });
}
