module.exports = {
  siteMetadata: {
    title: 'gatsby-source-notionso blocks test',
    description:
      'building this to see if i can get notion working as a cms for gatsby',
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-notionso',
      options: {
        name: 'Blog',
        rootPageUrl: 'https://www.notion.so/test-public-page-da0ca5fe8b5e423582c4734d104e064e',
        debug: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
