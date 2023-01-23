/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `seo-gatsby`,
    description: `Example project for the Gatsby Head API`,
    twitterUsername: `@joulert02`,
    image: `/logo.png`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "[CONTENTFUL_ACCESS_TOKEN]]",
        spaceId: "[CONTENTFUL_SPACE_ID]",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
