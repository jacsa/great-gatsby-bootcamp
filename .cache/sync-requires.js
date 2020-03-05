const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-js": hot(preferDefault(require("/home/javier-pc/Documents/VSCode/great-gatsby-bootcamp/src/templates/blog.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/javier-pc/Documents/VSCode/great-gatsby-bootcamp/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/javier-pc/Documents/VSCode/great-gatsby-bootcamp/src/pages/about.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/home/javier-pc/Documents/VSCode/great-gatsby-bootcamp/src/pages/blog.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/javier-pc/Documents/VSCode/great-gatsby-bootcamp/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/javier-pc/Documents/VSCode/great-gatsby-bootcamp/src/pages/index.js")))
}

