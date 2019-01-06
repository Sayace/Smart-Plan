# Sayace-final-project: Smart Plan
final-project created for Sayace

## Overview
Planning for classes for the next semester can get messy when you have a unfavorable registration time. It's better to plan ahead by listing ALL the classes you might want to take just in case your top choices become waitlisted or closed.

Smart Plan is a web app that will allow users to list all the classes they are interested in for the next semester. Users can register and login. Once they're logged in they can see their list and add to it. While adding they can give each class they are interested in a rank number to keep track of which class they would prefer to take. There will be an option to filter the list based on rank if the user wishes to see what class they ranked as their first, second, or third choice.

## Data Model
The Smart Plan application will store users and their course list

* users can have a list of courses (via reference in list)

An Example User:

```javascript
{
  username: String,
  password: String
}
```
An Example List:

```javascript
{
  user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  name: {type: String, required: true},
  rank: {type: Number, min: 1, required: true},
  semester: {type: String, required: true}
}
```


## [Link to Schema](db.js)

## Wireframes
Actual site looks different

/ - home page
![list](documentation/home.png)

/login - page to login
![list](documentation/login.png)

/join - page to create account
![list](documentation/join.png)

/view - page for showing courses for a semester
![list](documentation/view-semester.png)


## Site map
![list](documentation/sitemap.png)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can view all of the courses I've added in a single list
4. as a user, I can add to the list of courses which will include name of course, semester, and rank
5. as a user, I can filter the list of courses based on the rank and semester

## Goals

* Integrate user authentication
    * Will authenticate user which means we will use a middleware to make sure
    the user is who they say they are
    * Used Passport
* Use a CSS framework throughout your site
    * Will use bootstrap to make all pages consistent
    * Will also add mobile responsiveness


## [Link to Main Project File](app.js)

## Annotations / References Used

1. [Link to bootstrap template](https://getbootstrap.com/docs/3.3/examples/cover/)
2. [Link to Passport website](http://www.passportjs.org/docs/)
