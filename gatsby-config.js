module.exports = {
  pathPrefix: `/olga`,
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "olga.local",
        protocol: "http",

        restApiRoutePrefix: "wp-json",

        hostingWPCOM: false,

        useACF: true,

        acfOptionPageIds: [],

        perPage: 100,

        concurrentRequests: 10,

        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
      },
    },
  ],
};
