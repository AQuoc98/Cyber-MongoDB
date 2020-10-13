const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

// Comment
const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  username: { type: String, required: true },
});
const Comment = mongoose.model("Comment", CommentSchema);

// Post
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  comments: {
    type: [CommentSchema],
  },
});
const Post = mongoose.model("Post", PostSchema);

// Create instances
const newComment1 = new Comment({
  username: "KEN",
  content: "I did believe that",
});

const newPost = new Post({
  title: "Vietnam vs Philippines",
  content: "VN win 2-1",
  comments: [],
});

newPost
  .save()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
