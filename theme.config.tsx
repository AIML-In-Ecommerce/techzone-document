import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: 30 }}>TechZone</span>,
  project: {
    link: "https://github.com/AIML-In-Ecommerce",
  },

  docsRepositoryBase:
    "https://github.com/AIML-In-Ecommerce/techzone-document.git",
  footer: {
    text: "TextZone",
    // component: <div></div>,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – TechZone",
      };
    }
  },
};

export default config;
