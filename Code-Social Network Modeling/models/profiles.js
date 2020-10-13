const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  university: { type: [String] },
  major: { type: [String] },
  social: {
    facebook: { type: String },
    instagram: { type: String },
  },
  description: { type: String },
  // groups
  // profile
});
const Profile = mongoose.model("Profile", ProfileSchema); //collection: users

module.exports = {
  Profile,
  ProfileSchema,
};
