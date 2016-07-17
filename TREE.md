# Heartbank Web Application

Frontend code structure for Heartbank Web Application.

---

````
|
|   .babelrc
|   .eslintignore
|   .eslintrc
|   .gitignore
|   gulpfile.js
|   package.json
|   README.md
|   webpack.config.js
|
+---config
|   |   headers.js
|   |   webpack.common.js
|   |   webpack.dev.js
|   |   webpack.prod.js
|   |
|   \---helpers
|           root.helper.js
|
\---src
    |   index.js
    |
    +---assets
    |   |   manifest.json
    |   |
    |   \---icon
    |           android-icon-144x144.png
    |           android-icon-192x192.png
    |           android-icon-36x36.png
    |           android-icon-48x48.png
    |           android-icon-72x72.png
    |           android-icon-96x96.png
    |           apple-icon-114x114.png
    |           apple-icon-120x120.png
    |           apple-icon-144x144.png
    |           apple-icon-152x152.png
    |           apple-icon-180x180.png
    |           apple-icon-57x57.png
    |           apple-icon-60x60.png
    |           apple-icon-72x72.png
    |           apple-icon-76x76.png
    |           apple-icon-precomposed.png
    |           apple-icon.png
    |           browserconfig.xml
    |           favicon-16x16.png
    |           favicon-32x32.png
    |           favicon-96x96.png
    |           favicon.ico
    |           ms-icon-144x144.png
    |           ms-icon-150x150.png
    |           ms-icon-310x310.png
    |           ms-icon-70x70.png
    |
    +---components
    |       index.js
    |       |
    |       +---Example
    |       |       Example.js
    |       |       example.scss
    |
    +---containers
    |   |   index.js
    |   |
    |   +---App
    |   |       App.js
    |   |       app.scss
    |   \---DevTools
    |           DevTools.js
    |
    +---redux
    |   |   reducer.js
    |   |   store.js
    |   |
    |   +---modules
    |   |       +---Example
    |   |       |       action.js
    |   |       |       constant.js
    |   |       |       reducer.js
    |           reducer.js
    |
    +---template
    |       index.ejs
    |       register-service-worker.ejs
    |
    \---utils
````
