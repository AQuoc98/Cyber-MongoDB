const mongoose = require("mongoose");
const { LikeSchema } = require("./likes");

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: {
    type: [LikeSchema],
  },
  //   comments: use bucketing technical
});
const Post = mongoose.model("Post", PostSchema); //collection: users

module.exports = {
  Post,
  PostSchema,
};
