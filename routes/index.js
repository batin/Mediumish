let express = require("express")
let router = express.Router()
let bodyParser = require("body-parser")
let Subscriber = require("../models/subscribe")
let User = require("../models/user")
let bcrypt = require("bcrypt")
const session = require("express-session")
const saltRounds = 10
const Post = require("../models/post")
/*
 *
 * returns sorted posts as a Json
 */
router.get("/scroll_json.js", async (req, res) => {
  if (req.session) {
    const id = req.session.userId
    const query = User.findOne({ _id: id })
      .sort("-date")
      .exec()
    const user = await query.catch(_ =>
      res.status(404).send("simting gini shit")
    )
    const orderedPosts = user.posts.reverse()
    res.send(orderedPosts)
  } else {
    res.redirect("profile")
  }
})
/*
 * renders profile with last three post
 */
router.get("/profile", async (req, res) => {
  const id = req.session.userId
  if (id) {
    const query = User.findOne({ _id: id }).exec()
    const user = await query.catch(_ =>
      res.status(404).send("simting gini shit")
    )

    res.render("profile", {
      name: user.firstName,
      surname: user.lastName,
      posts: user.posts.reverse().slice(0, 3),
      title: "Profile"
    })
  } else {
    res.redirect(301, "/login")
  }
})
/*
 * posts posts to db
 */
router.post("/profile", async (req, res, next) => {
  let { postTitle, postText, postTags } = req.body
  id = req.session.userId
  let user
  if (id) {
    const query = User.findOne({ _id: id }).exec()
    user = await query.catch(_ => res.status(404).send("simting gini shit"))
}
  let counter = 0
  let found = user.posts.forEach(post => {
    if(post.postTitle === postTitle) {
      counter ++
    }
   })
  let url =  user.userName +"-"+ postTitle +"-"+ (counter + 1)
  let date = Date.now()
  if (postTitle || postText || postTags) {
    let query = Post.create({
      url,
      postTitle,
      postText,
      postTags,
      id,
      date
    })
    post = await query.catch(err => res.send(err))
    let btn = user.posts.push(post) // post pushed users posts

    user.save(err => {
      // saved
      if (err) return next(err)
      console.log("Post added!")
    })

    res.render("success", {
      success: true, // post posted
      name: user.firstName,
      surname: user.lastName,
      posts: user.posts.reverse().slice(0, 3),
      title: "Profile"
    })
  } else {
    res.render("success", {
      success: false, // post couldn't posted
      name: user.firstName,
      surname: user.lastName,
      posts: user.posts.reverse().slice(0, 3),
      title: "Profile"
    })
  }
})

router.get("/login", (req, res) => {
  if (req.session.userId) {
    res.redirect(301, "/profile")
  } else {
    res.render("login", { title: "Log In" })
  }
})

router.get("/register", (req, res) => {
  if (req.session.userId) {
    res.redirect(301, "/profile")
  } else {
    res.render("register", { title: "Sign Up" })
  }
})

router.get("/loggedOut", (req, res, next) => {
  req.session.destroy(function(err) {
    if (err) {
      return next(err)
    } else {
      return res.redirect("/")
    }
  })
})

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    var err = "Email and Password can not be blank"
    res.render("login", { error: err })
  } else {
    // https://mongoosejs.com/docs/promises.html#queries-are-not-promises
    const query = User.findOne({ email }).exec()
    const user = await query.catch(_ =>
      res.status(404).send("Something gone shit")
    )
    if (user) {
      if (bcrypt.compareSync(password, user.password)) {
        req.session.userId = user._id
        res.redirect("/profile")
      } else {
        var err = "Wrong Password."
        res.render("login", { error: err })
      }
    } else {
      var err = "User Could Not Found"
      res.render("login", { error: err })
    }
  }
})

router.post("/register", async (req, res, next) => {
  let {
    firstName,
    lastName,
    userName,
    password,
    confirmPassword,
    email
  } = req.body

  if (
    firstName ||
    lastName ||
    userName ||
    password ||
    confirmPassword ||
    email
  ) {
    if (password !== confirmPassword) {
      var err = new Error("")
      err.message = "Password and confirm password must be equal."
      err.status = 401
      return next(err)
    }

    password = bcrypt.hashSync(password, saltRounds)

    // https://mongoosejs.com/docs/promises.html#queries-are-not-promises
    let query = User.create({
      email,
      firstName,
      lastName,
      userName,
      password
    })

    let user = await query.catch(err => res.send(err))
    req.session.userId = user._id
    res.redirect("profile")
  } else {
    return res.send("Fill the form correctly.")
  }
})

router.get("/", (req, res) => {
  return res.render("index", { title: "Home" })
})

router.get("/about", (req, res) => {
  return res.render("about", { title: "About" })
})

router.get("/contact", (req, res) => {
  console.log("contact")
  return res.render("contact", { title: "Contact" })
})

router.post("/", async (req, res) => {
  let { mail: email } = req.body

  if (!email || email.trim().length === 0) {
    return res.send("Email can not be blank.")
  }

  const query = Subscriber.create({ email }).exec()
  const subscriber = await query.catch(err => res.send(err))
  console.log(subscriber)
  res.redirect("/")
})

module.exports = router
