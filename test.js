const User = require('./models/user')

const email = 'batin@icloud.com'

// https://mongoosejs.com/docs/promises.html#queries-are-not-promises (promisify)

const fetch = email => {
  return new Promise((resolve, reject) => {
    User.findOne({ email }, (err, doc) => {
      if (err) {
        reject(err)
      } else {
        resolve(doc)
      }
    })
  })
}


fetch(email).then(console.log).catch(console.log)

// How can I promisify one callback..
// const query = User.findOne({ email }).exec()
// const user = await query.catch(_ => res.status(404).send('Something gone shit'))


// const run = async () => {
//   const user = await query.catch(console.log)
//   console.log(user)
// }
//
// run()

/*

*/
.
