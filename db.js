// 1ST DRAFT DATA MODEL
const mongoose = require('mongoose');

// users
// * users must login so they need authentication
// * users have a username and password and lists (can make more than one)
const User = new mongoose.Schema({
  // usernam
  // password will be hashed
  lists:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }]
});
mongoose.model("Users", User);

// a list of semesters
// * each list must have a related user
// * a list can have 0 or more items
const List = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  courses:  [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});
mongoose.model("List", List);

// course in semester plan
// * must include name of course, dates (like M/W or T/TR), and rank
// * items can be filtered by rank
const Course = new mongoose.Schema({
  list: [{ type: mongoose.Schema.Types.ObjectId, ref: 'List' }],
  name: {type: String, required: true},
  dates: {type: String, required: true},
  rank: {type: Number, min: 1, required: true}
});
mongoose.model("Courses", Course);

//add the code that connects to the database. We'll connect to the local
//instance of MongoDB, and we'll use a database called final-proj
mongoose.connect('mongodb://localhost/final-proj');
