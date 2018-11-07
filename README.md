# Sayace-final-project: Smart Plan
final-project created for Sayace

## Overview
Planning for classes for the next semester can get messy when you have a unfavorable registration time. It's better to plan ahead by listing ALL the classes you might want to take just in case your top choices become waitlisted or closed.

Smart Plan is a web app that will allow users to list all the classes they are interested in for the next semester. Users can register and login. Once they're logged in they can see their list and add to it. While adding they can give each class they are interested in a rank number to keep track of which class they would prefer to take. There will be an option to filter the list based on rank if the user wishes to see what class they ranked as their first, second, or third choice.

## Data Model
The Smart Plan application will store users, lists, and classes

users can have multiple lists (via references)
each list can have multiple items (by embedding)
(TODO: sample documents)

An Example User:

{
  username: "shannonshopper",
  hash: // a password hash,
  lists: // an array of references to List documents
}
An Example List with Embedded Items:

{
  user: // a reference to a User object
  name: "Breakfast foods",
  items: [
    { name: "pancakes", quantity: "9876", checked: false},
    { name: "ramen", quantity: "2", checked: true},
  ],
  createdAt: // timestamp
}
Link to Commented First Draft Schema
(TODO: create a first draft of your Schemas in db.js and link to it)

## Wireframes
(TODO: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/list/create - page for creating a new shopping list

list create

/list - page for showing all shopping lists

list

/list/slug - page for showing specific shopping list

list

## Site map
(TODO: draw out a site map that shows how pages are related to each other)

Here's a complex example from wikipedia, but you can create one without the screenshots, drop shadows, etc. ... just names of pages and where they flow to.

## User Stories or Use Cases
(TODO: write out how your application will be used through user stories and / or use cases)

as non-registered user, I can register a new account with the site
as a user, I can log in to the site
as a user, I can create a new grocery list
as a user, I can view all of the grocery lists I've created in a single list
as a user, I can add items to an existing grocery list
as a user, I can cross off items in an existing grocery list
## Research Topics
(TODO: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

(5 points) Integrate user authentication
I'm going to be using passport for user authentication
And account has been made for testing; I'll email you the password
see cs.nyu.edu/~jversoza/ait-final/register for register page
see cs.nyu.edu/~jversoza/ait-final/login for login page
(4 points) Perform client side form validation using a JavaScript library
see cs.nyu.edu/~jversoza/ait-final/my-form
if you put in a number that's greater than 5, an error message will appear in the dom
(5 points) vue.js
used vue.js as the frontend framework; it's a challenging library to learn, so I've assigned it 5 points
10 points total out of 8 required points (TODO: addtional points will not count for extra credit)

## Link to Initial Main Project File
(TODO: create a skeleton Express application with a package.json, app.js, views folder, etc. ... and link to your initial app.js)

## Annotations / References Used
(TODO: list any tutorials/references/etc. that you've based your code off of)

passport.js authentication docs - (add link to source code that was based on this)
tutorial on vue.js - (add link to source code that was based on this)
