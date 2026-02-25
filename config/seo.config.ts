import { siteConfig } from "./site.config";

export type SeoPageKey =
  | "home"
  | "about"
  | "capabilities"
  | "infrastructure"
  | "industries"
  | "gallery"
  | "leadership"
  | "quality"
  | "careers"
  | "news"
  | "contact"
  | "units"
  | "unitDetail"
  | "notFound";

export type SeoEntry = {
  title: string;
  description: string;
  path: string;
};

const primaryKeywords = [
  "CNC machining Bangalore",
  "Precision components India",
  "CNC turning",
  "CNC milling",
  "Manufacturing company Bangalore",
];

export const defaultSeoConfig = {
  siteName: siteConfig.shortName,
  titleTemplate: `%s | ${siteConfig.shortName}`,
  description:
    "Unnathi CNC is a manufacturing company in Bangalore delivering CNC machining, CNC turning, CNC milling, and precision components for global OEMs.",
  keywords: primaryKeywords,
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  twitterCard: "summary_large_image",
} as const;

export const seoConfig: Record<SeoPageKey, SeoEntry> = {
  home: {
    title: "CNC Machining Bangalore for Precision Components",
    description: "Enterprise CNC machining Bangalore partner for precision components India with CNC turning and CNC milling expertise.",
    path: "/",
  },
  about: {
    title: "About Our Precision Manufacturing Company in Bangalore",
    description: "Learn about Unnathi CNC, a trusted manufacturing company Bangalore with world-class CNC machining and quality systems.",
    path: "/about",
  },
  capabilities: {
    title: "CNC Turning and CNC Milling Capabilities",
    description: "Explore advanced CNC turning, CNC milling, and precision machining capabilities for aerospace, automotive, and medical components.",
    path: "/capabilities",
  },
  infrastructure: {
    title: "Infrastructure for Precision Components India",
    description: "State-of-the-art manufacturing infrastructure supporting precision components India and high-volume CNC machining in Bangalore.",
    path: "/infrastructure",
  },
  industries: {
    title: "Industries Served by CNC Machining Bangalore Experts",
    description: "Unnathi CNC serves aerospace, automotive, medical, and industrial sectors with precision components and CNC machining solutions.",
    path: "/industries",
  },
  gallery: {
    title: "Gallery of CNC Turning and CNC Milling Operations",
    description: "View CNC turning, CNC milling, and quality inspection visuals from Unnathi CNC manufacturing facilities.",
    path: "/gallery",
  },
  leadership: {
    title: "Leadership Team | Unnathi CNC Bangalore",
    description: "Meet the leadership team driving precision manufacturing excellence and CNC machining innovation at Unnathi CNC.",
    path: "/leadership",
  },
  quality: {
    title: "Quality and Certifications for Precision Manufacturing",
    description: "AS9100D and ISO-certified quality management for precision components, CNC turning, and CNC milling production.",
    path: "/quality",
  },
  careers: {
    title: "Careers in CNC Machining and Precision Manufacturing",
    description: "Build your career with a leading manufacturing company Bangalore specializing in CNC machining and precision engineering.",
    path: "/careers",
  },
  news: {
    title: "News and Events | Unnathi CNC",
    description: "Read updates, milestones, and industry participation from Unnathi CNC's precision manufacturing operations.",
    path: "/news",
  },
  contact: {
    title: "Contact Unnathi CNC for CNC Machining Bangalore",
    description: "Contact Unnathi CNC for RFQs on CNC machining Bangalore projects, precision components India, CNC turning, and milling.",
    path: "/contact",
  },
  units: {
    title: "Our Manufacturing Units in Bangalore and Tumakuru",
    description: "Discover all Unnathi CNC production units for CNC turning, CNC milling, and scalable precision component manufacturing.",
    path: "/units",
  },
  unitDetail: {
    title: "Manufacturing Unit Details",
    description: "Detailed facility information for Unnathi CNC units, including specializations in CNC turning and CNC milling.",
    path: "/units",
  },
  notFound: {
    title: "Page Not Found",
    description: "The requested page could not be found on Unnathi CNC.",
    path: "/404",
  },
};
