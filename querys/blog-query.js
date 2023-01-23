exports.blogQuery = `
  query MyQuery {
    allContentfulPageBlogPost {
      nodes {
        node_locale
        slug
        title
        seoFields {
          pageTitle
          nofollow
          node_locale
          customSchemes {
            customSchemes
          }
        }
      }
    }
  }
`;
