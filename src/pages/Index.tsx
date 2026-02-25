import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Target, Cog, ShieldCheck, Users, Clock, HeartHandshake,
  Plane, Stethoscope, Sprout, Wrench, Factory, Quote, ArrowRight, Upload, CheckCircle, Star, Zap, Car
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { buildPageSeo } from "@/seo/pageSeo";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroCnc from "@/assets/hero-cnc-3d.jpg";
import aeroImg from "@/assets/aerospace-parts.jpg";
import medImg from "@/assets/medical-parts.jpg";
import agriImg from "@/assets/agriculture-parts.jpg";
import machineImg from "@/assets/machine-tools-parts.jpg";
import facilityImg from "@/assets/facility-3d.jpg";
import precisionParts from "@/assets/precision-parts-3d.jpg";
import cncTurning from "@/assets/cnc-turning-3d.jpg";
import qualityLab from "@/assets/quality-lab-3d.jpg";
import cncMilling from "@/assets/cnc-milling-3d.jpg";
import { seoImages } from "@config/images.config";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const whyChoose = [
  { icon: Target, title: "High Precision Engineering", desc: "Tolerances as tight as ±0.005mm across complex geometries with advanced CNC equipment." },
  { icon: Cog, title: "Advanced CNC Infrastructure", desc: "State-of-the-art CNC turning and milling centers with 4-axis and 5-axis machining expertise." },
  { icon: ShieldCheck, title: "Certified Quality Standards", desc: "AS9100D & ISO 9001:2015 certified quality management systems." },
  { icon: Users, title: "Skilled Engineering Workforce", desc: "Experienced engineers, technicians, and quality professionals driving manufacturing excellence." },
  { icon: Clock, title: "On-Time Delivery", desc: "Committed delivery schedules ensuring reliable supply chain performance." },
  { icon: HeartHandshake, title: "Customer-Centric Approach", desc: "Collaborative partnerships with OEMs and engineering companies for optimized solutions." },
];

const industries = [
  { icon: Plane, title: "Aerospace", img: aeroImg, desc: "Flight-critical components meeting AS9100D standards for aerospace OEMs." },
  { icon: Stethoscope, title: "Medical", img: medImg, desc: "Precision implants, surgical instruments, and diagnostic equipment parts." },
  { icon: Car, title: "Automotive", img: agriImg, desc: "Engine components, transmission parts, and safety-critical assemblies." },
  { icon: Wrench, title: "Industrial Machinery", img: machineImg, desc: "Spindle components, gear assemblies, and critical machine parts." },
];

const capabilities = [
  "CNC Turning", "CNC Milling", "Precision Machining", "Grinding Operations",
  "Reverse Engineering", "Prototype Development", "Import Substitution", "Jig & Fixture Manufacturing",
];

const materials = [
  "Carbon Steel", "Alloy Steel", "Stainless Steel", "Aluminium", "Brass & Copper", "Engineering Plastics", "Exotic Alloys",
];

const testimonials = [
  { name: "Rajesh Kumar", role: "VP Engineering, AeroTech India", text: "Unnathi CNC consistently delivers components that exceed our stringent aerospace specifications. Their precision and commitment to quality make them our go-to manufacturing partner.", rating: 5 },
  { name: "Dr. Priya Sharma", role: "Director, MedEquip Solutions", text: "Their precision and quality control for medical components is truly exceptional. We've maintained zero-defect delivery for over 3 years with Unnathi CNC.", rating: 5 },
  { name: "Anil Patel", role: "CEO, AgriMach Solutions", text: "Reliable partner for high-volume precision agricultural components. Outstanding delivery performance and competitive pricing set them apart.", rating: 5 },
  { name: "Sunil Mehta", role: "Head of Procurement, AutoParts Global", text: "From prototyping to batch production, Unnathi CNC handles it all with remarkable consistency. A trusted partner for our automotive component needs.", rating: 5 },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <Layout seo={buildPageSeo("home", [{ name: "Home", path: "/" }], undefined, seoImages.filter((image) => image.path === "/").map((image) => ({ name: image.title, imageUrl: image.image, caption: image.caption, pagePath: image.path, width: image.width, height: image.height, encodingFormat: image.mimeType })))}>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={heroCnc} alt="CNC Machining Center" title="CNC Machining Center" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
        </motion.div>
        <motion.div className="relative container py-32 pt-44" style={{ opacity: heroOpacity }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
            className="max-w-2xl"
          >
            <motion.span variants={fadeUp} className="inline-block px-5 py-2 text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground rounded-full mb-5 border border-primary/30 backdrop-blur-sm">
              AS9100D & ISO 9001:2015 Certified
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-primary-foreground leading-[1.08]">
              Precision Engineering<br />
              <span className="text-accent">Excellence Since 2007</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 text-lg md:text-xl text-steel/90 max-w-lg leading-relaxed">
              Delivering high-precision machined components and advanced CNC manufacturing solutions with world-class infrastructure, engineering expertise, and uncompromising quality standards.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-industrial text-primary-foreground hover:opacity-90 shadow-industrial hover:shadow-none transition-all duration-300 hover:scale-105 text-base px-8">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="hero" className="hover:scale-105 transition-all duration-300 text-base">
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs text-steel/60 tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-8 border-2 border-steel/30 rounded-full flex justify-center pt-1">
            <motion.div
              className="w-1 h-2 bg-primary/60 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </section>

      {/* Corporate Overview */}
      <section className="py-28 bg-background overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={slideLeft}>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10">About Unnathi CNC</span>
              <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight">
                Precision Engineering Since 2007
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-base">
                Unnathi CNC Technologies Pvt. Ltd. is a leading precision engineering and CNC machining company established in 2007 and headquartered in Bangalore, India. The company specializes in manufacturing high-precision machined components and assemblies for global customers across multiple engineering sectors.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed text-base">
                With advanced CNC infrastructure, experienced engineering teams, and a strong quality-driven culture, we have built a reputation for delivering reliable, high-quality components that meet stringent technical specifications and industry standards.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["AS9100D Certified", "ISO 9001:2015", "4 Manufacturing Units", "Since 2007"].map((badge) => (
                  <motion.div key={badge} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted rounded-lg px-4 py-3 hover:bg-primary/5 transition-colors duration-200 border border-transparent hover:border-primary/10">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" /> {badge}
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="mt-8 inline-block">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group text-base">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideRight}
              className="relative"
            >
              <motion.img whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }} src={facilityImg} alt="Unnathi CNC Facility" title="Unnathi CNC Facility" className="rounded-2xl shadow-elevated w-full" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-gradient-industrial rounded-2xl opacity-20 -z-10" />
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-primary/10 rounded-full -z-10" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 md:right-8 bg-background/95 backdrop-blur-xl rounded-xl p-4 shadow-elevated border border-border/50"
              >
                <div className="text-2xl font-heading font-bold text-primary">4 Units</div>
                <div className="text-xs text-muted-foreground">Manufacturing Facilities</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Manufacturing Strengths */}
      <section className="py-28 bg-muted/50 overflow-hidden">
        <div className="container">
          <SectionHeading label="Manufacturing Strengths" title="Why Partner With Unnathi CNC" description="Advanced CNC capabilities, certified quality processes, and customer-centric engineering solutions." />
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-background rounded-xl p-7 shadow-card hover:shadow-elevated transition-all duration-300 group border border-transparent hover:border-primary/10"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-industrial flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-industrial">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Counters */}
      <section className="py-24 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={cncMilling} alt="CNC machining service showcase image" title="CNC machining service showcase image" className="w-full h-full object-cover"  loading="lazy" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.15) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="container relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">By The Numbers</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-heading text-primary-foreground">Our Manufacturing Strength</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <AnimatedCounter end={17} label="Years of Excellence" suffix="+" />
            <AnimatedCounter end={20} label="CNC Machining Centers" suffix="+" />
            <AnimatedCounter end={15} label="CNC Turning Centers" suffix="+" />
            <AnimatedCounter end={4} label="Manufacturing Units" />
            <AnimatedCounter end={100} label="Global Clients" suffix="+" />
          </div>
        </div>
      </section>

      {/* Capabilities Highlights */}
      <section className="py-28 bg-background overflow-hidden">
        <div className="container">
          <SectionHeading label="Our Capabilities" title="Advanced CNC Manufacturing" description="Comprehensive precision machining solutions from prototype to production." />
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: "CNC Turning & Milling", img: cncTurning, desc: "State-of-the-art CNC machines capable of producing complex geometries with high precision and repeatability." },
              { title: "Precision Machining", img: cncMilling, desc: "Manufacturing high-accuracy components for industries requiring tight tolerances and superior surface finish quality." },
              { title: "Quality & Inspection", img: qualityLab, desc: "Strict quality control processes supported by advanced inspection equipment ensuring every component meets specifications." },
            ].map((cap, i) => (
              <motion.div
                key={cap.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.15, duration: 0.6 } } }}
                className="group overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500 bg-background border border-border/50 hover:border-primary/20"
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.7 }} src={cap.img} alt={cap.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">{cap.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                  <Link to="/capabilities" className="mt-4 inline-flex items-center text-sm font-semibold text-primary hover:gap-2 gap-1 transition-all duration-200">
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Capabilities & Materials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft} className="bg-muted/50 rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Core Capabilities</h3>
              <div className="grid grid-cols-2 gap-2">
                {capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {cap}
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} className="bg-muted/50 rounded-2xl p-8 border border-border/50">
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">Materials Expertise</h3>
              <div className="grid grid-cols-2 gap-2">
                {materials.map((mat) => (
                  <div key={mat} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {mat}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-28 bg-muted/50 overflow-hidden">
        <div className="container">
          <SectionHeading label="Industries We Serve" title="Trusted Across Critical Sectors" description="Delivering precision components for the world's most demanding industries." />
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {industries.map((ind) => (
              <motion.div
                key={ind.title}
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group overflow-hidden rounded-2xl shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={ind.img} alt={ind.title} title={ind.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"  loading="lazy" decoding="async" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/10">
                      <ind.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-heading font-semibold text-primary-foreground">{ind.title}</span>
                  </div>
                </div>
                <div className="p-5 bg-background">
                  <p className="text-sm text-muted-foreground leading-relaxed">{ind.desc}</p>
                  <Link to="/industries" className="mt-3 inline-flex items-center text-xs font-semibold text-primary hover:gap-2 gap-1 transition-all duration-200">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-12 text-center">
            <Link to="/industries">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
                View All Industries <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Multi-Unit Presence */}
      <section className="py-28 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.08) 1px, transparent 0)", backgroundSize: "48px 48px" }} />
        </div>
        <div className="container relative">
          <SectionHeading label="Our Presence" title="Multi-Unit Manufacturing Network" description="Strategically located manufacturing units across Bangalore and Tumakuru enabling scalable production, specialization, and efficient logistics." light />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { name: "Unit 1 — Bangalore", area: "Peenya Industrial Area", spec: "Precision CNC Turning Operations", id: "bangalore-1" },
              { name: "Unit 2 — Bangalore", area: "Rajajinagar Industrial Estate", spec: "Advanced Milling & Multi-Axis Machining", id: "bangalore-2" },
              { name: "Unit 3 — Bangalore", area: "Bommasandra Industrial Area", spec: "Batch Production & Quality Inspection", id: "bangalore-3" },
              { name: "Unit 4 — Tumakuru", area: "Tumakuru Industrial Area", spec: "High-Volume Manufacturing & Expansion", id: "tumakuru" },
            ].map((unit) => (
              <motion.div
                key={unit.id}
                variants={scaleUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-dark rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-industrial flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-industrial">
                  <Factory className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary-foreground group-hover:text-accent transition-colors">{unit.name}</h3>
                <p className="text-xs text-steel mt-1 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" /> {unit.area}
                </p>
                <p className="text-sm text-steel/80 mt-3">{unit.spec}</p>
                <Link to={`/units/${unit.id}`} className="mt-4 inline-flex items-center text-xs font-semibold text-primary hover:gap-2 gap-1 transition-all duration-200">
                  View Details <ArrowRight className="h-3 w-3" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="mt-10 text-center">
            <Link to="/units">
              <Button size="lg" className="bg-gradient-industrial text-primary-foreground hover:opacity-90 shadow-industrial hover:shadow-none transition-all duration-300 hover:scale-105">
                Explore All Units <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Preview */}
      <section className="py-28 bg-background overflow-hidden">
        <div className="container">
          <SectionHeading label="Our Infrastructure" title="World-Class Manufacturing Facility" />
          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {[
              { title: "CNC Machining Centers", img: heroCnc, items: ["Vertical Machining Centers (VMC)", "4-Axis & 5-Axis Machines", "High-Speed Machining"] },
              { title: "CNC Turning Centers", img: cncTurning, items: ["Multi-Axis CNC Lathes", "Swiss-Type Lathes", "Turn-Mill Combined Centers"] },
              { title: "Quality & Inspection", img: qualityLab, items: ["Profile Projector", "Digital Height Master", "Precision Measuring Instruments"] },
            ].map((cat) => (
              <motion.div key={cat.title} variants={scaleUp} whileHover={{ y: -6 }} className="bg-muted/50 rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group border border-transparent hover:border-primary/10">
                <div className="h-40 overflow-hidden">
                  <img src={cat.img} alt={cat.title} title={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"  loading="lazy" decoding="async" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-industrial flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-industrial -mt-10 relative">
                    <Factory className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{cat.title}</h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-muted/30 overflow-hidden">
        <div className="container">
          <SectionHeading label="Client Testimonials" title="What Our Partners Say" description="Hear from the companies that trust Unnathi CNC for their precision manufacturing needs." />
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={scaleUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="bg-background rounded-2xl p-6 relative border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-300 group"
              >
                <Quote className="h-8 w-8 text-primary/10 absolute top-5 right-5 group-hover:text-primary/20 transition-colors" />
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-industrial flex items-center justify-center text-lg font-heading font-bold text-primary-foreground shadow-industrial">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.text}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={precisionParts} alt="Precision components manufactured in India" title="Precision components manufactured in India" className="w-full h-full object-cover"  loading="lazy" decoding="async" />
        </div>
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(0 0% 100% / 0.05) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container relative text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-3xl md:text-5xl font-heading text-primary-foreground">
              Looking for a Reliable Precision Manufacturing Partner?
            </h2>
            <p className="mt-4 text-steel max-w-lg mx-auto text-lg">
              Connect with our engineering team to discuss your project requirements and manufacturing solutions.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-industrial text-primary-foreground hover:opacity-90 shadow-industrial hover:shadow-none transition-all duration-300 hover:scale-105 text-base px-8">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="hero" className="hover:scale-105 transition-all duration-300 text-base">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
