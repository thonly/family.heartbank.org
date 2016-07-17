# HeartBank Web Application

## Requirements

For development, you will only need Node.js installed on your environment.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v5.11.0

    $ npm --version
    3.8.8

---

## Install

    $ git clone https://github.com/heartbank/Web.git
    $ cd Web
    $ npm install

### JavaScript

- [ESHint](http://eslint.org) is used to prevent JavaScript error.
- [Webpack](https://webpack.github.io) to handle bundling.
- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [autoprefixer](https://github.com/postcss/autoprefixer) is used to write futureproof CSS for CSS vendor prefix under the hood).

### Static server with Hot Reload

The app embed for development a static connect server with hot module replacement plugged.
So each time you start the app, you get automatic component reload in the browser whenever you update a file.

### Redux DevTools
Inspect state, time travel through various actions. Enabled by default for development environments.
- Press `ctrl + h` to toggle DevTools visibility
- press `ctrl + q` to toggle positioning of DevTools

### Initializing the Development Environment
    $ npm start
Point to http://localhost:8080

### Initializing the Production Environment
    $ npm run prod
Point to http://localhost:8080

### Running Tests
1. Run React tests with gulp at `localhost:9001` with `npm test`
1. Run React tests with Karma in Chrome and Firefox with `npm run karma`
1. Run React tests from the command line with `./node_modules/karma/bin/karma start --single-run --browsers PhantomJS`

### Build
    $ npm run build
