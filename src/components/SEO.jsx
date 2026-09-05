import { useEffect } from "react";

function SEO({ title, description }) {
  useEffect(() => {
    const finalTitle = title || "SAYLUNA | Discover Your Next Escape";

    const finalDescription =
      description ||
      "Discover beautiful destinations, resorts, experiences, and travel guides across the Philippines with SAYLUNA.";

    document.title = finalTitle;

    const setMeta = (attribute, key, content) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    setMeta("name", "description", finalDescription);

    setMeta("property", "og:title", finalTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "SAYLUNA");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", finalTitle);
    setMeta("name", "twitter:description", finalDescription);

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      window.location.origin + window.location.pathname,
    );
  }, [title, description]);

  return null;
}

export default SEO;
