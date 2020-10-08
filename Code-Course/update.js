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

// Có hai cách update
// Tìm ra document cần update ==> update ==> save

// Course.findById("5d4431ab599526808e0f7dc0")
//   .then(course => {
//     if (!course) return Promise.reject({ error: "Not Found" });

//     course.name = "React";
//     return course.save();
//   })
//   .then(updatedCourse => {
//     console.log("TCL: updatedCourse", updatedCourse);
//   })
//   .catch(console.log);

// Sử dụng phương thức update của mongoose : updateOne + updateMany
// Course.updateOne(
//   { _id: "5d4431ab599526808e0f7dc0" },
//   {
//     $set: { isPublished: false }
//   }
// )
//   .then(console.log)
//   .catch(console.log);

// deleteOne + deleteMany
// Course.deleteMany()
//   .then(console.log)
//   .catch(console.log);
