require('./db');
require('./auth');

const routes = require('./routes/index');
const users = require('./routes/users');

const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//schema models
User = mongoose.model('User');
const Course = mongoose.model('Courses');

const app = express();

// enable sessions
const session = require('express-session');
const sessionOptions = {
    secret: 'secret cookie thang (store this elsewhere!)',
    resave: true,
    saveUninitialized: true
};
app.use(session(sessionOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// body parser setup
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// middleware for passport
app.use(passport.initialize());
app.use(passport.session());

// drop req.user into the context of every template by adding properties to res.locals
app.use(function(req, res, next){
	res.locals.user = req.user;
	next();
});

app.use('/', routes);


//ah4005: linserv1.cims.nyu.edu ... port 20110

app.get('/', (req, res) => {
  res.render('index');
});



// handling login
app.get('/login', (req, res) => {
  res.render('login');
});



// handling register
app.get('/register', (req, res) => {
  res.render('register');
});


app.get('/view', (req, res) => {
  Course.find({},function(err, result) {
    //console.log(result);
    if(err){
      console.log(err);
    }
    else{
      res.render("view", {
        courses: result
      });
    }
  });
});

app.get('/add', (req, res) => {
  res.render('add');
});
app.post('/add', (req, res) => {
  new Course({
    name: req.body.name,
    dates: req.body.dates,
    rank: req.body.rank,
    semester: req.body.semester
  }).save(function(err){
    if(err){
      res.render( 'add', {message: "ERROR IN ADDING"});
    }
    else{
      res.redirect('/view');
    }
  });
});

//app.listen(3000);
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
