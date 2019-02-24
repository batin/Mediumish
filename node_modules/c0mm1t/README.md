# Installing
```
sudo npm i c0mm1t --save
```

# Using
```
var C = require('c0mm1t');

C({message:'Bug fixes', new: true})
  .then(function (value) {console.log(value);})
  .catch(function (err) {console.log(err);})
```
