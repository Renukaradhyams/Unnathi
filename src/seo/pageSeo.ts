import { seoConfig, type SeoPageKey } from "@config/seo.config";
import {
  generateBreadcrumbSchema,
  generateImageObjectSchema,
  generateLocalBusinessSchema,
  generateManufacturingCompanySchema,
  generateOrganizationSchema,
  generateWebPageSchema,
  generateWebsiteSchema,
  type ImageSchemaInput,
} from "./generateSchema";

type SeoOverride = Partial<{
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
}>;

export const buildPageSeo = (
  page: SeoPageKey,
  breadcrumbs: Array<{ name: string; path: string }>,
  overrides?: SeoOverride,
  pageImages: ImageSchemaInput[] = [],
) => {
  const base = seoConfig[page];
  const title = overrides?.title ?? base.title;
  const description = overrides?.description ?? base.description;
  const path = overrides?.path ?? base.path;

  return {
    title,
    description,
    path,
    image: overrides?.image,
    imageAlt: overrides?.imageAlt,
    jsonLd: [
      generateOrganizationSchema(),
      generateLocalBusinessSchema(),
      generateManufacturingCompanySchema(),
      generateWebsiteSchema(),
      generateWebPageSchema(title, path, description),
      generateBreadcrumbSchema(breadcrumbs),
      ...pageImages.map((item) => generateImageObjectSchema(item)),
    ],
  };
};
