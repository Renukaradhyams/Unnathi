import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, FileCheck, Microscope, ClipboardList } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const inspectionEquipment = [
  "Coordinate Measuring Machine (CMM)",
  "Profile Projector",
  "Surface Roughness Tester",
  "Hardness Tester (Rockwell & Vickers)",
  "Height Gauge",
  "Micrometer & Vernier Caliper Sets",
  "Thread Gauges & Ring Gauges",
  "Air Gauges",
];

const Quality = () => (
  <Layout>
    <section className="relative pt-32 pb-20 bg-gradient-dark">
      <div className="container relative">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Quality</span>
          <h1 className="mt-2 text-4xl md:text-5xl font-heading text-primary-foreground">Quality & Certifications</h1>
          <p className="mt-4 text-steel max-w-xl">Uncompromising quality standards across every component we manufacture.</p>
        </motion.div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="Certifications" title="Our Quality Credentials" />
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "AS9100D Certification", desc: "Our AS9100D certification demonstrates our commitment to the highest quality standards in aerospace manufacturing. This certification covers our entire manufacturing process from raw material procurement to final inspection and delivery.", scope: "CNC Turning, CNC Milling, Assembly, and Testing of precision aerospace components." },
            { title: "ISO 9001:2015 Certification", desc: "ISO 9001:2015 certification validates our quality management system across all manufacturing operations. We maintain rigorous process controls and continuous improvement programs.", scope: "Design, manufacture, and supply of precision machined components for all industries." },
          ].map((cert) => (
            <motion.div key={cert.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-muted rounded-lg p-8 shadow-card">
              <div className="w-14 h-14 rounded-sm bg-gradient-industrial flex items-center justify-center mb-4">
                <ShieldCheck className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground">{cert.title}</h3>
              <p className="mt-3 text-muted-foreground text-sm">{cert.desc}</p>
              <div className="mt-4 p-3 bg-background rounded-sm">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide">Scope</p>
                <p className="text-sm text-muted-foreground mt-1">{cert.scope}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Quality Policy */}
    <section className="py-20 bg-muted">
      <div className="container max-w-3xl text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <FileCheck className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-heading text-foreground">Our Quality Policy</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg italic">
            "We are committed to delivering precision-machined components that consistently meet or exceed customer requirements and applicable statutory & regulatory standards. Through continuous improvement, advanced technology, and a skilled workforce, we strive for zero-defect manufacturing."
          </p>
        </motion.div>
      </div>
    </section>

    {/* Inspection Equipment */}
    <section className="py-20 bg-background">
      <div className="container">
        <SectionHeading label="Quality Control" title="Inspection Equipment" description="Comprehensive inspection capabilities for 100% quality assurance." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {inspectionEquipment.map((eq) => (
            <motion.div key={eq} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-muted rounded-lg p-4 shadow-card flex items-center gap-3">
              <Microscope className="h-5 w-5 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground">{eq}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Compliance */}
    <section className="py-20 bg-muted">
      <div className="container">
        <SectionHeading label="Compliance" title="Traceability & Process Control" />
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: ClipboardList, title: "Full Material Traceability", desc: "Complete material certificates and batch traceability from raw material to finished product." },
            { icon: FileCheck, title: "First Article Inspection", desc: "Comprehensive FAI reports per AS9102 standard for all new and revised components." },
            { icon: ShieldCheck, title: "Statistical Process Control", desc: "SPC monitoring on critical dimensions ensuring consistent quality throughout production runs." },
          ].map((item) => (
            <motion.div key={item.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-background rounded-lg p-6 shadow-card">
              <item.icon className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-lg font-heading font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Quality;
