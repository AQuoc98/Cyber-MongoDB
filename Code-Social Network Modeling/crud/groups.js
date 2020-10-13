const mongoose = require("mongoose");

// Load model
const { User } = require("../models/users");
const { Profile } = require("../models/profiles");
const { Group } = require("../models/groups");
const { Post } = require("../models/posts");
const { Comment } = require("../models/comments");
const { Like } = require("../models/likes");
const comments = require("../models/comments");

mongoose
  .connect("mongodb://localhost:27017/social-network", {
    useNewUrlParser: true,
  })
  .then(console.log("Connect Successfully"))
  .catch(console.log);

function createGroup(name, description) {
  const newGroup = new Group({
    name,
    description,
  });
  newGroup.save().then(console.log).catch(console.log);
}

// createGroup("dota2vn", "playing dota2");

// Update group --> add user to group
function addUserToGroup(groupId, userId) {
  Group.findById(groupId)
    .then((group) => {
      if (!group) return console.log("Group does not exits");
      let index = -1;
      //   Neu user co trong group => user exist
      for (let i = 0; i < group.userIds.length; i++) {
        if (group.userIds[i].equals(userId)) {
          index = i;
          return console.log("user already belong to this group");
        }
      }
      //   Neu User khong co trong group => add user vao group
      if (index === -1) {
        // add userId vao group
        group.userIds.push(userId);
        group.save().then((group) =>
          // add groupId vao user
          User.findById(userId)
            .then((user) => {
              user.groupIds.push(group._id);
              return user.save();
            })
            .then(console.log)
            .catch(console.log)
        );
      }
    })
    .catch(console.log);
}

// addUserToGroup("5f85e0b0922f9a3a343e7728", "5f85cd029a1af83444610c93");

// Query
// co groupId =>> tim all user co trong gr
function findUsersByGroup(groupId) {
  Group.findById(groupId)
    .then((group) => {
      if (!group) return console.log("Gr does not exist");
      return User.find({ _id: { $in: group.userIds } }).select("username -_id");
    })
    .then(console.log)
    .catch(console.log);
}

// findUsersByGroup("5f85e0b0922f9a3a343e7728");

// co userId => tim all group chua user do
function findGroupsByUser(userId) {
  User.findById(userId)
    .then((user) => {
      if (!user) return console.log("User does not exist");
      return Group.find({ _id: { $in: user.groupIds } }).select("name -_id");
    })
    .then(console.log)
    .catch(console.log);
}

findGroupsByUser("5f85cd029a1af83444610c93");
