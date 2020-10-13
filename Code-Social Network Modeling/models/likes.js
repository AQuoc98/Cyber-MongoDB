const mongoose = require("mongoose");

const LikeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});
const Like = mongoose.model("Like", LikeSchema); //collection: users

module.exports = {
  Like,
  LikeSchema,
};
