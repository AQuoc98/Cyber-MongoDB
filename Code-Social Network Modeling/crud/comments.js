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

function createComment(postId, userId, content) {
  Post.findById(postId)
    .then((post) => {
      if (!post) return console.log("Post does not exist");
      const newComment = new Comment({ postId, userId, content });

      return newComment.save();
    })
    .then(console.log)
    .catch(console.log);
}

// Query
function queryComment(postId) {
  Comment.aggregate()
    .facet({
      post: [
        //   {
        //     $skip: 2,
        //   },
        //   {
        //     $limit: 2,
        //   },
        {
          $bucketAuto: {
            groupBy: "$postId",
            buckets: 2,
            output: {
              comments: { $push: { content: "$content" } },
            },
          },
        },
      ],
    })
    .then((comments) => console.log(JSON.stringify(comments, undefined, 2)))
    .catch(console.log);
}

// Update comment
function updateComment(commentId, content) {
  Comment.updateOne(
    { _id: commentId },
    {
      $set: { content },
    }
  )
    .then(console.log)
    .catch(console.log);
}

updateComment("5f85df87cdc67c020872361e", "cc");

// queryComment("5f85daa002978d1ddca28462")

// createComment("5f85daa002978d1ddca28462", "5f85cd029a1af83444610c93", "nice");
