import { motion } from "framer-motion";
import { Car, Cog, Zap, Target, CheckCircle, Plane, Stethoscope, Sprout } from "lucide-react";
import Layout from "@/components/Layout";
import { buildPageSeo } from "@/seo/pageSeo";
import SectionHeading from "@/components/SectionHeading";
import precisionParts from "@/assets/precision-parts-3d.jpg";
import cncTurning from "@/assets/cnc-turning-3d.jpg";
import cncMilling from "@/assets/cnc-milling-3d.jpg";
import qualityLab from "@/assets/quality-lab-3d.jpg";
import facilityImg from "@/assets/facility-3d.jpg";
import aeroImg from "@/assets/aerospace-parts.jpg";
import medImg from "@/assets/medical-parts.jpg";
import agriImg from "@/assets/agriculture-parts.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const industries = [
  {
    icon: Plane, title: "Aerospace", img: aeroImg,
    desc: "We manufacture flight-critical components meeting AS9100D standards for aerospace OEMs and Tier-1 suppliers. Our precision machining capabilities deliver components with tolerances as tight as ±0.005mm.",
    components: ["Landing Gear Components", "Engine Mounts & Brackets", "Flight Control Parts", "Structural Fasteners", "Hydraulic Valve Bodies"],
  },
  {
    icon: Car, title: "Automotive", img: precisionParts,
    desc: "Precision components for the automotive industry including engine parts, transmission components, and safety-critical assemblies with tight tolerances and consistent quality for high-volume production.",
    components: ["Engine Components", "Transmission Parts", "Brake System Parts", "Suspension Components", "Fuel Injection Parts"],
  },
  {
    icon: Cog, title: "Industrial Machinery", img: cncTurning,
    desc: "High-precision components for industrial machinery and equipment manufacturers. Specializing in spindle components, gear assemblies, and critical machine parts demanding exceptional accuracy.",
    components: ["Spindle Components", "Gear Assemblies", "Hydraulic Valve Bodies", "Bearing Housings", "Coupling Parts"],
  },
  {
    icon: Zap, title: "Electrical & Electronics", img: qualityLab,
    desc: "Precision-machined components for electrical and electronics applications, including connectors, housings, and heat sinks manufactured to exacting specifications.",
    components: ["Connector Housings", "Heat Sinks", "Terminal Blocks", "Enclosure Parts", "Switch Components"],
  },
  {
    icon: Stethoscope, title: "Medical Equipment", img: medImg,
    desc: "Precision-machined medical components and surgical instruments manufactured in a controlled environment with biocompatible material expertise.",
    components: ["Orthopedic Implants", "Surgical Instruments", "Diagnostic Equipment Parts", "Dental Components", "Prosthetic Parts"],
  },
  {
    icon: Sprout, title: "Agricultural Machinery", img: agriImg,
    desc: "Durable, precision-engineered components for agricultural machinery and farming equipment designed to withstand demanding field conditions.",
    components: ["Shaft Components", "Gear Parts", "Hydraulic Fittings", "Coupling Elements", "Precision Pins & Bushings"],
  },
  {
    icon: Target, title: "Precision Engineering", img: cncMilling,
    desc: "Ultra-precision components for specialized engineering applications requiring tolerances as tight as ±0.005mm with advanced CNC equipment and skilled workforce.",
    components: ["Optical Components", "Measurement Instruments", "Tooling Inserts", "Gauge Components", "Calibration Standards"],
  },
];

const Industries = () => (
  <Layout seo={buildPageSeo("industries", [{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])}>
    <section className="relative pt-36 pb-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src={precisionParts} alt="Precision machined components for industrial applications" title="Precision machined components for industrial applications" className="w-full h-full object-cover"  loading="lazy" decoding="async" />
      </div>
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="container relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground rounded-full mb-4 border border-primary/30">Industries</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-heading text-primary-foreground">Industries We Serve</h1>
          <p className="mt-4 text-steel max-w-xl text-lg">Trusted partner across aerospace, automotive, industrial machinery, electronics, medical, agricultural, and precision engineering sectors.</p>
        </motion.div>
      </div>
    </section>

    {industries.map((ind, i) => (
      <section key={ind.title} className={`py-24 ${i % 2 === 0 ? "bg-background" : "bg-muted/50"} overflow-hidden`}>
        <div className="container">
          <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={i % 2 === 0 ? slideLeft : slideRight}
              className={i % 2 !== 0 ? "md:col-start-2" : ""}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-industrial flex items-center justify-center shadow-industrial">
                  <ind.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading text-foreground">{ind.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{ind.desc}</p>
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Key Components</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ind.components.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={i % 2 === 0 ? slideRight : slideLeft}
              className={i % 2 !== 0 ? "md:col-start-1" : ""}>
              <motion.img whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} src={ind.img} alt={ind.title} className="rounded-2xl shadow-elevated w-full h-80 object-cover" />
            </motion.div>
          </div>
        </div>
      </section>
    ))}
  </Layout>
);

export default Industries;
