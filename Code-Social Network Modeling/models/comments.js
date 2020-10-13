const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  content: { type: String, required: true },
  createdDate: {type:Date, default: new Date().getTime()}
});
const Comment = mongoose.model("Comment", CommentSchema); //collection: users

module.exports = {
  Comment,
  CommentSchema,
};
