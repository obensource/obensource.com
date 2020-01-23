const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/src/pages/index.js"))),
  "component---src-pages-music-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/src/pages/music.js"))),
  "component---src-pages-software-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/src/pages/software.js"))),
  "component---src-pages-writing-js": hot(preferDefault(require("/Users/obensource/code/obensource/obensource.com/src/pages/writing.js")))
}

