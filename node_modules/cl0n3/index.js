var async = require('async');
var E = require('3x3c');
var inquirer = require('inquirer');
var isGitUrl = require('is-git-url');
var colors = require('colors');

module.exports.cli = function (object) {
  return new Promise(function(resolve, reject) {
      var questions = [
        {
          type: 'input',
          name: 'url',
          message: 'What\'s your git repository url?',
          validate: function (value) {
            if (isGitUrl(value)) {
              return true;
            }
            return 'Please enter a git url.';
          }
        },
        {
          type: 'input',
          name: 'name',
          message: 'Which name you prefer for cloned repository directory name? (Optional)'
        },
      ];
      inquirer.prompt(questions).then(function (answers) {
        answers.name ? answers.name: answers.name = answers.url.split('.git')[0].split('/').pop(-1);
        E(`git clone ${answers.url} ${answers.name} && cd ${answers.name}`)
            .then((value) => {resolve(answers)})
            .catch((err) => {reject(err)});
      });
  });
}

module.exports.programmatic = function (object) {
  return new Promise(function(resolve, reject) {
    if (!isGitUrl(object.url)) {
      reject(colors.red('Please write valid git url.'))
    } else {
      object.name ? object.name: object.name = object.url.split('.git')[0].split('/').pop(-1);
      E(`git clone ${object.url} ${object.name} && cd ${object.name}`)
          .then((value) => {resolve(colors.green('Clone done!'))})
          .catch((err) => {reject(err)});
    }
  });
}
