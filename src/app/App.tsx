import React, { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import faviconImg from "../imports/WellPressed_Favicon.png";
import socialImg from "../imports/WellPressed_Share_Social.jpg";

export default function App() {
  useEffect(() => {
    // Set Favicon
    let link = document.querySelector(
      "link[rel~='icon']",
    ) as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = faviconImg;

    // Set Meta Tags
    const setMeta = (
      attrName: string,
      attrValue: string,
      content: string,
    ) => {
      let meta = document.querySelector(
        `meta[${attrName}="${attrValue}"]`,
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Open Graph / Facebook
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", "https://juicewellga.com");
    setMeta(
      "property",
      "og:title",
      "WellPressed | Pure, Cold-Pressed Juices",
    );
    setMeta(
      "property",
      "og:description",
      "Pure, locally sourced, cold-pressed juices delivered right to your door. Nourish your body with nature's best ingredients.",
    );
    setMeta("property", "og:image", socialImg);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", "https://juicewellga.com");
    setMeta(
      "name",
      "twitter:title",
      "WellPressed | Pure, Cold-Pressed Juices",
    );
    setMeta(
      "name",
      "twitter:description",
      "Pure, locally sourced, cold-pressed juices delivered right to your door. Nourish your body with nature's best ingredients.",
    );
    setMeta("name", "twitter:image", socialImg);

    // Standard Metadata
    setMeta(
      "name",
      "title",
      "WellPressed | Pure, Cold-Pressed Juices",
    );
    setMeta(
      "name",
      "description",
      "Pure, locally sourced, cold-pressed juices delivered right to your door. Nourish your body with nature's best ingredients.",
    );

    // Page Title
    document.title = "WellPressed | Pure, Cold-Pressed Juices";
  }, []);

  return <RouterProvider router={router} />;
}