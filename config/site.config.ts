export const siteConfig = {
  companyName: "Unnathi CNC Technologies Pvt. Ltd.",
  shortName: "Unnathi CNC",
  siteUrl: "https://www.unnathicnc.com",
  defaultLocale: "en-IN",
  industry: "CNC machining and precision component manufacturing",
  slogan: "Precision CNC Machining Partner in Bangalore",
  defaultOgImage: {
    url: "/placeholder.svg",
    alt: "CNC machining center at Unnathi CNC Bangalore",
    width: 1200,
    height: 630,
    type: "image/svg+xml",
  },
  establishedYear: 2007,
  social: {
    linkedin: "https://www.linkedin.com/company/unnathi-cnc",
    twitter: "https://x.com/unnathicnc",
    facebook: "https://www.facebook.com/unnathicnc",
    instagram: "https://www.instagram.com/unnathicnc",
  },
} as const;

export type SiteConfig = typeof siteConfig;
