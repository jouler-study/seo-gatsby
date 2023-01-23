import React from "react";
import { isValidJson } from "../../utils/json-util";
import { SEO } from "../seo";

const BlogTemplate = (props) => {
  const { title } = props.pageContext;

  return (
    <article className="container">
      <h1>{title}</h1>
    </article>
  );
};

export const Head = ({ pageContext }) => {
  const { seoFields } = pageContext;
  const customSchemes = seoFields.customSchemes?.customSchemes;

  return (
    <SEO
      title={seoFields.pageTitle}
      customSchemas={
        isValidJson(customSchemes) ? JSON.parse(customSchemes) : []
      }
    />
  );
};

export default BlogTemplate;
