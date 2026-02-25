import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";
import { buildPageSeo } from "@/seo/pageSeo";
import SectionHeading from "@/components/SectionHeading";
import facilityImg from "@/assets/facility-3d.jpg";
import heroCnc from "@/assets/hero-cnc-3d.jpg";
import cncTurning from "@/assets/cnc-turning-3d.jpg";
import cncMilling from "@/assets/cnc-milling-3d.jpg";
import qualityLab from "@/assets/quality-lab-3d.jpg";
import precisionParts from "@/assets/precision-parts-3d.jpg";
import aeroImg from "@/assets/aerospace-parts.jpg";
import medImg from "@/assets/medical-parts.jpg";
import agriImg from "@/assets/agriculture-parts.jpg";
import machineImg from "@/assets/machine-tools-parts.jpg";
import { seoImages } from "@config/images.config";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const categories = ["All", "Factory", "Machinery", "Production", "Infrastructure"];

const galleryItems = [
  { src: facilityImg, title: "Manufacturing Floor", category: "Factory" },
  { src: heroCnc, title: "CNC Machining Center", category: "Machinery" },
  { src: cncTurning, title: "CNC Turning Center", category: "Machinery" },
  { src: cncMilling, title: "CNC Milling Process", category: "Machinery" },
  { src: precisionParts, title: "Precision Components", category: "Production" },
  { src: aeroImg, title: "Aerospace Components", category: "Production" },
  { src: medImg, title: "Medical Parts", category: "Production" },
  { src: agriImg, title: "Agricultural Components", category: "Production" },
  { src: machineImg, title: "Machine Tool Parts", category: "Production" },
  { src: qualityLab, title: "Quality Lab", category: "Infrastructure" },
  { src: facilityImg, title: "Assembly Area", category: "Factory" },
  { src: heroCnc, title: "5-Axis VMC", category: "Machinery" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <Layout seo={buildPageSeo("gallery", [{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }], undefined, seoImages.filter((image) => image.path === "/gallery").map((image) => ({ name: image.title, imageUrl: image.image, caption: image.caption, pagePath: image.path, width: image.width, height: image.height, encodingFormat: image.mimeType })))}>
      <section className="relative pt-36 pb-24 bg-gradient-dark overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img src={facilityImg} alt="Gallery cover showing Unnathi CNC production floor" title="Gallery cover showing Unnathi CNC production floor" className="w-full h-full object-cover"  loading="lazy" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="container relative">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground rounded-full mb-4 border border-primary/30">Gallery</span>
            <h1 className="mt-2 text-4xl md:text-6xl font-heading text-primary-foreground">Photo Gallery</h1>
            <p className="mt-4 text-steel max-w-xl text-lg">Explore our manufacturing facility, machinery, and production capabilities.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-gradient-industrial text-primary-foreground shadow-industrial"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title + i}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square shadow-card hover:shadow-elevated transition-shadow"
                  onClick={() => setSelectedImage(item)}
                >
                  <img src={item.src} alt={item.title} title={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"  loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <ZoomIn className="h-8 w-8 text-primary-foreground mx-auto mb-2" />
                      <p className="text-sm font-heading font-semibold text-primary-foreground">{item.title}</p>
                      <p className="text-xs text-steel">{item.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 p-2 text-primary-foreground hover:text-primary transition-colors">
                <X className="h-6 w-6" />
              </button>
              <img src={selectedImage.src} alt={selectedImage.title} title={selectedImage.title} className="w-full rounded-2xl shadow-elevated"  loading="lazy" decoding="async" />
              <div className="mt-4 text-center">
                <p className="text-lg font-heading font-semibold text-primary-foreground">{selectedImage.title}</p>
                <p className="text-sm text-steel">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
