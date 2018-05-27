This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You will find some information on how to perform common tasks[here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Table of Contents

* [Folder Structure](#folder-structure)
* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
* [Notes](#notes)

## Folder Structure

After creation, your project should look like this:

```
seven/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    assets/
    App.js
    App.test.js
    index.css
    index.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Notes

* use Material-UI as UI framework, for test purpose it is easier to manage consistant styling and icons, etc.
* haven't implemented complicated design or features for User Listing, such as filtering, pagination, individual user details page, etc. All of those are easy to add, if required.
* I restrict this test within one hour, so the test coverage especially snapshot testing is not 100% covered, but from the existing ones I put there you get the idea.
