# Sayace-final-project: Smart Plan
final-project created for Sayace

## Overview
Planning for classes for the next semester can get messy when you have a unfavorable registration time. It's better to plan ahead by listing ALL the classes you might want to take just in case your top choices become waitlisted or closed.

Smart Plan is a web app that will allow users to list all the classes they are interested in for the next semester. Users can register and login. Once they're logged in they can see their list and add to it. While adding they can give each class they are interested in a rank number to keep track of which class they would prefer to take. There will be an option to filter the list based on rank if the user wishes to see what class they ranked as their first, second, or third choice.

## Data Model
The Smart Plan application will store users, lists, and courses

* users can have multiple lists for each semester (via references)
* each list can have multiple items (by embedding)

An Example User:

```javascript
{
  username: "student",
  hash: // a password hash,
  lists: // an array of references to List documents
}
```
An Example List with Embedded Items:

```javascript
{
  user: // a reference to a User object
  name: "Spring 2019",
  items: [
    { name: "Applied Internet Technology", Days: "T/TR", recitation: false, Rank: 1},
    { name: "Basic Algorithms", Days: "M/W", recitation: true, Rank: 2},
  ],
}
```
## [Link to Commented First Draft Schema](db.js)

## Wireframes

/ - home page
![list](documentation/home.png)

/login - page to login
![list](documentation/login.png)

/join - page to create account
![list](documentation/join.png)

/view - display list of all semester plans already made
![list](documentation/view.png)

/view/semester - page for showing courses for a specific semester
![list](documentation/view-semester.png)


## Site map
![list](documentation/sitemap.png)

## User Stories or Use Cases

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can view all of the semester plans I've made in a single list
4. as a user, I can add to the list of courses for a semester which will include name of course, dates, and rank
5. as a user, I can filter the list based on the rank I assigned to a course

## Research Topics

* (5 points) Integrate user authentication
    * Will use passport to authenticate user
    * see <code>cs.nyu.edu/~jversoza/ait-final/register</code> for register page
    * see <code>cs.nyu.edu/~jversoza/ait-final/login</code> for login page
* (3 points) Perform client side form validation using PHP
    * see <code>cs.nyu.edu/~jversoza/ait-final/my-form</code>
    * if you put in a number that's greater than 5, an error message will appear in the dom
    
8 points total out of 8 required points

## [Link to Initial Main Project File](app.js)

## Annotations / References Used

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [PHP form validation](https://www.sitepoint.com/form-validation-with-php/) - (add link to source code that was based on this)
