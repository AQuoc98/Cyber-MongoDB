// Ky thuat: referrencing 2
// 1 Post co nhieu Comment(s)

const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/social-network', { useNewUrlParser: true })
  .then(() => console.log("Connected successfully"))
  .catch(err => console.log(err));

const PostSchema = new mongoose.Schema({
  content: { type: String, required: true },
  commentIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
})
const Post = mongoose.model("Post", PostSchema, "Post")

const CommentSchema = new mongoose.Schema({
  content: { type: String, required: true }
})
const Comment = mongoose.model("Comment", CommentSchema, "Comment")

// Create
// const comment_1 = new Comment({
//   content: "Bai viet rat hay"
// })
// comment_1.save().then(console.log).catch(console.log)

// const comment_2 = new Comment({
//   content: "Bai viet ko hay"
// })
// comment_2.save().then(console.log).catch(console.log)

// const newPost = new Post({
//   content: "Day la bai viet thu 2"
// })
// newPost.commentIds.push(comment_1)
// newPost.commentIds.push(comment_2)
// newPost.save()
//   .then(post => console.log(post))
//   .catch(console.log)

console.log("==========================")
// Post.findById("5d4ac9fed97c994040405132")
// .then(post => {
//   console.log(post)

//   Comment.find({ _id: { $in: post.commentIds } })
//   .then(console.log)
//   .catch(console.log)
//   })
//   .catch(console.log)

console.log("==========================")
Post.findById("5d4ac9fed97c994040405132")
  .populate("commentIds")
  .then(console.log)