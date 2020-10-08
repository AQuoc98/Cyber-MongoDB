// Ky thuat: referrencing 1
// 1 Post co nhieu Comment(s)

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/social-network', { useNewUrlParser: true })
  .then(() => console.log("Connected successfully"))
  .catch(err => console.log(err));

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true }
})
const Post = mongoose.model("Post", PostSchema, "Post")

const CommentSchema = new mongoose.Schema({
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  content: { type: String, required: true }
})
const Comment = mongoose.model("Comment", CommentSchema, "Comment")

// const newPost = new Post({
//   content: "Day la bai viet thu 2"
// })
// newPost.save()
//   .then(post => console.log(post))
//   .catch(console.log)

// const comment_1 = new Comment({
//   postId: "5d4ac3e8083c7e63a8477276",
//   content: "Bai viet rat hay"
// })
// comment_1.save().then(console.log).catch(console.log)

// const comment_2 = new Comment({
//   postId: "5d4ac3e8083c7e63a8477276",
//   content: "Bai viet ko hay"
// })
// comment_2.save().then(console.log).catch(console.log)

Post.findById("5d4ac3e8083c7e63a8477276")
  .then(console.log).catch(console.log)

Comment.find({ postId: "5d4ac3e8083c7e63a8477276" })
  .then(console.log).catch(console.log)