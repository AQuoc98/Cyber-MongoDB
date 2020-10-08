// Mô phỏng mối quan hệ 1 - 1
// kỹ thuật: embedding
// Đối tượng: User - Profile
// Nhúng Profile vào User
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/social-network', { useNewUrlParser: true })
  .then(() => console.log("Connected successfully"))
  .catch(err => console.log(err));

// Schema
const ProfileSchema = new mongoose.Schema({
  fullName: { type: String },
  job: { type: String },
  DOB: { type: Number } // 1992, 1980
})
const Profile = mongoose.model("Profile", ProfileSchema, "Profile");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: { type: ProfileSchema }
})
const User = mongoose.model("User", UserSchema, "User") //collection: users

// Create documents
const newUser = new User({ username: "user_1", password: "user_1" })
const newProfile = new Profile({ fullName: "User 1", job: "CEO", DOB: 1980 })
newUser.profile = newProfile;

newUser.save()
  .then(user => console.log(user))
  .catch(console.log)
