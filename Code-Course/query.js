const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/fs05-courses", { useNewUrlParser: true })
  .then(() => console.log("Connected succesfully"))
  .catch(err => console.log(err));

const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String], //['NodejS', "mongo"]
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model("Course", CourseSchema);

// Course.find({ price: { $gt: 10, $lte: 20 } })
//   // .limit(2)
//   .sort({ name: -1 })
//   .select("name author price")
//   .then(course => console.log(course))
//   .catch(console.log);

// Course.find()
//   .countDocuments()
//   .then(course => console.log("SoLuong: ", course))
//   .catch(console.log);

// Course
//   // .find({ name: /^node/i })
//   //   .find({ name: /js$/i })
//   //   .find({ name: /.*js.*/i })
//   .find()
//   .skip(3)
//   //   .and([{ isPublished: true}, {author:"Mosh"}])
//   //   .or([{ isPublished: true }, { author: "Mosh" }])
//   .sort({ name: -1 })
//   .select("name author price")
//   .then(course => console.log(course))
//   .catch(console.log);

//   Course.find()
//   //   .and([{ isPublished: true}, {author:"Mosh"}])
//   .or([{ isPublished: true }, { author: "Mosh" }])
//   .sort({ name: -1 })
//   .select("name author price")
//   .exec((err, res) => {
//       console.group(res)
//   })

// const page = 1;
// const length = 3;

// Course.find()
//   .skip((page - 1) * length)
//   .limit(length)
//   .then(console.log)
//   .catch(console.log);

// BT
Course.find()
  .and([{ isPublished: true }, { tags: "backend" }])
  .sort({ price: -1 })
  .select("name, author")
  .then(console.log)
  .catch(console.log);  
