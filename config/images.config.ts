export type SeoImage = {
  path: string;
  image: string;
  title: string;
  caption: string;
  width: number;
  height: number;
  mimeType: string;
};

export const seoImages: SeoImage[] = [
  { path: "/", image: "/images/cnc-machining-bangalore-hero.svg", title: "CNC Machining Center", caption: "Advanced CNC machining center in Bangalore", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/gallery", image: "/images/cnc-manufacturing-gallery-floor.svg", title: "Manufacturing Floor", caption: "Production floor and machining setup", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/gallery", image: "/images/cnc-turning-operation.svg", title: "CNC Turning", caption: "High precision CNC turning operation", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/gallery", image: "/images/cnc-milling-operation.svg", title: "CNC Milling", caption: "CNC milling machine for precision parts", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/infrastructure", image: "/images/manufacturing-infrastructure-bangalore.svg", title: "Manufacturing Infrastructure", caption: "Infrastructure and plant layout", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/units/bangalore-1", image: "/images/manufacturing-infrastructure-bangalore.svg", title: "Unit 1 Bangalore", caption: "Unit 1 CNC turning and precision machining", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/units/bangalore-2", image: "/images/manufacturing-infrastructure-bangalore.svg", title: "Unit 2 Bangalore", caption: "Unit 2 CNC milling and 5-axis machining", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/units/bangalore-3", image: "/images/manufacturing-infrastructure-bangalore.svg", title: "Unit 3 Bangalore", caption: "Unit 3 inspection and quality systems", width: 1600, height: 900, mimeType: "image/svg+xml" },
  { path: "/units/tumakuru", image: "/images/manufacturing-infrastructure-bangalore.svg", title: "Unit 4 Tumakuru", caption: "Tumakuru high-volume manufacturing unit", width: 1600, height: 900, mimeType: "image/svg+xml" },
];
