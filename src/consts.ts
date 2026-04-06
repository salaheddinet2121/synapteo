export const SITE_TITLE = "Saniform";
export const SITE_DESCRIPTION =
  "Saniform.fr, centre de formation spécialisé en hygiène des restaurants, HACCP, sécurité alimentaire, protocoles sanitaires et accompagnement opérationnel des équipes.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | Saniform",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Saniform",
    "saniform.fr",
    "centre de formation",
    "hygiène restaurant",
    "HACCP",
    "sécurité alimentaire",
    "PMS",
    "QHSE",
    "formation restauration",
    "prévention des risques",
    "hygiène alimentaire",
  ],
  authors: [{ name: "Saniform" }],
  creator: "Saniform",
  publisher: "Saniform",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "Saniform",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@saniform",
  },
};
