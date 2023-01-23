// implementation with react-helmet
import React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import { useSiteSchemas } from "../hooks/use-site-schemas";

export const SEO = ({ title, description, pathname, customSchemas= [], children }) => {
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
  const schemasJSONLD = {
    type: "application/ld+json",
    innerHTML: JSON.stringify([
      ...defaultSchemasJSONLD,
      ...customSchemas,
    ]),
  }

  return (
    <Helmet 
      htmlAttributes={{ lang: "es" }}
      title={seo.title}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `image`,
          content: seo.image,
        },
      ]}
      script={[schemasJSONLD]}
    />
  );
};
