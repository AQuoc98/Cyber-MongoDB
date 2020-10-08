const mongoose = require("mongoose");
const { User } = require('../model/User');

mongoose.connect('mongodb://localhost:27017/social-network', { useNewUrlParser: true })
  .then(() => console.log("Connected successfully"))
  .catch(err => console.log(err));

// CRUD

// create user
function createUser(username, password, email, fullName) {
  User.findOne({ username })
    .then(user => {
      if (user) return Promise.reject({ message: "username exists" })

      const newUser = new User({
        userame, password, email, fullName
      })
      return newUser.save()
    })
    .then(console.log)
    .catch(console.log)
}

createUser("user_3", "user_3", "user3@gmail.com", "User 3")

// read danh sach
function getUsers() {
  User.find()
    .then(console.log)
    .catch(console.log)
}

// read by id
function getUserById(userId) {
  User.findById(userId)
    .then(user => {
      if (!user) return Promise.reject({ message: "User not found" })

      console.log(user)
    })
    .catch(console.log)
}

// update by id
function updateUser(user) { // user = {username: "sdnfks", password: "djnfkdnsj", ..., ...}
  User.findById(user._id)
    .then(founduser => {
      if (!founduser) return Promise.reject({ message: "User not found" })

      founduser.name = user.name
      founduser.password = user.password
      founduser.fullName = user.fullName
      founduser.email = user.email
      return founduser.save()
    })
    .then(console.log)
    .catch(console.log)
}


// delete by id