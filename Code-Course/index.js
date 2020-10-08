const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/fs05-courses", { useNewUrlParser: true })
  .then(() => console.log("Connected succesfully"))
  .catch(err => console.log(err));

// Tạo Schema
const CourseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String], //['NodejS', "mongo"]
  date: { type: Date, default: Date.now() },
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model("Course", CourseSchema);

const course_1 = new Course({
  name: "Web",
  author: "Nguyen Van A",
  tags: ["HTML", "CSS", "JS"],
  isPublished: false,
  price: 20
});

// ES6 - promise
// course_1
//   .save()
//   .then(course => console.log(course))
//   .catch(console.log);

// ES5 - callback
// course_1.save((err, course) => {
//   if (err) return console.log(err);

//   console.log(course);
// });

// ES7 - async-away
// const createCourse = async (name, author, tags, isPublished, price) => {
//   const course = new Course({
//     name,
//     author,
//     tags,
//     isPublished,
//     price
//   });
//   try {
//     const savedCourse = await course.save();
//     console.log(savedCourse); // then
//   } catch (error) {
//     console.timeLog(error); // catch
//   }
// };

// createCourse("Full Stack", "Song Le", ["Mongo", "nodejs"], true, 30);
