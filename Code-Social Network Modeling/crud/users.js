const mongoose = require("mongoose");

// Load model
const { User } = require("../models/users");
const { Profile } = require("../models/profiles");
const { Group } = require("../models/groups");
const { Post } = require("../models/posts");
const { Comment } = require("../models/comments");
const { Like } = require("../models/likes");

mongoose
  .connect("mongodb://localhost:27017/social-network", {
    useNewUrlParser: true,
  })
  .then(console.log("Connect Successfully"))
  .catch(console.log);

//   Create User
function createUser(username, password, email, fullName, dateOfBirth) {
  User.findOne()
    .or([{ username }, { email }])
    .then((user) => {
      if (user) return console.log("Username or Email exist");
      const newUser = new User({
        username,
        password,
        email,
        fullName,
        dateOfBirth,
      });
      return newUser.save();
    })
    .then((user) => user && console.log(user))
    .catch(console.log);
}

// Update User
function updateUser(id, username, password, email, fullName, dateOfBirth) {
  User.findById(id)
    .then((user) => {
      if (!user) return console.log("User does not exist");
      user.username = username;
      user.password = password;
      user.email = email;
      user.fullName = fullName;
      user.dateOfBirth = dateOfBirth;

      return user.save();
    })
    .then(console.log)
    .catch(console.log);
}

// Delete User
function deleteUser(id){
    User.findByIdAndRemove(id).then(console.log).catch(console.log)
}

// createUser("Ken", "123", "ken@gmail.com", "ndaq", "03/03/1998");

// updateUser(
//   "5f85c808ab9905355c4d414b",
//   "anhquoc",
//   "anhquoc",
//   "anhquoc@gmail.com",
//   "anhquoc",
//   "10/03/2020"
// );

// deleteUser("5f85c808ab9905355c4d414b")
