const mongoose = require("mongoose");
const { ProfileSchema } = require("./profiles");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  registerDate: { type: Date, default: new Date().getTime() },
  // groups
  profile: { type: ProfileSchema },
  groupIds: { type: [mongoose.Schema.Types.ObjectId], ref: "Group" },
});
const User = mongoose.model("User", UserSchema); //collection: users

module.exports = {
  User,
  UserSchema,
};
