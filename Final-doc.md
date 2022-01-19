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

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

[React App book](https://survivejs.com/react/introduction/)

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.