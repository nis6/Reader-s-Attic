#### Documenting the process, the learnings, errors and fixes etc.

## Modules & Organisation

- organise by module: feature first->function second
- organise by type: function first->feature second
- In ES6, having an index.js file in a folder lets you perform an import from the folder implicitly without specifying the index.js in the import statement – just like how web servers will serve up the index.html in a folder without you needing to explicitly put the index.html in the URL.

## Project Structure

## Table of contents

- [Overview](#overview)
  - [Built with](#built-with)
- [My process](#my-process)
  - [Errors](#errors)
  - [Learnings](#learnings)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

---

## My process

### ERRORS & Questions

- Why can't I use just a variable to toggle the navmenu
  - React components will only re-render when there are changes to props or state
- Changed the <Switch> to <Router> error resolved.
- we can avoid error by avoiding type="module" for parcel.
- A font error bcz of extra '
- react-responsive?
- to upload figma on project repo?
- ES6 doesn't allow export default const
- what provides the "/Home" syntax [no need to use .js] [issue-2]
- [what is this index.js entry point for modules](https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories)
- Dependency specifiers [issue-2]
- Directory structure [issue-2]

### Learnings

- ...
-
- On hover - border gives shift effect to elements [added to search bar]
- z-index only applies to positioned elements.
- A package root is a directory with a package.json
- multiple import named import destructured inside { }
- To use JSX, need to import React from 'react' because under the hood JSX is using React.createElement,
- also FB doesn't recommend using .jsx ?
- one can create a single module concentrating various exports from various modules.
- polished for normalise()
- React routers, matchers, navigators
- a rule that all React components must start with a upper case letter, or contain a dot, in JSX, lower-case tag names are considered to be HTML tags.
- XMLHttpRequest is an object that acts as an API
- CSS-in-JS : CSS composed of JS objects , not a featuer of react
- why use _:after and _:before in css for border-box?
- extensions give you live feedbacks etc but packages let you have to provide script tag with app file inside index.html, which otherwise create-react-app injects inside it.
- Request method for dynamic fetch API calls
- SCALING SVGs
  - SVGs cant be resized using width directly in css if is has viewport and width and height are set, only the viewport will resize with width.
  - or use transform: scale(2) [2 times increase] in the css style object

## Embedded Viewer API

- include the API Loader using a script tag.
- create a div element named "viewerCanvas" to hold the viewer.
- write a JavaScript function to create a "viewer" object.
- load the book using its unique identifier (in this case ISBN:0738531367).
- use google.books.setOnLoadCallback to call initialize when the API has fully loaded.
- an optional language parameter to your google.books.load call.
- instance of default viewer object
- The viewer implicitly uses the size of the container to size itself.
- The load() (in viewer.load()) method requires an identifier value, which tells the API what book to show.
- book identifier take isbn number or book preview url
- Handling failed initializations : viewer.load('ISBN:1234', alertNotFound);
- viewer.nextPage(); to turn next page after sometime

### Socials

- `<Link>` is relative while `<a>` is not

### Continued development

...

### Useful resources

- [React App book](https://survivejs.com/react/introduction/)
- [Embedded Viewer API](https://developers.google.com/books/docs/viewer/developers_guide)

## Author

- Twitter - [@Nishachauhanr](https://www.twitter.com/Nishachauhanr)

## Acknowledgments

...
