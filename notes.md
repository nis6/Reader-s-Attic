##### Reasearch and Random notes

<br/>

### APIs
- poemist
- openlibrary
- google books API
- google books embedded viewwer API

### Tools found along the way

- react-responsive?
- to upload figma on project repo?
- polished for normalise()

### Errors and solutions

- why use _:after and _:before in css for border-box?
- extensions give you live feedbacks etc but packages let
- you have to provide script tag with app file inside index.html, which otherwise create-react-app injects inside it.

## Modules & Organisation

- organise by module: feature first->function second
- organise by type: function first->feature second
- In ES6, having an index.js file in a folder lets you perform an import from the folder implicitly without specifying the index.js in the import statement – just like how web servers will serve up the index.html in a folder without you needing to explicitly put the index.html in the URL.

## Components

-

### Eslint

- install eslint for linting and configure its functionality, use already available ones like airbnb config
- parserOption for syntax, "env":es6 for global variables which automatically sets parser options but not vice versa
- install plugins to add react,jsx support

### Parcel

- package bundler: combines all the js modules into one "/dist/bundle.js"
- Parcel is going to accept an entry point, crawl through all of its dependencies, and output a single, complete file with all of our code in it
- entry point index.html linked to app.js "dev": "parcel src/index.html"

### Babel

- transpilation tool
- it'll handle jsx and typescript for us
- parcel handles Babel config but we still change one thing which parcel merges in its own babel config
- added react presets to babel to make it support react features (jsx)

### Browserslist

- a package that parcel installs
- transforms code from futuristic code to code which older browsers understand

#### npm or npx: So remember this, if you want to check/run a node package quickly without installing locally or globally use NPX.
