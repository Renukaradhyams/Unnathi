import { contactConfig } from "@config/contact.config";
import { siteConfig } from "@config/site.config";
import { absoluteUrl } from "./generateMeta";

const baseId = `${siteConfig.siteUrl}/#organization`;

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": baseId,
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  logo: absoluteUrl(siteConfig.defaultOgImage.url),
  email: contactConfig.emails.rfq,
  telephone: contactConfig.phones.mobile,
  foundingDate: `${siteConfig.establishedYear}`,
  sameAs: Object.values(siteConfig.social),
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.siteUrl}/#local-business`,
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Peenya Industrial Area",
    addressLocality: "Bangalore",
    postalCode: "560058",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  telephone: contactConfig.phones.landline,
  email: contactConfig.emails.rfq,
});

export const generateManufacturingCompanySchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  additionalType: "https://schema.org/ManufacturingBusiness",
  "@id": `${siteConfig.siteUrl}/#manufacturing-company`,
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  description: "CNC machining Bangalore specialist for precision components India with advanced CNC turning and CNC milling.",
  areaServed: "India",
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  url: siteConfig.siteUrl,
  name: siteConfig.shortName,
  inLanguage: siteConfig.defaultLocale,
});

export const generateWebPageSchema = (name: string, path: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${absoluteUrl(path)}#webpage`,
  name,
  url: absoluteUrl(path),
  description,
  inLanguage: siteConfig.defaultLocale,
  isPartOf: { "@id": `${siteConfig.siteUrl}/#website` },
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; path: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});

export type ImageSchemaInput = {
  name: string;
  imageUrl: string;
  caption: string;
  pagePath: string;
  width?: number;
  height?: number;
  encodingFormat?: string;
};

export const generateImageObjectSchema = (image: ImageSchemaInput) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "@id": `${absoluteUrl(image.pagePath)}#image-${image.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  name: image.name,
  contentUrl: absoluteUrl(image.imageUrl),
  url: absoluteUrl(image.imageUrl),
  caption: image.caption,
  width: image.width,
  height: image.height,
  encodingFormat: image.encodingFormat,
});
