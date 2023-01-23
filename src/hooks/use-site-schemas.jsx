export const useSiteSchemas = () => {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://www.spookytech.com",
    name: "Spooky technologies",
    logo: "https://www.spookytech.com/spookytech.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+5-601-785-8543",
      contactType: "Customer Support",
    },
  };

  const schemaWebsiteJSONLD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    // "@id": "https://www.spookytech.com#website",
    // "headline": "spookytech",
    url: "https://www.spookytech.com",
    name: "Spooky technologies",
    description: "Spooky technologies is a software development company",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.spookytech.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return [schemaOrgJSONLD, schemaWebsiteJSONLD];
};
