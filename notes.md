##### Reasearch and Random notes 
- npm init 
- npm -D install prettier 

## Eslint
- install eslint for linting and configure its functionality, use already available ones like airbnb config
- parserOption for syntax, "env":es6 for global variables which automatically sets parser options but not vice versa
- install plugins to add react,jsx support

## Parcel
- package bundler: combines all the js modules into one "/dist/bundle.js"
- Parcel is going to accept an entry point, crawl through all of its dependencies, and output a single, complete file with all of our code in it
- entry point index.html linked to app.js  "dev": "parcel src/index.html"

## Babel
- transpilation tool
- it'll handle jsx and typescript for us
- parcel handles Babel config but we still change one thing which parcel merges in its own babel config
-  added react presets to babel to make it support react features (jsx)

## Browserslist
- a package that parcel installs 
- transforms code from futuristic code to code which older browsers understand
