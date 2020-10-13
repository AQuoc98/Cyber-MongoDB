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

// Create Post
function createPost(userId, title, content) {
  User.findById(userId)
    .then((user) => {
      if (!user) return console.log("User does not exist");

      const newPost = new Post({
        userId,
        title,
        content,
      });
      return newPost.save();
    })
    .then(console.log)
    .catch(console.log);
}

// Update Post
function updatePost(postId, title, content) {
  Post.updateOne(
    { _id: postId },
    {
      $set: { title, content },
    }
  )
    .then(console.log)
    .catch(console.log);
}

// Delete Post
function deletePost(postId) {
  Post.findOneAndRemove({ _id: postId }).then(console.log).catch(console.log);
}

//  query
Post.find().populate("userId").then(console.log).catch(console.log);
deletePost("5f85cf8c5cc0bc4418463c30");

createPost("5f85cd029a1af83444610c93", "Love", "Im a good man");
// updatePost("5f85cf8c5cc0bc4418463c30", "hate", "Im a bad man");
