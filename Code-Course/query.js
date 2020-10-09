const mongoose = require("mongoose");
const Course = require("./models/courses");

mongoose
  .connect("mongodb://localhost:27017/Courses", { useNewUrlParser: true })
  .then(() => console.log("Connected succesfully"))
  .catch((err) => console.log("err", err));

Course.find()
  .limit(2)
  .select("name author")
  .then((courses) => console.log("1 ", courses));

Course.find({ author: "Mosh" })
  .select("name author")
  .then((courses) => console.log("2 ", courses));

Course.find({ price: { $gt: 10, $lt: 20 } })
  .select("name author price")
  .then((courses) => console.log("3 ", courses));

Course.find({ price: { $in: [10, 15] } })
  .select("name author price")
  .then((courses) => console.log("4 ", courses));

Course.find()
  .and([{ author: "Mosh" }, { isPublished: true }]) //.or
  .select("name author price")
  .then((courses) => console.log("5 ", courses));

Course.find()
  .and([{ author: "Mosh" }, { isPublished: true }]) //.or
  .select("name author price")
  .countDocuments()
  .then((courses) => console.log("6 ", courses));

Course.find()
  .select("name author price")
  .skip(2)
  .then((courses) => console.log("7 ", courses));

// Pagination example api/courses?pageIndex=2&pageSize=3
const pageIndex = 2;
const pageSize = 3;

Course.find()
  .select("name author price")
  .skip((pageIndex - 1) * pageSize)
  .limit(pageSize)
  .then((courses) => console.log("8 ", courses));

Course.findById("5f80a38116099e34c4d13102")
  .select("name author price")
  .then((courses) => console.log("9 ", courses));

Course.findOne({ author: "Mosh" })
  .select("name author price")
  .then((courses) => console.log("10 ", courses));

// Update
Course.findById("5f80a38116099e34c4d13102").then((courses) => {
  courses.author = "ken";
  courses.name = "Fullstack JS";
  courses.save().then(console.log).catch(console.log);
});

Course.findByIdAndUpdate("5f80a38116099e34c4d13102", {
  $set: { isPublished: false, price: 20 },
}).then((courses) => console.log("11 updated"));

Course.updateOne(
  { _id: "5f80a38116099e34c4d13103" },
  {
    $set: { name: "frontend" },
  }
).then((courses) => console.log("12 updated"));

Course.updateMany(
  {},
  {
    $unset: { isPublished: 1 },
  }
).then(console.log("13 updated"));

// Delete

Course.deleteOne({ author: "Mosh" }).then(console.log("14 deleted"));

Course.deleteMany({ author: "Mosh" }).then(console.log("15 deleted"));

Course.findByIdAndRemove("5f80a38116099e34c4d13106").then(
  console.log("16 deleted")
);

Course.findOneAndDelete({ name: "Fullstack JS" }).then(
  console.log("17 deleted")
);
