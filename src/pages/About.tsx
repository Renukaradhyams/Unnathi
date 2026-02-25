import { motion } from "framer-motion";
import { CheckCircle, Award, Target, Eye, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import facilityImg from "@/assets/facility-3d.jpg";
import precisionParts from "@/assets/precision-parts-3d.jpg";

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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const milestones = [
  { year: "2007", event: "Company Founded — Single CNC turning center in rented premises" },
  { year: "2009", event: "First Major OEM Partnership Established" },
  { year: "2011", event: "ISO 9001 Certification Achieved" },
  { year: "2013", event: "Expanded to Multi-Machine CNC Facility" },
  { year: "2016", event: "AS9100D Certification — Entered Aerospace Segment" },
  { year: "2018", event: "Unit 2 — Advanced Milling Facility Operational" },
  { year: "2020", event: "100+ Global Clients Milestone" },
  { year: "2022", event: "Unit 3 — Quality & Batch Production Facility" },
  { year: "2024", event: "Unit 4 — Tumakuru High-Volume Manufacturing" },
];

const missionPoints = [
  "Deliver high-precision machined components meeting global standards",
  "Continuously invest in advanced manufacturing technologies",
  "Build long-term partnerships with customers",
  "Maintain a culture of quality, innovation, and integrity",
  "Develop skilled manpower and engineering excellence",
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative pt-36 pb-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <img src={facilityImg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="container relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-widest uppercase bg-primary/20 text-primary-foreground rounded-full mb-4 border border-primary/30">Who We Are</span>
          <h1 className="mt-2 text-4xl md:text-6xl font-heading text-primary-foreground">About Unnathi CNC</h1>
          <p className="mt-4 text-steel max-w-xl text-lg">Leading precision engineering and CNC machining company delivering excellence since 2007.</p>
        </motion.div>
      </div>
    </section>

    {/* Company Profile */}
    <section className="py-24 bg-background overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft}>
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Company Profile</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded in 2007 by experienced technocrats, Unnathi CNC Technologies began as a small machining facility with a single CNC turning center operating from a rented premises. Through consistent investment in technology, infrastructure, and human expertise, the company has grown into a well-established precision machining organization with multiple production units and advanced CNC equipment.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Today, the company operates from modern manufacturing facilities equipped with high-precision machining centers, inspection systems, and quality control processes aligned with international standards.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The organization is certified to AS9100D and ISO 9001 quality management systems, demonstrating its commitment to quality excellence and continuous improvement.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {["AS9100D Certified", "ISO 9001:2015", "100+ Global Clients", "Since 2007"].map((b) => (
              <motion.div key={b} whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted rounded-lg px-3 py-2.5 border border-transparent hover:border-primary/10 transition-all">
                <CheckCircle className="h-4 w-4 text-primary" /> {b}
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} className="relative">
          <img src={facilityImg} alt="Unnathi CNC Facility" className="rounded-2xl shadow-elevated" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-industrial rounded-2xl opacity-20 -z-10" />
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-24 bg-muted/50 overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={scaleUp}
          className="bg-background rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 group">
          <div className="w-14 h-14 rounded-xl bg-gradient-industrial flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-industrial">
            <Eye className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground">Our Vision</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            To become a globally recognized precision engineering partner by delivering innovative manufacturing solutions with superior quality, reliability, and technological excellence.
          </p>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ ...scaleUp, visible: { ...scaleUp.visible, transition: { delay: 0.15, duration: 0.5, ease: "easeOut" as const } } }}
          className="bg-background rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10 group">
          <div className="w-14 h-14 rounded-xl bg-gradient-industrial flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-industrial">
            <Target className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground">Our Mission</h3>
          <ul className="mt-3 space-y-2">
            {missionPoints.map((point) => (
              <li key={point} className="flex items-start gap-2 text-muted-foreground leading-relaxed">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" /> {point}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>

    {/* Organisational Overview */}
    <section className="py-24 bg-background overflow-hidden">
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideRight} className="md:order-2 relative">
          <img src={precisionParts} alt="Precision Components" className="rounded-2xl shadow-elevated" />
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10" />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideLeft} className="md:order-1">
          <h2 className="text-3xl md:text-4xl font-heading text-foreground">Organisational Overview</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            The company is led by an experienced leadership team supported by skilled engineers, technicians, and quality professionals. The organizational structure promotes efficiency, accountability, and continuous improvement across production, engineering, quality assurance, and customer support functions.
          </p>
          <h3 className="mt-6 text-xl font-heading font-semibold text-foreground">Business Focus</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Unnathi CNC positions itself as a trusted precision engineering partner specializing in critical machined components for OEM manufacturers and engineering companies requiring tight tolerances and consistent quality.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The company collaborates closely with customer engineering teams to provide optimized manufacturing solutions, ensuring performance, efficiency, and cost-effectiveness.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Milestones */}
    <section id="milestones" className="py-24 bg-muted/50 overflow-hidden">
      <div className="container">
        <SectionHeading label="Our Journey" title="Growth Timeline" description="From a single CNC machine to a multi-unit precision manufacturing enterprise." />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.08, duration: 0.5 } } }}
              className={`relative flex items-start gap-4 mb-10 ${i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 mt-1 border-2 border-background shadow-industrial" />
              <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <span className="text-sm font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">{m.year}</span>
                <p className="text-foreground font-medium mt-1">{m.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Awards */}
    <section id="awards" className="py-24 bg-background overflow-hidden">
      <div className="container">
        <SectionHeading label="Recognition" title="Certifications & Standards" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "AS9100D Certification",
            "ISO 9001:2015 Certification",
            "Quality Excellence Award",
            "Best Precision Supplier",
          ].map((a, i) => (
            <motion.div key={a} initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...scaleUp, visible: { ...scaleUp.visible, transition: { delay: i * 0.1, duration: 0.5 } } }}
              className="bg-muted/50 rounded-2xl p-6 text-center shadow-card hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 group border border-transparent hover:border-primary/10">
              <Award className="h-10 w-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm font-heading font-semibold text-foreground">{a}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
