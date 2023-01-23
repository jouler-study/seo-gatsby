import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useSiteSchemas } from "../hooks/use-site-schemas";

export const SEO = ({ title, description, pathname, customSchemas= [], children }) => {
  console.log('🚀 ~ file: seo.jsx:6 ~ SEO ~ customSchemas', customSchemas)
  // get the default metadata set in gatsby-config.js
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  // get the default schemas (Organization, WebSite, etc.)
  const defaultSchemasJSONLD = useSiteSchemas();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  // merge the default schemas with the custom ones
  const schemasJSONLD = [
    ...defaultSchemasJSONLD,
    ...customSchemas,
  ]

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <script type="application/ld+json">
        {JSON.stringify(schemasJSONLD)}
      </script>
      {children}
    </>
  );
};
