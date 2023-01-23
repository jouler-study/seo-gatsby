const path = require(`path`);
const queries = require("./querys/index").queries;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/components/templates/blog-template.jsx`);

  const result = await graphql(queries.allContentfulBlogPost);

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  result.data.allContentfulPageBlogPost.nodes.forEach((node) => {
    createPage({
      path: `blog/${node.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.slug,
        title: node.title,
        node_locale: node.node_locale,
        seoFields: node.seoFields,
      },
    });
  });
};
