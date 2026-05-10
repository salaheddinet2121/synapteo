export const SITE_TITLE = "Synapteo";
export const SITE_DESCRIPTION =
  "Synapteo, centre de formation en langues étrangères en France. Anglais, espagnol, français langue étrangère — cours individuels, groupes et formations professionnelles éligibles CPF et OPCO.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | Synapteo",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Synapteo",
    "centre de formation langues",
    "formation linguistique",
    "cours d'anglais",
    "cours d'espagnol",

    "FLE",
    "français langue étrangère",
    "formation professionnelle langues",
    "CPF langues",
    "OPCO formation",
    "cours de langues en ligne",
    "formation langues entreprise",
  ],
  authors: [{ name: "Synapteo" }],
  creator: "Synapteo",
  publisher: "Synapteo",
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
    siteName: "Synapteo",
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
    creator: "@synapteo",
  },
};
