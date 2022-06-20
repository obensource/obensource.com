const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'obensource',
    description: 'obensource landing site',
    author: '@obensource',
    siteUrl: 'https://www.obensource.com',
    social: [
      {
        name: 'Twitter',
        url: 'https://twitter.com/obensource'
      },
      {
        name: 'GitHub',
        url: 'https://github.com/obensource'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, '/src/images')
      }
    },
    'gatsby-transformer-gitinfo',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            nodes {
              path
            }
          }
          allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
            edges {
              node {
                fields {
                  gitLogLatestDate
                }
                name
              }
            }
          }
        }`,
        resolvePages: ({
          allSitePage: { nodes: sitePages },
          allFile: { edges: pageFiles }
        }) => {
          return sitePages.map((page) => {
            const pageFile = pageFiles.find(({ node }) => {
              const fileName = node.name === 'index' ? '/' : `/${node.name}/`
              return page.path === fileName
            })
            return { ...page, ...pageFile?.node?.fields }
          })
        },
        serialize: ({ path, gitLogLatestDate }) => {
          return {
            url: path,
            lastmod: gitLogLatestDate
          }
        },
        createLinkInHead: true
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bit-yes.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-157087286-1',
        anonymize: true
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline'
  ]
}
