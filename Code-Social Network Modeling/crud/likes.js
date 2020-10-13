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

function likeAndDislike(postId, userId) {
  Post.findById(postId)
    .then((post) => {
      if (!post) return console.log("The post does not exist");
      var index = -1;
      for (let i = 0; i < post.likes.length; i++) {
        if (post.likes[i].userId.equals(userId)) {
          post.likes.splice(i, 1);
          index = i;
          break;
        }
      }
      if (index === -1) {
        const newLike = new Like({ userId });
        post.likes.push(newLike);
      }
      return post.save();
    })
    .then(console.log)
    .catch(console.log);
}

// Query
function findLikes(postId) {
  Post.findById(postId).then((post) => {
    if (!post) return console.log("The post does not exist");
    for (let i = 0; i < post.likes.length; i++) {
      const userId = post.likes[i].userId;
      User.findById(userId)
        .select("username -_id")
        .then(console.log)
        .catch(console.log);
    }
  });
}

findLikes("5f85daa002978d1ddca28462");

// likeAndDislike("5f85daa002978d1ddca28462", "5f85cd029a1af83444610c93");
// Chay 2 lan ham` de like va dislike
