const mongoose = require("mongoose");
const Course = require("./models/courses");

mongoose
  .connect("mongodb://localhost:27017/Courses", { useNewUrlParser: true })
  .then(() => console.log("Connected succesfully"))
  .catch((err) => console.log(err));

const newCourse = new Course({
  name: "MongoDB",
  author: "Ken",
  tags: ["MongoDB", "Mongoose"],
  isPublished: true,
  price: 10,
});

newCourse.save().then((course) => console.log(course));






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
