/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const languages = require('./src/data/languages');
module.exports = {
  pathPrefix: `/jacsa`,
  siteMetadata: {
    title: 'Full Stack Bootcamp',
    author: 'Javier Salazar',
    languages
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWith: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: "2l5iZa7lfqFZlA5vylbzKeajWvXKHBLFV_GYoGHMVGs",
        spaceId: "kt97pyvob2su"
      }
    }

  ]
}
