import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://www.unnathicnc.com';
const routes = [
  '/', '/about', '/capabilities', '/infrastructure', '/industries', '/gallery', '/leadership', '/quality', '/careers', '/news', '/contact', '/units',
  '/units/bangalore-1', '/units/bangalore-2', '/units/bangalore-3', '/units/tumakuru',
];

const images = [
  { path: '/', image: '/images/cnc-machining-bangalore-hero.svg', title: 'CNC Machining Center', caption: 'Advanced CNC machining center in Bangalore' },
  { path: '/gallery', image: '/images/cnc-manufacturing-gallery-floor.svg', title: 'Manufacturing Floor', caption: 'Production floor and machining setup' },
  { path: '/gallery', image: '/images/cnc-turning-operation.svg', title: 'CNC Turning', caption: 'High precision CNC turning operation' },
  { path: '/gallery', image: '/images/cnc-milling-operation.svg', title: 'CNC Milling', caption: 'CNC milling machine for precision parts' },
  { path: '/infrastructure', image: '/images/manufacturing-infrastructure-bangalore.svg', title: 'Manufacturing Infrastructure', caption: 'Infrastructure and plant layout' },
  { path: '/units/bangalore-1', image: '/images/manufacturing-infrastructure-bangalore.svg', title: 'Unit 1 Bangalore', caption: 'Unit 1 CNC turning and precision machining' },
  { path: '/units/bangalore-2', image: '/images/manufacturing-infrastructure-bangalore.svg', title: 'Unit 2 Bangalore', caption: 'Unit 2 CNC milling and 5-axis machining' },
  { path: '/units/bangalore-3', image: '/images/manufacturing-infrastructure-bangalore.svg', title: 'Unit 3 Bangalore', caption: 'Unit 3 inspection and quality systems' },
  { path: '/units/tumakuru', image: '/images/manufacturing-infrastructure-bangalore.svg', title: 'Unit 4 Tumakuru', caption: 'Tumakuru high-volume manufacturing unit' },
];

const now = new Date().toISOString();
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>${now}</lastmod><changefreq>weekly</changefreq><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`).join('\n')}\n</urlset>\n`;
const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${images.map((entry) => `  <url><loc>${siteUrl}${entry.path}</loc><image:image><image:loc>${siteUrl}${entry.image}</image:loc><image:title>${entry.title}</image:title><image:caption>${entry.caption}</image:caption></image:image></url>`).join('\n')}\n</urlset>\n`;

const publicDir = path.resolve('public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml);
fs.writeFileSync(path.join(publicDir, 'image-sitemap.xml'), imageSitemapXml);
console.log('Generated sitemap.xml and image-sitemap.xml');
