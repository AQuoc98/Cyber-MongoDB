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

// Create Profile
function createProfile(userId, university, major, social, description) {
  User.findById(userId)
    .then((user) => {
      if (!user) return console.log("User does not exist");
      if (user.profile) return console.log("Profile Exist");

      const newProfile = new Profile({
        university,
        major,
        social,
        description,
      });
      user.profile = newProfile;
      return user.save();
    })
    .then(console.log)
    .catch(console.log);
}

// Update Profile
function updateProfile(userId, university, major, social, description) {
  User.findById(userId)
    .then((user) => {
      if (!user) return console.log("User does not exist");
      if (!user.profile) return console.log("Profile does not exist");

      const updateProfile = new Profile({
        university,
        major,
        social,
        description,
      });

      user.profile = updateProfile;
      return user.save();
    })
    .then(console.log)
    .catch(console.log);
}

// createProfile(
//   "5f85cd029a1af83444610c93",
//   ["VLU"],
//   ["IT"],
//   { facebook: "fb.com", instagram: "null" },
//   "Im a good man"
// );

// updateProfile(
//   "5f85cd029a1af83444610c93",
//   ["cyber"],
//   ["PR"],
//   { facebook: "fb.com/1", instagram: "null" },
//   "Im a bad man"
// );
