var B = require('br4nch');
var E = require('3x3c');
var emoji = require('node-emoji');
var colors = require('colors');
var async = require('async');
var prompt = require('prompt');
var updateNotifier = require('update-notifier');
var pkg = require('./package.json');
var spawn = require( "spawnback" );
var inquirer = require('inquirer');
updateNotifier({pkg}).notify();


module.exports = function C() {
 return new Promise(function(resolve, reject) {
        E(`git config user.name`) // Be sure your git.config.username equal your github username
         .then((username) => {
           var questions = [
             {
               type: 'confirm',
               name: 'isPrivate',
               message: 'private?',
               default: false
             },
              {
                type: 'input',
                name: 'repo',
                message: 'repository name?',
                validate: function (value) {
                  value = value.trim();
                  if (value.length > 0) {
                    return true;
                  }
                  return 'Please enter a name';
                }
              },
              {
                type: 'input',
                name: 'username',
                message: 'github username?',
                default: username.trim(),
                validate: function (value) {
                  value = value.trim();
                  if (value.length > 0) {
                    return true;
                  }
                  return 'Please enter a name';
                }
              },
              {
                type: 'password',
                message: 'Enter your git password',
                name: 'password',
                validate: function (value) {
                  value = value.trim();
                  if (value.length > 0) {
                    return true;
                  }
                  return 'Please enter a password';
                }
              }
            ];
            inquirer.prompt(questions).then(function (answers) {

              E(`curl -u '${answers.username.trim()}:${answers.password.trim()}' https://api.github.com/user/repos -d '{"name":"${answers.repo.trim()}","description":"${answers.repo.trim()} created automatically.","private":"${answers.isPrivate}"}'`)
                .then((stdout) => {
                  if (JSON.parse(stdout).clone_url === undefined) {
                    reject(colors.red(`${JSON.parse(stdout).message},\n Please check your github credentials.`));
                  } else {
                    var res = {
                      ssh_url,
                      clone_url,
                      description
                    } = JSON.parse(stdout);
                    resolve(res);
                  }
                })

            });
         })
         .catch((err) => {reject(err)})
  });
}
