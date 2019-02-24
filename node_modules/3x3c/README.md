# Installing

```
sudo npm i 3x3c --save
```

# Usage Example

```
var E = require('3x3c');

E(`git add . && git commit -m "Hi dude!" && git push origin master`)
  .then((value) => {console.log(value);})
  .catch((err) => {console.log(err);})

```
