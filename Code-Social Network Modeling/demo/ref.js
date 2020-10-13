// Ky thuat: referrencing 1
// 1 Post co nhieu Comment(s)

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/demo", { useNewUrlParser: true })
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.log(err));

// Post
const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});
const Post = mongoose.model("Post", PostSchema);

// Comment
const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  content: { type: String, required: true },
  username: { type: String, required: true },
});
const Comment = mongoose.model("Comment", CommentSchema);

//  Create instances
// const newPost = new Post({
//   title: "Introduction MongoDB",
//   content: "Ref1 ",
// });
// newPost
//   .save()
//   .then((post) => console.log(post))
//   .catch(console.log);

// const comment_1 = new Comment({
//   postId: newPost._id,
//   username: "Ken",
//   content: "Nice Post",
// });
// comment_1.save().then(console.log).catch(console.log);

// const comment_2 = new Comment({
//   postId: newPost._id,
//   username: "Ken 2",
//   content: "Nice Post 2",
// });
// comment_2.save().then(console.log).catch(console.log);

// Query
Comment.find()
  .populate("postId", "title -_id")
  .then((result) => console.log("result ", result))
  .catch((err) => console.log(err));
